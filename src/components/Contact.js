import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="section-header">
        <h2>Contact</h2>
        <p>OPEN TO SENIOR DATA ENGINEER ROLES • HYBRID OR REMOTE (UK)</p>
      </div>
      <div className="section-body contact-grid">
        <div>
          <p>
            If you're looking to build or modernise your cloud data platform,
            I'd love to talk.
          </p>
          <ul className="contact-list">
            <li>
              <strong>Location:</strong> Manchester, UK
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:kalidaas.121@gmail.com">
                kalidaas.121@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +44 7424 274363
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="[linkedin.com](https://www.linkedin.com/in/kalidas-yerravarapu)"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/kalidas-yerravarapu
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-cta">
          <p>
            I tend to be most effective where there's a need to design clean
            architectures, automate everything that's manual today, and create
            trustworthy, analytics-ready data.
          </p>
          <p>
            Share a short description of your data platform challenges and I can
            suggest concrete next steps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
