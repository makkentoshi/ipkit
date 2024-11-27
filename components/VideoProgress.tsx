"use client";

import { VideoProgressProps } from "@/types/video";

export const VideoProgress = ({
  currentTime,
  duration,
  isActive,
  onClick,
}: VideoProgressProps) => {
  const progress = (currentTime / duration) * 100;

  return (
    <div
      className={`relative cursor-pointer transition-all duration-300 ${
        isActive ? "w-24 h-2" : "w-2 h-2"
      }`}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gray-600 rounded-full">
        <div
          className="h-full bg-white rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default VideoProgress;
