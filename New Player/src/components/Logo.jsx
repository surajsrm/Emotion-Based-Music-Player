export default function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width="38" height="38" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6c63ff" />
            <stop offset="100%" stopColor="#ff6b9d" />
          </linearGradient>
        </defs>

        <circle cx="32" cy="32" r="30" stroke="url(#g1)" strokeWidth="3" />

        <path
          d="M12 36 C18 20, 26 48, 32 32 C38 16, 46 44, 52 28"
          stroke="url(#g1)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <circle cx="32" cy="32" r="3" fill="#fff" />
      </svg>

      <div>
        <div style={{ color: "#fff", fontWeight: 800 }}>
          Emotion Player
        </div>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>
          AI Mood Music System
        </div>
      </div>
    </div>
  );
}