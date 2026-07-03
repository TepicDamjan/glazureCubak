export interface GalleryVideo {
  id: number;
  src: string;
  alt: string;
  title?: string;
}

export const videoData: GalleryVideo[] = [
  { id: 1, src: "/videos/vid1.mp4", alt: "Mašinska glazura, Glazure Cubak" },
  { id: 2, src: "/videos/vid2.mp4", alt: "Mašinska glazura, Glazure Cubak" },
];
