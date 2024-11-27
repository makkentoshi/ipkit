'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { videos } from '@/data/videos';
import { VideoProgress } from './VideoProgress';

export const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleVideoEnd = () => {
    handleNext();
  };

  const jumpToVideo = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [currentIndex]);

  return (
    <div className="relative h-screen w-screen bg-black">
      <video
        ref={videoRef}
        src={videos[currentIndex].url}
        className="h-full w-full object-cover"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnd}
        autoPlay
        playsInline
      />

      {/* Navigation Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {videos.map((video, index) => (
          <VideoProgress
            key={video.id}
            currentTime={index === currentIndex ? currentTime : 0}
            duration={video.duration}
            isActive={index === currentIndex}
            onClick={() => jumpToVideo(index)}
          />
        ))}
      </div>

      {/* Video Title */}
      <div className="absolute top-8 left-8 bg-black/50 px-4 py-2 rounded-lg">
        <h2 className="text-white text-lg font-medium">
          {videos[currentIndex].title}
        </h2>
      </div>
    </div>
  );
};

export default VideoCarousel;