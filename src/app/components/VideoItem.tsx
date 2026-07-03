import { GalleryVideo } from "@/app/data/videoData";

interface VideoItemProps {
  item: GalleryVideo;
  onClick: () => void;
}

export default function VideoItem({ item, onClick }: VideoItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-64 md:w-80 text-left group cursor-pointer mx-auto"
      aria-label={`Pusti video: ${item.alt}`}
    >
      <div className="h-96 relative rounded-2xl overflow-hidden bg-[#5F6F6F] shadow-md transition-transform group-hover:scale-105">
        <video
          src={item.src}
          preload="metadata"
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 md:w-10 md:h-10 text-spaceIndigo ml-1"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      {(item.title || item.alt) && (
        <p className="mt-2 text-sm md:text-base text-spaceIndigo font-medium text-center px-1">
          {item.title ?? item.alt}
        </p>
      )}
    </button>
  );
}
