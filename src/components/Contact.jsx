import "../style/contacts.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <div className="contact-content">

        <p className="contact-label">
          HAVE FOOTAGE TO EDIT?
        </p>

        <h2>
          Let's Make Something
          <span> Worth Watching.</span>
        </h2>

        <p className="contact-description">
          Send Me Your Project Details and Deadline.
          I Reply Within One Working Day.
        </p>

        <a
          href="mailto:vardhans860@gmail.com"
          className="contact-button"
        >
          Email Me
          <span>↗</span>
        </a>

      </div>

    </section>
  );
};

export default Contact;