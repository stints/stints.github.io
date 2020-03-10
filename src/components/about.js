import React from 'react';

const About = () => {
  const currentYear = (new Date()).getFullYear();
  const devTime = currentYear - 2011;
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">About</h1>
        <h2 className="subtitle">Who I am</h2>
        <article className="media">
          <figure className="media-left">
            <p className="image">
              <img src="images/me.jpg" className="is-rounded" alt="Me in Japan." />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>Hello!  I'm John and I like to develop things.  I've been in this industry for {devTime} years now and been primarly a fullstack developer.</p>
              <p>I am passionate about coding and, more general, problem solving.  I'll be honest, if I don't know something I'll tell you but I know that I'll be able to find the answer quickly enough.  I'm not afraid to ask questions about a problem if I don't see the full picture.  I aim to understand and learn at any place I'm at.  I enjoy going past my understanding as I believe it allows me to grow as a developer.</p>
              <p>I enjoy working with teams of any size.  Some past experiences has had me be the only developer while others I was one of many.  I've been involved with growing a team and mentoring the new hires as they were onboarded.</p>
              <p>I'm currently doing all I can to learn about machine learning.  Aside from that my hobbies are gaming, cooking, reading, and astronomy.</p>
            </div>
          </div>
        </article>
        <article className="media">
          <div className="media-content">
            <div className="content">
              <div className="level">
                <div className="level-item has-text-center">
                  <a className="link is-info" href="https://github.com/stints" rel="noopener noreferrer" target="_blank">
                    <figure className="image is-48x48">
                      <img src="images/github.png" alt="Github" />
                    </figure>
                  </a>
                </div>
                <div className="level-item has-text-center">
                  <a className="link is-info" href="https://app.codesignal.com/profile/stints" rel="noopener noreferrer" target="_blank">
                    <figure className="image is-48x48">
                      <img src="images/codesignal.png" alt="Codesignal" />
                    </figure>
                  </a>
                </div>
                <div className="level-item has-text-center">
                  <a className="link is-info" href="https://www.linkedin.com/in/john-stinson-57a62848/" rel="noopener noreferrer" target="_blank">
                    <figure className="image is-48x48">
                      <img src="images/linkedin.png" alt="Linkedin" />
                    </figure>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About;