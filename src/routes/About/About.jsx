import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h1>About Fusion Finds</h1>
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Fusion Finds was founded with a vision to redefine online
              shopping. Our journey began in 2010 when a group of individuals
              with diverse backgrounds and a shared love for fashion and
              lifestyle decided to embark on an exciting venture. We wanted to
              create an online destination where customers could discover
              handpicked products that resonate with their unique tastes.
            </p>
          </div>
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is simple yet profound: to make shopping an inspiring
              and enjoyable experience for everyone. We &apos re on a quest to:
              <ul>
                <li>
                  Offer a diverse range of products that cater to various styles
                  and preferences.
                </li>
                <li>
                  Ensure the highest quality and craftsmanship in every item we
                  showcase.
                </li>
                <li>
                  Deliver exceptional customer service and support throughout
                  your shopping journey.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <h2 id="our-team">Our Team</h2>
        <div className="team-section">
          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1587&q=80"
              alt="Co-Founder & Creative Director"
            />
            <div className="team-member-info">
              <h3>Jane Doe</h3>
              <p>Co-Founder & Creative Director</p>
            </div>
          </div>
          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=1587&q=80"
              alt="Co-Founder & Operations Manager"
            />
            <div className="team-member-info">
              <h3>John Smith</h3>
              <p>Co-Founder & Operations Manager</p>
            </div>
          </div>
        </div>
        <div className="contact-and-sm-container">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <div className="contact-icons">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p>1234 Elm Street, Cityville</p>
            </div>
            <div className="contact-icons">
              <FontAwesomeIcon icon={faPhone} />
              <p>+1 (123) 456-7890</p>
            </div>
          </div>
          <div className="social-media">
            <h2>Join Our Fusion Community</h2>
            <div className="sm-description-and-icons-container">
              <p>
                Stay updated with the latest trends, product releases, and
                exclusive offers by joining our Fusion Community. Subscribe to
                our newsletter and follow us on social media for a daily dose of
                style inspiration.
              </p>
              <div className="social-icons">
                <a href="https://www.facebook.com">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
