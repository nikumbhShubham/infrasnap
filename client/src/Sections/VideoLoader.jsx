import { useState } from "react";

const VideoLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoLoad = () => {
    console.log("Video loaded successfully!");
    setIsVideoLoaded(true);
    setIsLoading(false);
  };

  const toggleVideoPlayback = () => {
    const videoElement = document.getElementById("mainVideo");
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Loading Screen */}
      {isLoading && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="text-white text-2xl">Loading...</div>
        </div>
      )}

      {/* Video Section */}
      <video
        id="mainVideo"
        src="assets/final2.mp4"
        className="w-full h-full object-cover"
        muted
        onLoadedData={handleVideoLoad}
        onError={() => console.error("Failed to load the video. Check the path.")}
        style={{ display: isLoading ? "none" : "block" }}
      ></video>

      {/* Start/Pause Button */}
      {!isLoading && isVideoLoaded && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={toggleVideoPlayback}
            className="bg-white text-black px-6 py-3 rounded-lg shadow-lg"
          >
            {isPlaying ? "Pause " : "Start "}
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoLoader;
