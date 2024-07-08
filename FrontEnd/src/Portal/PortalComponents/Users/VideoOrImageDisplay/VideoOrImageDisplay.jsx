import React, { useEffect, useRef, useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";

const VideoOrImageDisplay = ({ image, setImage, showVideo, uploadsection }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const streamRef = useRef(null); // Keep track of the stream

  const getUserCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        streamRef.current = stream; // Store the stream in ref for cleanup

        video.onloadedmetadata = () => {
          setVideoLoaded(true);
          video.play().catch((error) => console.error(error));
        };
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const takePicture = (e) => {
    e.preventDefault();

    let width = 500;
    let height = width / (16 / 9);

    let photo = photoRef.current;
    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, photo.width, photo.height);

    const imageDataURL = photo.toDataURL();
    const blob = dataURItoBlob(imageDataURL);
    const file = new File([blob], "image.jpg", { type: "image/jpeg" });

    setImage(file);
    setImageUrl(imageDataURL);
  };

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  const clearImage = () => {
    videoRef.current.pause();
    let ctx = photoRef.current.getContext("2d");
    ctx.clearRect(0, 0, photoRef.current.width, photoRef.current.height);
    setImage(null);
    setVideoLoaded(false);
  };

  useEffect(() => {
    if (showVideo) {
      getUserCamera();
    } else if (streamRef.current) {
      // Stop the camera stream
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  }, [showVideo]);

  useEffect(() => {
    if (videoLoaded) {
      videoRef.current.play().catch((error) => console.error(error));
    }
  }, [videoLoaded]);

  useEffect(() => {
    if (image) {
      setImageUrl(URL.createObjectURL(image));
    }
  }, [image]);

  useEffect(() => {
    if (!showVideo) {
      videoRef.current.pause();
    }
  }, [showVideo]);

  // Cleanup function to stop camera stream when component unmounts
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-80 h-80 border rounded-full">
        {image ? (
          <img
            className="w-full h-full object-cover rounded-full"
            src={imageUrl}
            alt="Captured"
          />
        ) : (
          <video
            className="w-full h-full object-cover rounded-full"
            ref={videoRef}
          ></video>
        )}
        {!image && <canvas ref={photoRef}></canvas>}
      </div>
      <div className="w-full h-auto flex flex-col justify-center items-center p-2">
        {image && showVideo ? (
          <button onClick={clearImage}>ReCapture</button>
        ) : (
          <button
            className="bg-blue-200 w-40 h-8 m-1 flex justify-center items-center"
            onClick={(e) => takePicture(e)}
          >
            <FaCameraRetro className="m-1" /> Take a selfie
          </button>
        )}
        <button
          className="bg-blue-200 w-40 h-8 m-1 flex justify-center items-center"
          onClick={uploadsection}
        >
          <MdOutlineFileUpload className="m-1" /> Upload
        </button>
      </div>
    </div>
  );
};

export default VideoOrImageDisplay;
