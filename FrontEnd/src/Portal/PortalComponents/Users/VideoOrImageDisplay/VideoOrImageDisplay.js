import React, { useEffect, useRef, useState } from 'react';
import { FaCameraRetro } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";


const VideoOrImageDisplay = ({ image, setImage, showVideo, uploadsection }) => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);

    let videoRef = useRef(null);
    let photoRef = useRef(null);

    //Get access to user webCamera

    const getUserCamera = () => {
        navigator.mediaDevices.getUserMedia({
            video: true
        })
            .then((stream) => {
                let video = videoRef.current;
                video.srcObject = stream;

                video.onloadedmetadata = () => {
                    setVideoLoaded(true);
                    video.play().catch(error => console.error(error));
                };
            })
            .catch((error) => {
                console.error(error);
            })
    }

    // to take a picture
    const takePicture = (e) => {
        e.preventDefault();

        let width = 500
        let height = width / (16 / 9)

        let photo = photoRef.current;
        console.log("photo:", photo);

        let video = videoRef.current;
        console.log("video:", video);

        photo.width = width;
        photo.height = height;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, photo.width, photo.height);

        console.log("photo1:", photo);

        // Convert canvas content to data URL
        const imageDataURL = photo.toDataURL();

        // Convert data URL to Blob
        const blob = dataURItoBlob(imageDataURL);

        // Construct a File object
        const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });

        // Set the captured image file to the Image state
        setImage(file);
        console.log("Capture (take a picture) method:", image);

        setImageUrl(imageDataURL);

    }

    // Function to convert data URI to Blob
    const dataURItoBlob = (dataURI) => {
        const byteString = atob(dataURI.split(',')[1]);
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    }


    const clearImage = () => {
        let photo = photoRef.current
        if (photo) {
            let ctx = photo.getContext('2d');
            ctx.clearRect(0, 0, photo.width, photo.height)
        }
        setImage(null);
        setVideoLoaded(false); // Reset video loaded state
        getUserCamera();

    }

    useEffect(() => {
        getUserCamera()
    }, [])

    useEffect(() => {
        if (videoLoaded) {
            videoRef.current.play().catch(error => console.error(error));
        }
    }, [videoLoaded]);

    useEffect(() => {
        console.log("Image:", image);
        if (image) {
            setImageUrl(URL.createObjectURL(image)); // Update imageUrl when image state changes
        }
    }, [image]);




    return (
        <div>
            <div className="w-80 h-80 border rounded-full border-black">
                {image ? (
                    <img
                        className="w-80 h-80 object-fill border rounded-full"
                        src={imageUrl} alt="Captured" />
                ) : (
                    <video className="w-80 h-80 object-fill border rounded-full" ref={videoRef}></video>
                )}
                {!image && <canvas ref={photoRef}></canvas>}
            </div>
            {/* Buttons */}
            <div className="w-full h-auto flex flex-col justify-center items-center p-2">
                {image && showVideo ? (
                    <button onClick={clearImage}>ReCapture</button>
                ) : (
                    <button
                        className="bg-blue-200 w-40 h-8 m-1 flex justify-center items-center"
                        onClick={(e) => takePicture(e)}><FaCameraRetro className="m-1" />Take a selfie</button>
                )}
                <button
                    className="bg-blue-200 w-40 h-8 m-1 flex justify-center items-center"
                    onClick={uploadsection}><MdOutlineFileUpload className="m-1" />Upload</button>
            </div>
        </div>
    );
}

export default VideoOrImageDisplay