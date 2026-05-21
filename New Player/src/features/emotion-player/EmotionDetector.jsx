import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

const EmotionDetector = ({ setEmotion }) => {

  const videoRef = useRef(null);
  
  const [currentEmotion, setCurrentEmotion] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    startVideo();
    loadModels();

    return () => {
      stopVideo();
    };

  }, []);

  const startVideo = () => {

    navigator.mediaDevices.getUserMedia({
      video: true
    })

    .then(stream => {
      videoRef.current.srcObject = stream;
    })

    .catch(err => console.error(err));

  };

  const stopVideo = () => {

    if(videoRef.current && videoRef.current.srcObject){

      const tracks = videoRef.current.srcObject.getTracks();

      tracks.forEach(track => track.stop());
    }
  };

  const loadModels = async () => {

    await faceapi.nets.tinyFaceDetector.loadFromUri(
      "/models/tiny_face_detector"
    );

    await faceapi.nets.faceExpressionNet.loadFromUri(
      "/models/face_expression"
    );


  };

  const detectEmotion = async () => {

  setLoading(true);

  // 5 second Delay
  setTimeout(async () => {

    if (!videoRef.current) {
      setLoading(false);
      return;
    }

    const detections = await faceapi
      .detectSingleFace(
        videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      )
      .withFaceExpressions();

    if (detections) {

      const expressions = detections.expressions;

      const maxValue = Math.max(...Object.values(expressions));

      const detectedEmotion = Object.keys(expressions).find(
        key => expressions[key] === maxValue
      );

      setCurrentEmotion(detectedEmotion);

      // Parent component ko emotion bhejega
      setEmotion(detectedEmotion);

    }

    setLoading(false);

  }, 5000); // 5000ms = 5 sec
};

  return (

    <div className="detector-card">

      <div className="camera-container">

        <video
          ref={videoRef}
          autoPlay
          muted
          className="camera-video"
        />

      </div>

      <div className="emotion-info">

        <h2>
          Detected Emotion:
          <span className={`emotion ${currentEmotion}`}>
            {" "} {currentEmotion}
          </span>
        </h2>

      </div>

      <button
        onClick={detectEmotion}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          border: "none",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #00d9ff, #0066ff)",
          color: "#fff",
          fontSize: "15px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "0.3s",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",

          transform: loading ? "scale(0.96)" : "scale(1)",
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? "Scanning Face..." : "Scan Emotion"}
      </button>

    </div>
  );
};

export default EmotionDetector;