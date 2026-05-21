import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = () => {

    setLoading(true);
    setMessage("");

    setTimeout(() => {

      setLoading(false);

      if (isLogin) {
        setMessage("Login Successful ✅");
      } else {
        setMessage("Account Created Successfully ✅");
      }

    }, 2000);
  };

  return (
    <section
      id="login"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(180deg, #020617 0%, #071426 50%, #0c1a2e 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "2rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 720,
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 24,
          padding: "2.5rem",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "-1px",
            color: "#fff",
            fontSize: "2rem",
            textAlign: "center",
            marginBottom: "0.5rem",
            fontWeight: 700,
          }}
        >
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Login to continue your music experience
        </p>

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            style={inputStyle}
          />
        )}

        <input
          type="email"
          placeholder="Email Address"
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
        />

        <button
          style={{
            ...buttonStyle,
            opacity: loading ? 0.7 : 1,
          }}
          onClick={handleLogin}
        >
          {loading
            ? "Please Wait..."
            : isLogin
            ? "Login"
            : "Sign Up"}
        </button>
        
        {message && (
          <p
            style={{
              color: "#00ff99",
              textAlign: "center",
              marginTop: "1rem",
              fontWeight: 600,
            }}
        >
        {message}
        </p>
      )}

        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            marginTop: "1.5rem",
            fontSize: "0.95rem",
          }}
        >
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <span
            onClick={() => setIsLogin(!isLogin)}
            style={{
              color: "#00d9ff",
              marginLeft: 6,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>

      {/* Background Glow Effects */}

      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "-120px",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

       <div
         style={{
           position: "absolute",
           bottom: "-150px",
           right: "-120px",
           width: 350,
           height: 350,
           borderRadius: "50%",
           background:
             "radial-gradient(circle, rgba(59,130,246,0.16) 0%, transparent 70%)",
           pointerEvents: "none",
         }}
       />

       <div
         style={{
           position: "absolute",
           inset: 0,
           opacity: 0.04,
           backgroundImage:
             "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
           backgroundSize: "60px 60px",
         }}
       />  
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  marginBottom: "1rem",
  borderRadius: "12px",
  border: "1px solid rgba(142, 106, 106, 0.1)",
  background: "rgba(255,255,255,0.08)",
  color: "#fff",
  outline: "none",
  fontSize: "1rem",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  background: "linear-gradient(135deg, #00d9ff, #0066ff)",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: 600,
  cursor: "pointer",
};