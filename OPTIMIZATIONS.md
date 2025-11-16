# Optimizaciones Implementadas

Este documento describe todas las optimizaciones implementadas en el proyecto Vicaria Health para mejorar el rendimiento y reducir costos.

## 📊 Resumen de Mejoras

- **Google Places API**: Migrado a la nueva API + sistema de caché
- **Reviews**: Sistema de caché de 24h + pre-build estático
- **Componentes**: Lazy loading para Testimonials
- **Imágenes**: Conversión automática a WebP (40-90% de reducción)
- **ISR**: Cache headers y prerendering para páginas de servicios

---

## 1. 🔧 Google Places API - Nueva Implementación

### Problema Resuelto
- La API legacy no estaba habilitada
- Llamadas frecuentes costosas a la API

### Solución
- Usando **Places API (New)**: `https://places.googleapis.com/v1/places/`
- Headers especiales: `X-Goog-Api-Key` y `X-Goog-FieldMask`
- Sistema de caché de **24 horas** en disco
- Fallback a datos estáticos pre-generados

### Configuración Necesaria (CRÍTICO)
1. **Habilitar Places API (New)**
   - Ve a [Google Cloud Console](https://console.cloud.google.com/)
   - Navega a "APIs & Services" → "Library"
   - Busca **"Places API (New)"** (NO la antigua "Places API")
   - Click en "Enable"

2. **Configurar API Key**
   - Ve a "APIs & Services" → "Credentials"
   - Edita tu API Key existente o crea una nueva
   - En "API restrictions":
     - Selecciona "Restrict key"
     - Marca **"Places API (New)"**
   - En "Application restrictions":
     - **Para desarrollo**: "None" (temporal)
     - **Para producción**: "IP addresses" (agrega tus IPs de servidor)
     - O usa "HTTP referrers" solo para llamadas desde el navegador

3. **Variables de Entorno**
   Ya están configuradas en `.env`:
   ```bash
   GOOGLE_PLACES_API_KEY="AIzaSyBZ2lZdOxE3Z4R2VnYdK6fwaRqj4lLyyPE"
   GOOGLE_PLACE_ID="ChIJWW4RP9qbLIgRCkMd-eNpDTI"
   ```

### ⚠️ Diferencias Importantes con la API Nueva
- La nueva API usa headers `X-Goog-Api-Key` en lugar de query params
- Los nombres de campos son diferentes (camelCase en lugar de snake_case)
- Mejor seguridad y más features
- Recomendada por Google para todas las nuevas implementaciones

### Ahorro Estimado
**~70% de llamadas a la API** gracias al caché de 24h

---

## 2. 💾 Sistema de Caché de Reviews

### Implementación
- **Archivo de caché**: `.cache/reviews.json` (24h de duración)
- **Flujo**: Cache → API → Fallback estático
- **Logs**: Visible en consola del servidor

### Archivos Modificados
- `src/routes/+page.server.ts` - Implementa caché y fetch

### Invalidación Manual
```bash
# Borrar caché para forzar nueva llamada
rm .cache/reviews.json
```

---

## 3. 📦 Pre-build de Reviews (Datos Estáticos)

### Script Creado
```bash
pnpm run fetch:reviews
```

### Qué Hace
1. Llama a Google Places API
2. Guarda reviews en `src/lib/data/google-reviews.json`
3. Se usa como fallback cuando la API falla

### Integración con Build
El script se ejecuta automáticamente antes de cada build:
```json
{
  "scripts": {
    "build": "pnpm run fetch:reviews && vite build"
  }
}
```

### Ahorro Estimado
**~95% de llamadas en runtime** - Solo se llama durante deploy

---

## 4. ⚡ Lazy Loading de Componentes

### Componente Optimizado
- **Testimonials** ahora se carga solo cuando está cerca del viewport

### Implementación
- Usa **Intersection Observer** con `rootMargin: 200px`
- Placeholder con spinner mientras carga
- Altura mínima para evitar layout shift

### Archivos Modificados
- `src/routes/+page.svelte`

### Ahorro Estimado
**~15% del bundle inicial** + mejor tiempo de carga

---

## 5. 🖼️ Optimización de Imágenes a WebP

### Script Creado
```bash
pnpm run optimize:images
```

### Qué Hace
1. Busca todas las imágenes `.jpg`, `.jpeg`, `.png` en `static/images/`
2. Las convierte a `.webp` con calidad 85%
3. Mantiene los originales como fallback

### Resultados Obtenidos
```
maurin-casella.jpg → 40.2% smaller
vicaria-hero.png → 90.5% smaller  ⭐
yamilet-and-maurin-removebg-preview.png → 90.7% smaller  ⭐
```

### Uso en Código
Ahora puedes usar:
```html
<img src="/images/photo.webp" alt="Description" />
```

O crear un componente con fallback:
```svelte
<picture>
  <source srcset="/images/photo.webp" type="image/webp">
  <img src="/images/photo.jpg" alt="Description">
</picture>
```

### Ahorro Estimado
**~40-90% de reducción en tamaño de imágenes**

---

## 6. 🚀 ISR (Incremental Static Regeneration)

### Configuración
- **Páginas de servicios**: Pre-renderizadas + cache de 24h
- **Homepage**: Cache de 1h
- **Stale-while-revalidate**: Sirve contenido antiguo mientras actualiza

### Cache Headers Configurados

#### Páginas de Servicios (`/service/*`)
```
Cache-Control: public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800
```
- 24h de cache
- 7 días de stale-while-revalidate

#### Homepage (`/`)
```
Cache-Control: public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400
```
- 1h de cache
- 24h de stale-while-revalidate

### Archivos Modificados
- `svelte.config.js` - Configuración global de prerendering
- `src/routes/service/[slug]/+page.ts` - Cache headers de servicios
- `src/routes/+page.server.ts` - Cache headers de homepage

### Ahorro Estimado
**~80% menos requests al servidor** gracias a CDN caching

---

## 📈 Impacto Total Estimado

| Optimización | Ahorro | Impacto |
|-------------|--------|---------|
| API Caché | ~70% llamadas | 💰 Reducción de costos API |
| Pre-build Reviews | ~95% runtime calls | 🚀 Tiempo de carga |
| Lazy Loading | ~15% bundle inicial | ⚡ First Contentful Paint |
| WebP Images | ~40-90% tamaño | 📉 Bandwidth |
| ISR + Cache | ~80% server requests | 💾 Servidor + CDN |

---

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
pnpm dev

# Construir para producción
pnpm build  # Incluye fetch:reviews automáticamente

# Pre-generar reviews
pnpm run fetch:reviews

# Optimizar imágenes a WebP
pnpm run optimize:images

# Verificar tipos
pnpm check
```

---

## 📝 Notas Importantes

### Cache
- El directorio `.cache/` está en `.gitignore`
- Se regenera automáticamente en cada deploy
- Puedes borrar manualmente para forzar refresh

### Imágenes WebP
- Las imágenes originales se mantienen
- WebP solo se genera si no existe
- Ejecuta `optimize:images` después de agregar nuevas imágenes

### Google Places API
- Asegúrate de habilitar la nueva API en Google Cloud Console
- Las credenciales ya están en `.env`
- El caché reduce significativamente los costos

### ISR
- Funciona mejor con un CDN (Vercel, Netlify, Cloudflare)
- Los headers de cache se respetan automáticamente
- No requiere configuración adicional en el deploy

---

## 🔍 Monitoreo

### Logs de Caché
El servidor imprime logs útiles:
```
Using cached reviews
Cache expired
No cache found
Reviews cached successfully
```

### Verificar Optimizaciones
1. **Network tab**: Verifica que las imágenes sean `.webp`
2. **Performance tab**: Verifica lazy loading de Testimonials
3. **Response headers**: Verifica `Cache-Control` headers
4. **Build output**: Verifica que reviews se pre-generen

---

## 🚨 Troubleshooting

### Reviews no se cargan
1. Verifica que la API esté habilitada en Google Cloud
2. Revisa las credenciales en `.env`
3. Borra `.cache/reviews.json` y recarga

### Imágenes no se optimizan
1. Verifica que `sharp` esté instalado: `pnpm list sharp`
2. Ejecuta manualmente: `pnpm run optimize:images`
3. Revisa permisos de escritura en `static/images/`

### Cache no funciona
1. Verifica headers en DevTools → Network
2. Asegúrate de estar usando un CDN compatible
3. Revisa configuración del adapter en producción

---

**Última actualización**: 2025-01-16
**Mantenedor**: Claude Code + Vicaria Team
