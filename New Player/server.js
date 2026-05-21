import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static built files
app.use(express.static(path.join(__dirname, "dist")));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Nexus server is running", timestamp: new Date().toISOString() });
});

// SPA fallback — all routes serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Nexus server running at http://localhost:${PORT}`);
});
