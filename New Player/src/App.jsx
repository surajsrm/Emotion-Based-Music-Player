import EmotionPlayer from "./features/emotion-player/EmotionPlayer";
import { useState, useEffect, useRef } from "react";
import Login from "./components/Login";

const NAV_LINKS = ["About", "Features", "Preview", "Info"];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(2,6,23,0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(59,130,246,0.10)" : "none",
        transition: "all 0.4s ease",
        padding: "0 2rem",
      }}
    >
      <nav style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #0ea5e9, #3b82f6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 18, fontFamily: "'DM Sans', sans-serif" }}>M</span>
          </div>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 20, fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.5px" }}>Emotion Based Music Player</span>
        </div>

        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }} className="nav-links">
          {NAV_LINKS.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: 14, fontWeight: 500, letterSpacing: "0.3px", transition: "color 0.2s", fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => e.target.style.color = "#fff"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.7)"}
              >{link}</a>
            </li>
          ))}
        </ul>

        <a
          href="#login"
          style={{
           background: "linear-gradient(135deg, #0ea5e9, #3b82f6)",
           color: "#fff",
           padding: "10px 24px",
           borderRadius: 100,
           textDecoration: "none",
           fontSize: 14,
           fontWeight: 600,
           fontFamily: "'DM Sans', sans-serif",
           transition: "opacity 0.2s",
           boxShadow: "0 4px 20px rgba(59,130,246,0.4)"
        }}
        onMouseEnter={e => e.target.style.opacity = "0.85"}
        onMouseLeave={e => e.target.style.opacity = "1"}
      >
        Login  
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "linear-gradient(160deg, #020617 0%, #0f2040 50%, #0c1a2e 100%)",
      position: "relative", padding: "0 2rem",
    }}>
      {/* Decorative blobs */}
      <div style={{ position: "absolute", top: "15%", left: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.10) 0%, transparent 60%)", pointerEvents: "none" }} />

      {/* Grid pattern */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div style={{ textAlign: "center", maxWidth: 800, position: "relative", zIndex: 1 }}>
        <div style={{
          display: "inline-block", background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.3)",
          borderRadius: 100, padding: "6px 18px", marginBottom: "1.5rem",
          color: "#7dd3fc", fontSize: 13, fontWeight: 500, fontFamily: "'DM Sans', sans-serif",
          letterSpacing: "0.5px",
        }}>
         AI Powered Emotion Detection
        </div>

        <h1 style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(3rem, 8vw, 5.5rem)",
          fontWeight: 800, color: "#fff", lineHeight: 1.05, margin: "0 0 1.5rem",
          letterSpacing: "-2px",
        }}>
          
          Click, Scan <span style={{ background: "linear-gradient(135deg, #0ea5e9 30%, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>and<br />
            </span>
            Play.
          
        </h1>

        <p style={{
          color: "rgba(255,255,255,0.55)", fontSize: "clamp(1rem, 2vw, 1.2rem)",
          lineHeight: 1.7, maxWidth: 560, margin: "0 auto 2.5rem",
          fontFamily: "'DM Sans', sans-serif",
        }}>
          The Emotion-Based Music Player is a web application that detects a user's facial expression through a webcam and automatically plays music that matches the detected mood using YouTube integration. 
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#features" style={{
            background: "linear-gradient(135deg, #0ea5e9, #3b82f6)",
            color: "#fff", padding: "14px 32px", borderRadius: 100,
            textDecoration: "none", fontSize: 15, fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
            boxShadow: "0 8px 30px rgba(108,99,255,0.4)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 40px rgba(108,99,255,0.5)"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 8px 30px rgba(108,99,255,0.4)"; }}
          >
            Explore Features
          </a>
          <a href="#preview" style={{
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)",
            color: "#fff", padding: "14px 32px", borderRadius: 100,
            textDecoration: "none", fontSize: 15, fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif", transition: "background 0.2s",
          }}
            onMouseEnter={e => e.target.style.background = "rgba(255,255,255,0.1)"}
            onMouseLeave={e => e.target.style.background = "rgba(255,255,255,0.05)"}
          >
            Start →
          </a>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "3rem", justifyContent: "center", marginTop: "4rem", flexWrap: "wrap" }}>
          {[["50K+", "Active Users"], ["99.9%", "Uptime SLA"], ["4.9★", "User Rating"]].map(([val, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "#fff" }}>{val}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      style={{
        background: "#0c1a2e",
        padding: "7rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          right: "-150px",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14,165,233,0.22) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left Side */}
        <div>
          <span
            style={{
              color: "#7dd3fc",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            About Project
          </span>

          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              margin: "1rem 0 1.5rem",
              letterSpacing: "-1px",
            }}
          >
            Music that reacts
            <br />
            to your emotions.
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.9,
              fontSize: 16,
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: "1.5rem",
            }}
          >
            Emotion Based Music Player is an AI-powered web application
            that detects facial expressions through a webcam and automatically
            plays music that matches the user's mood in real time.
          </p>

          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.8,
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            The project combines face detection, emotion recognition, and
            YouTube music streaming to create a personalized and interactive
            listening experience.
          </p>
        </div>

        {/* Right Side Card */}
        <div
          style={{
            background: "linear-gradient(135deg, #0f2040, #0a1628)",
            border: "1px solid rgba(14,165,233,0.22)",
            borderRadius: 28,
            padding: "2rem",
            boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "2rem",
            }}
          >
            <div>
              <h3
                style={{
                  color: "#fff",
                  fontSize: "1.2rem",
                  fontFamily: "'DM Sans', sans-serif",
                  marginBottom: 6,
                }}
              >
                Live Emotion Scan
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: 14,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Real-time mood detection system
              </p>
            </div>

            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 16,
                background:
                  "linear-gradient(135deg, #0ea5e9, #3b82f6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
            >
              🎵
            </div>
          </div>

          {/* Emotion bars */}
          {[
            ["Happy", "92%"],
            ["Sad", "65%"],
            ["Neutral", "81%"],
            ["Angry", "40%"],
          ].map(([emotion, value]) => (
            <div key={emotion} style={{ marginBottom: "1.2rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {emotion}
                </span>

                <span
                  style={{
                    color: "#7dd3fc",
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {value}
                </span>
              </div>

              <div
                style={{
                  height: 7,
                  borderRadius: 100,
                  background: "rgba(255,255,255,0.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: value,
                    height: "100%",
                    borderRadius: 100,
                    background:
                      "linear-gradient(90deg,#0ea5e9,#3b82f6)",
                  }}
                />
              </div>
            </div>
          ))}

          {/* Bottom stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
              marginTop: "2rem",
            }}
          >
            {[
              ["AI Detection", "Enabled"],
              ["Music Source", "YouTube"],
              ["Response Time", "<1 sec"],
              ["Mode", "Real-Time"],
            ].map(([title, value]) => (
              <div
                key={title}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 16,
                  padding: "1rem",
                }}
              >
                <div
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: 12,
                    marginBottom: 6,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {title}
                </div>

                <div
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 15,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function Features() {
  const [ref, inView] = useInView();

  const FEATURES = [
    {
      icon: "😊",
      title: "Emotion Detection",
      desc: "Detects facial expressions in real time using webcam and identifies your current mood."
    },
    {
      icon: "🎵",
      title: "Mood Based Music",
      desc: "Automatically plays music that matches your detected emotion like happy, sad, angry, calm."
    },
    {
      icon: "📷",
      title: "Live Camera Processing",
      desc: "Works directly through your browser without external setup or complex configuration."
    },
    {
      icon: "⚡",
      title: "Instant Response",
      desc: "Switches music instantly when your expression changes, making experience feel real-time."
    },
    {
      icon: "🔗",
      title: "YouTube Integration",
      desc: "Fetches and streams music directly from YouTube based on mood detection results."
    },
    {
      icon: "🧠",
      title: "Smart Mapping",
      desc: "Maps emotions to curated playlists for more accurate and context-aware music selection."
    }
  ];

  return (
    <section
      id="features"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #0c1a2e 0%, #020617 100%)",
        padding: "7rem 2rem"
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#fff",
            marginBottom: "1rem"
          }}>
            What this app actually does
          </h2>

          <p style={{
            color: "rgba(255,255,255,0.55)",
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.6
          }}>
            A simple breakdown of how your emotion-based music player works in real time.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px"
          }}
        >
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              style={{
                background: "rgba(14,165,233,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 18,
                padding: "1.8rem",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${i * 0.08}s`
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>

              <h3 style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: 700,
                marginBottom: 8,
                fontFamily: "'DM Sans', sans-serif"
              }}>
                {f.title}
              </h3>

              <p style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 14,
                lineHeight: 1.6,
                margin: 0
              }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Preview() {
  return (
    <section
      id="preview"
      style={{
        background: "#020617",
        padding: "8rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <span
          style={{
            color: "#7dd3fc",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Live Preview
        </span>

        <h2
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "#fff",
            margin: "1rem 0 1.2rem",
            letterSpacing: "-1px",
          }}
        >
          Real-Time Emotion Detection.
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: 17,
            fontFamily: "'DM Sans', sans-serif",
            maxWidth: 600,
            margin: "0 auto 4rem",
            lineHeight: 1.7,
          }}
        >
          The system scans your facial expressions through the webcam
          and automatically plays music based on your detected mood.
        </p>

        <div
          style={{
            background: "linear-gradient(135deg, #0f2040, #0a1628)",
            border: "1px solid rgba(108,99,255,0.2)",
            borderRadius: 24,
            padding: "2rem",
            boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
          }}
        >
          <EmotionPlayer />
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const [ref, inView] = useInView();

  return (
    <section
      id="info"
      ref={ref}
      style={{
        background: "#0c1a2e",
        padding: "7rem 2rem"
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#fff",
            marginBottom: "1rem"
          }}>
            How it actually works
          </h2>

          <p style={{
            color: "rgba(255,255,255,0.55)",
            maxWidth: 650,
            margin: "0 auto",
            lineHeight: 1.6
          }}>
            No magic. Just webcam-based face detection + emotion mapping + YouTube music streaming.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            marginBottom: "4rem"
          }}
        >
          {[
            {
              step: "01",
              title: "Capture Face",
              desc: "Webcam captures live video stream directly in the browser."
            },
            {
              step: "02",
              title: "Detect Emotion",
              desc: "Face landmarks + expression detection model identifies mood."
            },
            {
              step: "03",
              title: "Map Mood",
              desc: "Detected emotion is mapped to a music category."
            },
            {
              step: "04",
              title: "Play Music",
              desc: "Relevant YouTube music is streamed automatically."
            }
          ].map((item, i) => (
            <div
              key={item.step}
              style={{
                background: "rgba(14,165,233,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 18,
                padding: "1.8rem",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${i * 0.1}s`
              }}
            >
              <div style={{
                fontSize: 13,
                color: "#7dd3fc",
                marginBottom: 10,
                fontWeight: 700
              }}>
                STEP {item.step}
              </div>

              <h3 style={{
                color: "#fff",
                fontSize: 16,
                marginBottom: 8,
                fontWeight: 700
              }}>
                {item.title}
              </h3>

              <p style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 14,
                lineHeight: 1.6,
                margin: 0
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(14,165,233,0.15), rgba(59,130,246,0.10))",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 24,
            padding: "2.5rem",
            textAlign: "center"
          }}
        >
          <h3 style={{
            color: "#fff",
            fontSize: 18,
            marginBottom: 12
          }}>
            Built with modern web tech
          </h3>

          <p style={{
            color: "rgba(255,255,255,0.55)",
            marginBottom: 20,
            lineHeight: 1.6
          }}>
            React + Vite + Face Detection API + YouTube Integration
          </p>

          <div style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px"
          }}>
            {["React", "Vite", "Face API", "Webcam", "YouTube API"].map(t => (
              <span
                key={t}
                style={{
                  padding: "8px 14px",
                  borderRadius: 100,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 13
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* honesty note */}
        <p style={{
          textAlign: "center",
          marginTop: "3rem",
          fontSize: 13,
          color: "rgba(255,255,255,0.35)"
        }}>
          Note: Emotion detection accuracy depends on lighting and camera quality.
        </p>

      </div>
    </section>
  );
}

function Footer() {
  const cols = {
    Product: ["Features", "Pricing", "Changelog", "Roadmap"],
    Company: ["About", "Blog", "Careers", "Press"],
    Resources: ["Docs", "API Reference", "Status", "Community"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  };
  return (
    <footer style={{ background: "#010b18", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "5rem 2rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "4rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #0ea5e9, #3b82f6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#fff", fontWeight: 800, fontSize: 18, fontFamily: "'DM Sans', sans-serif" }}>M</span>
              </div>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 20, fontFamily: "'DM Sans', sans-serif" }}>Emotion Based Music Player</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 14, lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", maxWidth: 220 }}>
               A real-time web application that detects facial expressions and plays music
              based on your mood using webcam and YouTube integration.
            </p>
          </div>
          {Object.entries(cols).map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{ color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, marginBottom: "1.2rem" }}>{heading}</h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {links.map(l => (
                  <li key={l} style={{ marginBottom: 10 }}>
                    <a href="#" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: 14, fontFamily: "'DM Sans', sans-serif", transition: "color 0.2s" }}
                      onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.8)"}
                      onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}
                    >{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 13, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>
            © 2026 Music Playz. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            {["𝕏", "in", "gh"].map(icon => (
              <a key={icon} href="#" style={{
                width: 36, height: 36, borderRadius: "50%", background: "rgba(59,130,246,0.10)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 13, fontWeight: 700,
                transition: "background 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(59,130,246,0.10)"}
              >{icon}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#020617" }}>

      <Header />
      <Hero />
      <About />
      <Features />
      <Login />
      <Preview />
      <CTA />
      <Footer />
    </div>
  );
}
