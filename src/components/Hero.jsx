import "../style/hero.css";
import hero from "../assets/hero.jpeg";

const Hero = () => {
  return (
    <section className="hero">

      {/* LEFT SIDE */}
      <div className="hero-content">

        <p className="hero-label">
          VIDEO EDITOR
        </p>

        <h1>
          I Cut Stories That
          <span> Keep People Watching.</span>
        </h1>

        <p className="hero-description">
          Video Editor For Cinematic Videos & Reels, Brands and Founders.
          Fast Turnaround, Clean Pacing, Sound that Carries The Scene.
        </p>

        <div className="hero-buttons">

          <a href="#work" className="hero-primary">
            View My Work
          </a>

          <a href="#contact" className="hero-secondary">
            Start a Project
          </a>

        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="hero-visual">

        <div className="hero-photo">

          <img
            src={hero}
            alt="Video Editor"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;