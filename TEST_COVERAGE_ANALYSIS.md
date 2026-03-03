# Test Coverage Analysis

## Current State: No Tests Exist

The codebase has **zero test infrastructure** — no test framework installed, no test files, no test scripts in `package.json`, and no CI test steps. The only validation today is `pnpm check` (TypeScript + Svelte type checking).

---

## Priority 1 — Pure Utility Functions (Unit Tests)

These are the highest-value, lowest-effort targets. They contain real business logic, are framework-independent, and can be tested with Vitest immediately.

### `src/lib/utils/quiz.ts` — `calculateResult()` (Critical)

This is the most important function to test. It drives the quiz outcome that feeds into the OpenAI prompt. Bugs here silently produce wrong results for users.

| Test case | Why it matters |
|---|---|
| Quiz with no `scoring`/`outcomes` returns default outcome | Ensures fallback path works |
| Single-choice scoring accumulates correctly across categories | Core scoring logic |
| Multiple-choice scoring accumulates for array answers | Different code path from single-choice |
| Unanswered questions (undefined) are skipped | Line 37 early return |
| Unknown categories in option scores are ignored | Line 42-43 guard |
| Highest score wins the correct category | Winner selection |
| Tiebreaker logic picks the configured category | Lines 69-73, subtle bug risk |
| No winning category falls back to tiebreaker or first category | Lines 78-79 edge case |
| Returned outcome matches the winning category | End-to-end correctness |

### `src/lib/utils/services.ts` (High)

| Function | Key test cases |
|---|---|
| `getAllServices()` | Returns all services with slugs extracted from file paths |
| `getServiceBySlug()` | Found vs. not-found cases |
| `getHealthCoachingServices()` | Filters by `category === 'health-coaching'`, sorts by `order` |
| `getSkinTreatmentServices()` | Filters by `category === 'skin-treatments'`, sorts by `order` |
| `getRelatedServices()` | Returns same-category services excluding current; fills from other category when too few; respects `limit`; returns empty array for unknown slug |

### `src/lib/utils/blog.ts` (Medium)

| Function | Key test cases |
|---|---|
| `getAllPosts()` | Returns posts sorted newest-first by `publishedAt` |
| `getAllPosts()` | Falls back to slug alphabetical sort when dates missing |
| `getPostBySlug()` | Found vs. not-found |

### `src/lib/data/areas.ts` (Low — simple but worth a smoke test)

| Function | Key test cases |
|---|---|
| `getAllAreas()` | Returns all 7 areas |
| `getAreaBySlug('burlington')` | Returns correct area |
| `getAreaBySlug('nonexistent')` | Returns undefined |
| `getAreaSlugs()` | Returns all slugs as strings |

---

## Priority 2 — Server-Side Logic (Integration Tests)

### `src/hooks.server.ts` — Redirect Logic (High)

The `handle` function contains 5 redirect rules. A regression here causes 404s for users coming from Google (old indexed URLs). These can be tested by mocking the SvelteKit `event` and `resolve` objects.

| Test case | Expected |
|---|---|
| `www.vicaria.ca/about` | 301 → `vicaria.ca/about` |
| `/en/appointment` | 301 → `/free-consultation` |
| `/en/contactus` | 301 → `/contact` |
| `/en/shop` | 301 → `/pricing` |
| `/about-us` | 301 → `/about` |
| `/our-services` | 301 → `/service` |
| `/contactus` | 301 → `/contact` |
| `/ambassador` | 301 → `/` |
| `/web/login` | 301 → `/` |
| `/offer` | 301 → `/pricing` |
| `/appointment/anything` | 301 → `/free-consultation` |
| `/shop/anything` | 301 → `/pricing` |
| `/en/any-path` | 301 → `/` |
| `/about` (no redirect) | Falls through to paraglide middleware |

### `src/routes/assessment/[quiz]/+page.server.ts` — Form Action (High)

| Test case | Why |
|---|---|
| Missing `answers` field returns `fail(400)` | Input validation |
| Invalid JSON in answers | Unhandled — currently throws (potential bug) |
| `calculateResult` returns `undefined` triggers error path | Line 52-54 |
| `getLabel` resolves single value to label | Prompt quality |
| `getLabel` resolves array values to comma-separated labels | Multiple-choice formatting |
| `getLabel` falls back to raw value for unknown `field_id` | Graceful degradation |
| Prompt template replacement covers all placeholders | Ensures no `{name}` literals in prompt |
| Missing `combinedData.name` defaults to `'Friend'` | Line 78 |
| Missing `combinedData.user_context` defaults to `'None provided'` | Line 84 |

### `src/routes/sitemap.xml/+server.ts` (Medium)

| Test case | Why |
|---|---|
| Output is valid XML | Broken sitemap hurts SEO |
| All service pages included | Dynamic content coverage |
| All area pages included | Geographic pages coverage |
| Correct `Content-Type: application/xml` | Browser/crawler compatibility |
| Priorities are within 0.0-1.0 range | Sitemap spec compliance |

---

## Priority 3 — Component Tests (Svelte Component Tests)

These require `@testing-library/svelte` + Vitest and are more effort but cover user-facing behavior.

- **`Quiz.svelte`** — The most logic-heavy component: renders landing page, progresses through steps, handles single/multiple choice, validates required fields, submits form and displays results, shows loading state
- **`ContactForm.svelte`** — Form field validation, submission behavior
- **`Breadcrumbs.svelte`** — Renders correct breadcrumb chain from data
- **`FAQ.svelte`** — Accordion expand/collapse behavior

---

## Priority 4 — End-to-End Tests (Playwright)

SvelteKit has first-class Playwright support. Key user journeys:

| Journey | Steps |
|---|---|
| Service discovery | Homepage → Services → Service detail page → CTA |
| Quiz completion | Assessment landing → Answer all questions → Submit → See AI result |
| Area page navigation | Area page → Click service → Service page |
| Legacy URL handling | Visit `/en/appointment` → Verify redirect to `/free-consultation` |
| Contact form | Fill form → Submit → Verify success state |

---

## Recommended Setup

Install Vitest (already compatible with the Vite config):

```bash
pnpm add -D vitest @testing-library/svelte @testing-library/jest-dom jsdom
```

Add to `package.json` scripts:

```json
"test": "vitest run",
"test:watch": "vitest"
```

Add to `vite.config.ts`:

```ts
test: {
  include: ['src/**/*.test.ts'],
  environment: 'jsdom',
}
```

Start with `src/lib/utils/quiz.test.ts` — it has the highest business logic density and is completely framework-independent.

---

## Potential Bugs Found During Analysis

1. **`assessment/[quiz]/+page.server.ts:38`** — `JSON.parse(answersJson)` has no try/catch. Malformed JSON will throw an unhandled error instead of returning `fail(400)`.
2. **`assessment/[quiz]/+page.server.ts:20-25`** — When a quiz is not found, the load function catches the error but doesn't throw a 404. The commented-out `throw error(404, ...)` means the page renders with no quiz data instead of showing a proper error page.
3. **`hooks.server.ts`** — The `legacyRedirects` map includes `/offer` → `/pricing`, but `/offer` appears to be a valid current route (`src/routes/(pages)/offer/`). This redirect may be shadowing the actual offer page.

---

## Summary

| Area | Files | Priority | Effort | Impact |
|---|---|---|---|---|
| Quiz scoring | `utils/quiz.ts` | Critical | Low | High — wrong results = wrong AI prompts |
| Service utils | `utils/services.ts` | High | Low | Medium — broken filtering affects pages |
| Hook redirects | `hooks.server.ts` | High | Medium | High — broken redirects = SEO damage |
| Assessment action | `assessment/+page.server.ts` | High | Medium | High — form failures = lost leads |
| Blog utils | `utils/blog.ts` | Medium | Low | Low — simple lookup logic |
| Area data | `data/areas.ts` | Low | Low | Low — static data, minimal logic |
| Sitemap/robots | `sitemap.xml/+server.ts` | Medium | Low | Medium — SEO infrastructure |
| Svelte components | `components/*.svelte` | Medium | High | Medium — UI behavior |
| E2E user journeys | All routes | Low | High | High — but only after unit tests exist |
