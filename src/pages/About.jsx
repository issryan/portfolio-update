import React from 'react';
import './About.css'; // Importing the updated CSS file

const About = () => {
  return (
    <section className="about-section">
      <aside className="sidebar">
        <div class="sidebar-info">
          <figure class="avatar-box">

          </figure>
          <div class="info-content">
            <h1 class="name" title="Ryan Arafeh">Ryan Arafeh</h1>

            <p class="title">Software Engineer / UI/UX Developer</p>
          </div>

        </div>

        <div class="sidebar-info_more">

          <div class="separator"></div>

          <ul class="contacts-list">

            <li class="contact-item">

              <div class="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <div class="contact-info">
                <p class="contact-title">Email</p>

                <a href="mailto:arafehryan@gmail.com" class="contact-link">arafehryan@gmail.com</a>
              </div>

            </li>

            <li class="contact-item">

              <div class="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div class="contact-info">
                <p class="contact-title">Location</p>

                <address>Toronto, Ontario, Canada</address>
              </div>

            </li>

          </ul>

          <div class="separator"></div>

          <ul class="social-list">

            <li class="social-item">
              <a href="#" class="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>

            <li class="social-item">
              <a href="#" class="social-link">
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