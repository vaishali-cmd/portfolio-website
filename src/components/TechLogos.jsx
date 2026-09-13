export const PythonLogo = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 128 128" className={className}>
    <defs>
      <linearGradient id="pyBlue" x1="10%" y1="10%" x2="90%" y2="90%">
        <stop offset="0%" stopColor="#387eb8" />
        <stop offset="100%" stopColor="#366994" />
      </linearGradient>
      <linearGradient id="pyYellow" x1="10%" y1="10%" x2="90%" y2="90%">
        <stop offset="0%" stopColor="#ffe873" />
        <stop offset="100%" stopColor="#ffd43b" />
      </linearGradient>
    </defs>
    <path 
      fill="url(#pyBlue)" 
      d="M63.5 12c-27.6 0-26 12-26 12l.1 12.4h26.4v3.7H27.2C15 40.1 15 54 15 54s-1.2 14.3 12.2 14.3h7.2v-10c0-6.8 5.7-12.7 12.7-12.7h26.2c6.2 0 11.2-5.1 11.2-11.3V18.1c0-5.8-5-6.1-11-6.1zm-14.8 7.8a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4z" 
    />
    <path 
      fill="url(#pyYellow)" 
      d="M64.5 116c27.6 0 26-12 26-12l-.1-12.4H64v-3.7h36.8c12.2 0 12.2-13.9 12.2-13.9s1.2-14.3-12.2-14.3h-7.2v10c0 6.8-5.7 12.7-12.7 12.7H44.7c-6.2 0-11.2 5.1-11.2 11.3v26.2c0 5.8 5 6.1 11 6.1zm14.8-7.8a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4z" 
    />
  </svg>
);

export const SqlLogo = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 128 128" className={className}>
    <defs>
      <linearGradient id="sqlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00c6ff" />
        <stop offset="100%" stopColor="#0072ff" />
      </linearGradient>
      <linearGradient id="sqlDisk" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
    </defs>
    {/* Disk 1 (Bottom) */}
    <g transform="translate(0, 48)">
      <path d="M20 30 C20 44 108 44 108 30 L108 48 C108 62 20 62 20 48 Z" fill="url(#sqlGradient)" opacity="0.85" />
      <ellipse cx="64" cy="30" rx="44" ry="14" fill="#0091ea" />
    </g>
    {/* Disk 2 (Middle) */}
    <g transform="translate(0, 24)">
      <path d="M20 30 C20 44 108 44 108 30 L108 48 C108 62 20 62 20 48 Z" fill="url(#sqlGradient)" opacity="0.95" />
      <ellipse cx="64" cy="30" rx="44" ry="14" fill="#00a0f5" />
    </g>
    {/* Disk 3 (Top) */}
    <g transform="translate(0, 0)">
      <path d="M20 30 C20 44 108 44 108 30 L108 48 C108 62 20 62 20 48 Z" fill="url(#sqlGradient)" />
      <ellipse cx="64" cy="30" rx="44" ry="14" fill="#38bdf8" />
      <ellipse cx="64" cy="30" rx="36" ry="10" fill="#0284c7" />
    </g>
    {/* SQL Badge Text Overlay */}
    <rect x="24" y="50" width="80" height="28" rx="8" fill="#09090b" stroke="#38bdf8" strokeWidth="2" />
    <text x="64" y="70" textAnchor="middle" fill="#ffffff" fontFamily="sans-serif" fontWeight="900" fontSize="18" letterSpacing="2">
      SQL
    </text>
  </svg>
);
