import React from "react";

function App1() {
  return (
    <>
      {/* HEADER */}
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            Hailee
          </a>

          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item ">
                <a href="#home" className="nav__link">
                  <i className="bx bx-home"></i>
                </a>
              </li>

              <li className="nav__item ">
                <a href="#about" className="nav__link">
                  <i className="bx bx-user"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="bx bx-book"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#work" className="nav__link">
                  <i className="bx bx-briefcase-alt-2"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="bx bx-message-square-dots"></i>
                </a>
              </li>
            </ul>
          </div>

          <i
            className="bx bx-moon change-theme change-theme-button"
            id="theme-button"
          ></i>
        </nav>
      </header>

      {/* MAIN */}
      <main className="main">
        {/* HOME */}
        <section className="home section" id="home">
          {/* Home section content */}
        </section>

        {/* ABOUT */}
        <section className="about section" id="about">
          {/* About section content */}
        </section>

        {/* SKILLS */}
        <section className="skills section" id="skills">
          {/* Skills section content */}
        </section>

        {/* SERVICES */}
        <section className="services section">
          {/* Services section content */}
        </section>

        {/* WORK */}
        <section className="work section" id="work">
          {/* Work section content */}
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonial section">
          {/* Testimonials section content */}
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
          {/* Contact section content */}
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">{/* Footer content */}</footer>
    </>
  );
}

export default App1;
