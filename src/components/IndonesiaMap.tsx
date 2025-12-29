export function IndonesiaMap() {
  return (
    <svg 
      viewBox="0 0 800 400" 
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="800" height="400" fill="url(#oceanGradient)" />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="oceanGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#bae6fd" />
        </linearGradient>
        <linearGradient id="islandGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#991b1b" />
        </linearGradient>
      </defs>

      {/* Sumatra (Barat) */}
      <path
        d="M 80,140 Q 70,160 75,180 L 85,220 Q 90,240 100,245 L 110,250 Q 105,235 108,220 L 115,190 Q 118,170 115,150 Q 110,135 100,130 Z"
        fill="url(#islandGradient)"
        className="drop-shadow-lg"
      />

      {/* Java (Tengah Bawah) */}
      <path
        d="M 220,260 L 380,255 Q 400,258 410,265 L 415,270 Q 410,275 390,275 L 230,280 Q 215,278 210,270 Z"
        fill="url(#islandGradient)"
        className="drop-shadow-lg"
      />

      {/* Kalimantan (Tengah) */}
      <path
        d="M 200,160 Q 190,180 195,200 L 210,230 Q 230,240 260,235 L 295,220 Q 305,200 300,180 L 290,150 Q 280,135 260,135 L 230,140 Q 210,145 200,160 Z"
        fill="url(#islandGradient)"
        className="drop-shadow-lg"
      />

      {/* Sulawesi (Tengah Kanan) */}
      <path
        d="M 380,140 L 390,160 Q 395,180 388,195 L 380,210 L 370,220 Q 365,210 368,195 L 375,170 Q 378,150 380,140 Z M 390,160 L 405,155 Q 410,165 408,175 L 400,185 L 390,180 Z M 370,200 L 365,215 Q 368,225 375,225 L 380,218 Z"
        fill="url(#islandGradient)"
        className="drop-shadow-lg"
      />

      {/* Papua (Kanan) */}
      <path
        d="M 550,180 L 600,175 Q 640,178 670,185 L 710,195 Q 720,205 715,220 L 700,235 Q 680,240 650,238 L 600,230 Q 570,220 555,210 L 545,200 Q 543,190 550,180 Z"
        fill="url(#islandGradient)"
        className="drop-shadow-lg"
      />

      {/* Bali & Nusa Tenggara */}
      <path
        d="M 425,268 L 470,265 Q 490,267 505,270 L 520,273 Q 525,275 522,280 L 510,283 L 430,285 Q 420,283 420,278 Z"
        fill="url(#islandGradient)"
        className="drop-shadow-lg"
      />

      {/* Maluku (Tengah Kanan Atas) */}
      <ellipse cx="480" cy="190" rx="18" ry="25" fill="url(#islandGradient)" className="drop-shadow-lg" />
      <ellipse cx="510" cy="200" rx="12" ry="18" fill="url(#islandGradient)" className="drop-shadow-lg" />

      {/* Kepulauan kecil */}
      <circle cx="130" cy="250" r="5" fill="url(#islandGradient)" />
      <circle cx="145" cy="255" r="4" fill="url(#islandGradient)" />
      <circle cx="420" cy="245" r="5" fill="url(#islandGradient)" />
      <circle cx="540" cy="240" r="6" fill="url(#islandGradient)" />

      {/* Lokasi Markers dengan Heart */}
      <g className="animate-pulse">
        {/* Jakarta */}
        <circle cx="220" cy="270" r="8" fill="#ef4444" stroke="white" strokeWidth="2" />
        <text x="220" y="295" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="bold">Jakarta</text>
      </g>

      {/* Regional offices */}
      <circle cx="90" cy="180" r="5" fill="#fca5a5" stroke="white" strokeWidth="1.5" />
      <circle cx="250" cy="190" r="5" fill="#fca5a5" stroke="white" strokeWidth="1.5" />
      <circle cx="385" cy="175" r="5" fill="#fca5a5" stroke="white" strokeWidth="1.5" />
      <circle cx="640" cy="200" r="5" fill="#fca5a5" stroke="white" strokeWidth="1.5" />
      <circle cx="460" cy="275" r="5" fill="#fca5a5" stroke="white" strokeWidth="1.5" />

      {/* Labels */}
      <text x="90" y="135" textAnchor="middle" fill="#991b1b" fontSize="14" fontWeight="600">Sumatra</text>
      <text x="250" y="125" textAnchor="middle" fill="#991b1b" fontSize="14" fontWeight="600">Kalimantan</text>
      <text x="310" y="285" textAnchor="middle" fill="#991b1b" fontSize="14" fontWeight="600">Jawa</text>
      <text x="385" y="135" textAnchor="middle" fill="#991b1b" fontSize="14" fontWeight="600">Sulawesi</text>
      <text x="480" y="180" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="600">Maluku</text>
      <text x="640" y="170" textAnchor="middle" fill="#991b1b" fontSize="14" fontWeight="600">Papua</text>
      <text x="470" y="295" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="600">Nusa Tenggara</text>

      {/* Title */}
      <text x="400" y="35" textAnchor="middle" fill="#dc2626" fontSize="24" fontWeight="bold">
        NUSANTARA
      </text>
      <text x="400" y="55" textAnchor="middle" fill="#991b1b" fontSize="14">
        Dari Sabang Sampai Merauke
      </text>
    </svg>
  );
}
