export function IndonesiaMap() {
  return (
    <svg viewBox="0 0 1000 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Simplified Indonesia Map */}
      <defs>
        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#991b1b', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Sumatra */}
      <path d="M 100 80 Q 90 100 100 120 L 120 180 Q 130 200 110 220 L 100 240 Q 90 250 100 260 L 110 280 Q 100 290 90 280 L 70 260 Q 60 240 70 220 L 80 180 Q 70 160 80 140 L 90 100 Q 95 80 100 80 Z" 
            fill="url(#mapGradient)" stroke="#fff" strokeWidth="2" opacity="0.9"/>
      
      {/* Java */}
      <path d="M 200 260 L 380 255 Q 400 258 390 270 L 370 275 L 220 280 Q 195 275 200 260 Z" 
            fill="url(#mapGradient)" stroke="#fff" strokeWidth="2" opacity="0.9"/>
      
      {/* Kalimantan */}
      <path d="M 300 120 Q 320 110 340 120 L 380 140 Q 400 160 390 180 L 370 210 Q 360 230 340 220 L 300 210 Q 280 200 270 180 L 260 150 Q 270 130 300 120 Z" 
            fill="url(#mapGradient)" stroke="#fff" strokeWidth="2" opacity="0.9"/>
      
      {/* Sulawesi */}
      <path d="M 450 140 L 470 120 Q 480 130 475 145 L 485 160 Q 490 170 480 175 L 490 190 Q 495 200 485 210 L 475 220 Q 465 215 460 205 L 455 190 Q 445 185 450 175 L 445 160 Q 440 150 450 140 Z" 
            fill="url(#mapGradient)" stroke="#fff" strokeWidth="2" opacity="0.9"/>
      
      {/* Papua */}
      <path d="M 700 160 L 750 155 Q 780 158 800 170 L 850 180 Q 880 190 870 210 L 850 230 Q 840 245 820 240 L 780 235 Q 750 230 730 220 L 700 205 Q 680 190 690 175 Q 695 165 700 160 Z" 
            fill="url(#mapGradient)" stroke="#fff" strokeWidth="2" opacity="0.9"/>
      
      {/* Bali & Nusa Tenggara */}
      <path d="M 420 265 L 520 260 Q 540 263 535 270 L 515 275 L 425 278 Q 415 273 420 265 Z" 
            fill="url(#mapGradient)" stroke="#fff" strokeWidth="2" opacity="0.9"/>
      
      {/* Maluku */}
      <path d="M 620 180 Q 630 175 640 182 L 650 195 Q 655 205 645 210 L 630 212 Q 618 208 615 195 Q 615 185 620 180 Z" 
            fill="url(#mapGradient)" stroke="#fff" strokeWidth="2" opacity="0.9"/>
      
      {/* Decorative dots for cities */}
      <circle cx="250" cy="270" r="4" fill="#fef2f2" />
      <circle cx="350" cy="180" r="4" fill="#fef2f2" />
      <circle cx="475" cy="175" r="4" fill="#fef2f2" />
      <circle cx="95" cy="180" r="4" fill="#fef2f2" />
      <circle cx="770" cy="190" r="4" fill="#fef2f2" />
    </svg>
  );
}
