import { useState } from "react";
import EmotionDetector from "./EmotionDetector";
import MusicPlayer from "./MusicPlayer";

export default function EmotionPlayer() {
  const [emotion, setEmotion] = useState("");

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <EmotionDetector
        setEmotion={setEmotion}
        emotion={emotion}
      />

      <MusicPlayer emotion={emotion} />
    </div>
  );
}