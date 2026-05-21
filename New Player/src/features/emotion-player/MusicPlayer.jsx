import React from "react";
import YouTube from "react-youtube";

const MusicPlayer = ({ emotion }) => {

console.log("Detected Emotion:", emotion);

const music = {

happy: "BddP6PYo2gs",
sad: "6DCOjq0omBc",
angry: "RCgbE6eS-DU",      
surprised: "BBAyRBTfsOU",
neutral: "ElZfdU54Cp8"

};

const currentEmotion = emotion?.toLowerCase().trim();

const videoId = music[emotion];

if (!emotion) {
  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        padding: "2rem",
        fontSize: "18px",
      }}
    >
      Click Scan Emotion to play music
    </div>
  );
}

return (

<div className="player">

<h3>Playing Music for: {emotion}</h3>

<YouTube
videoId={videoId}
opts={{
height: "300",
width: "400",
playerVars: {
  autoplay: 1,
  controls: 1,
  rel: 0,
  modestbranding: 1,
},
}}
/>

</div>

);

};

export default MusicPlayer;