//src/components/VideoHero.jsx
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

export default function VideoHero() {
  const videoUrl =
    "https://res.cloudinary.com/dwk1wfwpw/video/upload/v1783809462/solution_wzbbh2.webm";
  const thumbnailImage =
    "https://res.cloudinary.com/dwk1wfwpw/image/upload/v1783811753/Screenshot_from_2026-07-12_01-15-28_xlxmjq.png";

  return (
    <section className="py-24 px-6 relative-z">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-[Space_Grotesk] text-3xl md:text-5xl font-bold text-white mb-6">
            See What We Are About
          </h2>
          <p className="text-[#adb5bd] max-w-xl mx-auto text-lg leading-relaxed">
            A glimpse into our world of innovation, collaboration, and
            breakthrough challenges.
          </p>
        </div>

        {/* Vidstack Player */}
        <div className="relative w-full rounded-[24px] overflow-hidden bg-[#080808] border border-[rgba(255,255,255,0.05)] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <MediaPlayer
            title="Intrepreneur Lab Solution"
            src={videoUrl}
            className="w-full aspect-video"
            playsInline
          >
            <MediaProvider>
              <Poster
                className="vds-poster object-cover"
                src={thumbnailImage}
                alt="Video Thumbnail"
              />
            </MediaProvider>

            {/* Vidstack Default UI */}
            <DefaultVideoLayout icons={defaultLayoutIcons} />
          </MediaPlayer>
        </div>
      </div>
    </section>
  );
}
