export interface Video {
    id: number;
    url: string;
    title: string;
    duration: number;
  }
  
  export interface VideoProgressProps {
    currentTime: number;
    duration: number;
    isActive: boolean;
    onClick: () => void;
  }