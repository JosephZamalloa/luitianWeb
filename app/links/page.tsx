'use client';

const links = [
  { label: 'NUEVO SENCILLO: "K TE KIERO"', href: 'https://open.spotify.com/intl-es/album/44n44Ftfsd0eN0qZmbbbYW?si=ZfpwjQ9MTkWOrY9_z53U1Q', color: '#1DB954', icon: 'spotify' },
  { label: 'SPOTIFY',   href: 'https://open.spotify.com/artist/5ODu8L4V0IIy2kvPivKWQU', color: '#1DB954', icon: 'spotify' },
  { label: 'YOUTUBE',   href: 'https://www.youtube.com/@luitian',        color: '#FF0000', icon: 'youtube' },
  { label: 'INSTAGRAM', href: 'https://instagram.com/off_luitian/',       color: '#E1306C', icon: 'instagram' },
  { label: 'TIKTOK',    href: 'https://www.tiktok.com/@luitian',          color: '#69C9D0', icon: 'tiktok' },
];

const icons: Record<string, JSX.Element> = {
  spotify:   <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>,
  youtube:   <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  instagram: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
  tiktok:    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34v-6.9a8.28 8.28 0 004.84 1.54V6.5a4.85 4.85 0 01-1.07-.19z"/></svg>,
};

export default function LinksPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-5 pt-16 pb-12"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 20%, #1a0028 0%, #000 50%), radial-gradient(ellipse 60% 40% at 80% 80%, #0d0015 0%, #000 60%)' }}>

      {/* Avatar */}
      <div className="relative mb-5">
        <div className="w-22 h-22 rounded-full border-2 border-[#cc00ff] overflow-hidden" style={{ width: 88, height: 88, boxShadow: '0 0 30px rgba(204,0,255,.25)' }}>
          <img src="/artist-avatar.jpg" alt="LUITIAN" className="w-full h-full object-cover" style={{ objectPosition: 'center 15%', filter: 'grayscale(20%)' }} />
        </div>
        <div className="absolute inset-[-6px] rounded-full border-2 border-[#cc00ff]/50 animate-[ring-pulse_2.5s_ease-in-out_infinite]" />
      </div>

      <h1 className="font-bebas text-3xl tracking-[6px] text-white mb-1">LUITIAN</h1>
      <p className="font-mono text-[10px] tracking-[3px] text-white/40 mb-8">📍 CHILE</p>

      {/* Links */}
      <div className="w-full max-w-[440px] flex flex-col gap-3">
        {links.map((l, i) => (
          <a key={i} href={l.href} target="_blank" rel="noreferrer"
            className="flex items-center gap-3.5 px-5 py-4 border border-white/[0.08] rounded-xl no-underline text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.07]"
            style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = l.color + '66')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}>
            <span style={{ color: l.color }} className="shrink-0">{icons[l.icon]}</span>
            <span className="font-mono text-[11px] tracking-[2px] flex-1">{l.label}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="2" className="w-3.5 h-3.5"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        ))}
      </div>

      <p className="font-mono text-[9px] tracking-[2px] text-white/20 mt-12">© 2026 LUITIAN</p>

      <style>{`@keyframes ring-pulse { 0%,100%{transform:scale(1);opacity:.5} 50%{transform:scale(1.12);opacity:0} }`}</style>
    </main>
  );
}
