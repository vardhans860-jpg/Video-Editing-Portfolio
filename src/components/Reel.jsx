import "../style/reels.css";
import video from "../assets/main video.mov";
import thumbnail from "../assets/mainthumb.png"
const Reel = () => {
  return (
    <section className="reel" id="reel">

      {/* SECTION HEADER */}

      <div className="reel-heading">

        <p className="reel-label">
          SHOWREEL
        </p>

        <h2>
          One Minute.
          <span> Everything I can do.</span>
        </h2>

      </div>


      {/* VIDEO */}

      <div className="reel-video">

        <video controls poster={thumbnail}>

          <source
            src={video}
            type="video/mp4"
          />

          Your Browser Does Not Support Video Playback.

        </video>

        <div className="reel-badge">
          SHOWREEL 2026
        </div>

      </div>

    </section>
  );
};

export default Reel;