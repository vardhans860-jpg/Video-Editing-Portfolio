import "../style/projects.css";
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import video3 from "../assets/video3.mp4"
import video4 from "../assets/video4.mp4"
import thumb1 from "../assets/thumb1.png"
import thumb2 from "../assets/thumb2.png"
import thumb4 from "../assets/thumb4.png"
import thumb3 from "../assets/thumb3.png"
const projects = [
  {
    id: 1,
    format: "16:9",
    title: "Ooty Landscape",
    description:
      "Cinematic storytelling with clean cuts, color grading and sound design.",
    video: video1,
    type: "video/mp4",
    poster:thumb1
  },

  {
    id: 2,
    format: "9:16",
    title: "Short-form Series",
    description:
      "Fast-paced reels with captions, transitions and motion graphics.",
    video: video2,
    poster:thumb2
  },

  {
    id: 3,
    format: "16:9",
    title: " Beach Short-from Edit",
    description:
      "Short-form editing focused on pacing, retention and storytelling.",
    video:video3,
    poster:thumb3
  },

  {
    id: 4,
    format: "1:1",
    title: "Cubbon Park",
    description:
      "focused editing With cinematic visuals.",
    video: video4,
    poster:thumb4
  },
];


const Projects = () => {
  return (
    <section className="projects" id="work">

      {/* HEADER */}

      <div className="projects-heading">

        <p className="projects-label">
          SELECTED WORK
        </p>

        <h2>
          Cuts that
          <span> do the job.</span>
        </h2>

      </div>


      {/* PROJECT GRID */}

      <div className="projects-grid">

        {projects.map((project) => (

          <article >

            {/* VIDEO */}

            <div className="project-video">

              <video
                controls
                muted
                preload="metadata"
                poster={project.poster}
              >
                <source
                  src={project.video }
                  type={project.type || "video/mp4"}
                />

                Your browser does not support video playback.

              </video>

            </div>


            {/* PROJECT INFO */}

            <div className="project-info">


            

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
};

export default Projects;