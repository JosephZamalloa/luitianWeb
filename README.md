# LUITIAN — Official Site

Sitio web oficial del artista LUITIAN, construido con Next.js 14, Framer Motion y Tailwind CSS.

## Estructura

```
luitian-site/
├── app/
│   ├── page.tsx          ← Página principal (luitian.com)
│   ├── links/
│   │   └── page.tsx      ← Página de links (links.luitian.com)
│   ├── layout.tsx
│   └── globals.css
├── public/               ← Aquí van tus imágenes
│   ├── artist-hero.jpg   ← Foto hero del artista
│   └── artist-avatar.jpg ← Avatar circular (links page)
└── components/
```

## Setup

```bash
npm install
npm run dev
```

## Agregar tus imágenes

### Página Principal (Hero)
En `app/page.tsx`, en el componente `Hero()`, reemplaza:
```tsx
// Busca este comentario y descomenta la línea de abajo:
{/* <img src="/artist-hero.jpg" className="absolute inset-0 w-full h-full object-cover object-top opacity-60" /> */}
```

### Links Page (Avatar)
En `app/links/page.tsx`, reemplaza:
```tsx
// Busca este comentario y descomenta la línea de abajo:
{/* Replace with: <img src="/artist-avatar.jpg" className="w-full h-full object-cover" /> */}
```

### Galería
En `app/page.tsx`, en el componente `Gallery()`, agrega imágenes reales comentadas como `gallery-0.jpg`, `gallery-1.jpg`, etc.

## Personalización

### Links sociales (links/page.tsx)
Actualiza el array `links` con tus URLs reales:
```tsx
{ id: "spotify", label: 'NEW SINGLE: "FUEGO"', href: "https://open.spotify.com/...", ... }
```

### Tour dates (page.tsx)
Actualiza el array `tourDates` con tus fechas reales.

### Discografía (page.tsx)
Actualiza el array `albums` con tu catálogo real.

## Subdominio para Links

Para que `links.tudominio.com` apunte a `/links`, configura en tu hosting o usa middleware de Next.js para rewrite según el hostname.

### Con Vercel (recomendado):
En `next.config.js`:
```js
module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          has: [{ type: 'host', value: 'links.luitian.com' }],
          destination: '/links',
        },
      ],
    }
  },
}
```

## Deploy

```bash
npm run build
```

Compatible con Vercel, Netlify, o cualquier plataforma que soporte Next.js.
