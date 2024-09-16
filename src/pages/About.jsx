// src/pages/About.jsx
import React from 'react';
import './About.css'; // Import the updated CSS file
import useScrollAnimation from '../hooks/useScrollAnimation'; // Import the custom hook

const About = () => {
  const [aboutRef, isAboutVisible] = useScrollAnimation();

  return (
    <section
      ref={aboutRef}
      className={`about-section ${isAboutVisible ? 'fade-in' : 'preview'}`}
    >
      <aside className="sidebar">
        <div className="sidebar-info">
          <figure className="avatar-box">
            {/* Add your avatar image here */}
          </figure>
          <div className="info-content">
            <h1 className="name" title="Your Name">Ryan Arafeh</h1>
            <p className="title">Software Engineer</p>
          </div>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>
          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:arafehryan@gmail.com" className="contact-link">arafehryan@gmail.com</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>Toronto, Ontario, Canada</address>
              </div>
            </li>
          </ul>
          <div className="separator"></div>
          <ul className="social-list">
            <li className="social-item">
              <a href="https://www.linkedin.com/in/ryanarafeh/" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li className="social-item">
              <a href="https://github.com/issryan" className="social-link">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <article className="about-main">
        <header>
          <h2 className="article-title">About Me</h2>
        </header>
        <section className="about-text">
          <p>
            I'm a Software Engineering student navigating the coding maze. Currently knee-deep in algorithms and projects, I'm on a mission to make tech as cool as it can get. When I'm not wrestling with code, you'll catch me snapping pics of my daily adventures. From the hustle of the city to the chill vibes of nature, my camera's always ready. Right now, I'm gearing up to dive into the world of either data analysis or web development. Currently on the lookout for an internship, so if you've got exciting projects and a spot on your team, I'm all ears. Let's connect and explore the exciting intersections of code and creativity!
          </p>
        </section>

        <section className="service">
          <h3 className="service-title">Hobbies</h3>
          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <img src="path/to/icon-design.svg" alt="design icon" />
              </div>
              <div className="service-content-box">
                <h4 className="service-item-title">Photography</h4>
                <p className="service-item-text"> small paragraph here</p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img src="path/to/icon-design.svg" alt="design icon" />
              </div>
              <div className="service-content-box">
                <h4 className="service-item-title">Graphic Design</h4>
                <p className="service-item-text">small paragraph here</p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img src="path/to/icon-design.svg" alt="design icon" />
              </div>
              <div className="service-content-box">
                <h4 className="service-item-title">Biking</h4>
                <p className="service-item-text">small paragraph here</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="service">
          <h3 className="service-title">Skills</h3>
          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <img src="path/to/icon-design.svg" alt="design icon" />
              </div>
              <div className="service-content-box">
                <h4 className="service-item-title">Photography</h4>
                <p className="service-item-text"> small paragraph here</p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img src="path/to/icon-design.svg" alt="design icon" />
              </div>
              <div className="service-content-box">
                <h4 className="service-item-title">Graphic Design</h4>
                <p className="service-item-text">small paragraph here</p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img src="path/to/icon-design.svg" alt="design icon" />
              </div>
              <div className="service-content-box">
                <h4 className="service-item-title">Biking</h4>
                <p className="service-item-text">small paragraph here</p>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </section>
  );
};

export default About;