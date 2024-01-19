import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const VideoPlayer = ({ src, autoPlay, muted, loop }) => {
    


  useEffect(() => {
    const iframe = document.querySelector("iframe");

    if (iframe) {
      const contentWindow = iframe.contentWindow;
      const video = contentWindow.document.querySelector("video");

      if (video) {
        video.muted = muted;
        video.autoplay = autoPlay;
        video.loop = loop;
        video.controls = false;
      }
    }
  }, [src, autoPlay, muted, loop]);

  return (
    <div className="relative flex w-full h-full justify-center items-center py-5">
      <video
        src={src}
        className="rounded-md"
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
      />
    </div>
  );
};
