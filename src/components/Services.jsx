import "../style/services.css";

const Services = () => {
  return (
    <section className="services" id="services">

      {/* HEADER */}

      <div className="services-heading">

        <p className="services-label">
          SERVICES
        </p>

        <h2>
          Everything from
          <span> raw footage to final cut.</span>
        </h2>

      </div>


      {/* SERVICES GRID */}

      <div className="services-grid">

        {/* WHAT I DO */}

        <div className="service-column">

          <h3>
            What I Do
          </h3>

          <ul>

            <li>
              Long-form and short-form editing
            </li>

            <li>
              Color grading
            </li>

            <li>
              Motion graphics and titles
            </li>

            <li>
              Sound mixing and cleanup
            </li>

            <li>
              Captions and subtitles
            </li>

          </ul>

        </div>


        {/* TOOLS */}

        <div className="service-column">

          <h3>
            Tools
          </h3>

          <ul>

            <li>
              Premiere Pro
            </li>

            <li>
              DaVinci Resolve
            </li>

            <li>
              After Effects
            </li>

            <li>
              Final Cut Pro
            </li>

            <li>
              Audition
            </li>

          </ul>

        </div>


        {/* PROCESS */}

        <div className="service-column">

          <h3>
            How It Works
          </h3>

          <ul>

            <li>
              You share footage and a brief
            </li>

            <li>
              First cut in 3 to 5 days
            </li>

            <li>
              Two revision rounds included
            </li>

            <li>
              Final files in every format you need
            </li>

          </ul>

        </div>

      </div>

    </section>
  );
};

export default Services;