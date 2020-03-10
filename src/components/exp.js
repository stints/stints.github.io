import React from 'react';

const companies = [
  {
    name: "Century Interactive",
    time: "2011-2014",
    img: "ci.png",
    desc: "A telephone tracking service utilizing Coldfusion, jQuery, and MSSQL.  I joined as an intern but quickly rose the ranks eventually being the second most senior developer on the team.  I would mentor new hires to help bring them up to speed quicker.",
    highlights: [
      "Designed and developed an application to handle telephony routing with both backend and database procedures.",
      "Streamlined onboarding of client websites that wished to have their phone number tracked.",
      "Designed and developed a click to call system generating 15% of all traffic.",
      "With a team of four, designed and developed a new telephony system based on SIP.",
      "Devised a solution to push call conversion counts into Google Adwords, Analytics, and Doubleclick Search",
      "Built a payment system utilizing Paypal API.",
      "Designed and developed a rapid audio encoder which would upload to AWS s3.",
    ],
  },
  {
    name: "Joinem",
    time: "2014-2015",
    img: "joinem.png",
    desc: "A social ecommerce startup utilizing a Django ReST API and Postgres. I joined not knowing anything about python but was able to quickly learn the basics to become capable eventually rising to a Sr Developer on the team.",
    highlights: [
      "Designed and developed the first iteration of the REST API service.",
      "Built database reporting services for both the merchandising and finance teams.",
      "Developed a new search system utilizing Elasticsearch.",
      "Handled staging and production server releases.",
    ],
  },
  {
    name: "StealthMonitoring",
    time: "2015-2017",
    img: "sm.png",
    desc: "A camera tracking company that would watch their clients cameras 24/7 for any illegal behavior.  The application was written in Python, jQuery, and used MSSQL as a database.  Started as the sole developer tasked with maintaining the current application.  Eventually, I was given the freedom to create new applications that vastly increased productivity with the monitoring teams.",
    highlights: [
      "Designed and developed an application for issue tracking for the monitoring team greatly increasing their overall efficiency.",
      "Developed reports based on requirements from the analytics team.",
      "Created a new git layout for managing development, staging, and production rollouts along with automating said rollouts.",
    ],
  },
  {
    name: "Snowfall Technologies",
    time: "2017-2018",
    img: "sf.png",
    desc: "A startup in the order management system scene.  It eventually pivoted to develop a warehouse management system, going so far as to purchase it's own warehouse which utilized the application we built.  Application was written in Python, jQuery, and Postgres.",
    highlights: [
      "Designed and developed an order management system based on criteria set out by the CEO.",
      "Designed and developed a warehouse management system using the OMS as a starting point.",
      "Developed a system in the WMS to speedup warehouse workers efficiency.",
      "Saw the release of the WMS and usage in a true warehouse setting.",
    ],
  },
  {
    name: "Art+Logic",
    time: "2019-2020",
    img: "al.png",
    desc: "A consultant company that allows other companies the flexibilty of not hiring in house developers.",
    highlights: [],
  },
];

const CompanyExperience = ({name, desc, time, img, highlights}) => {
  img = "images/" + img;
  return (
    <article className="media">
      <figure className="media-left">
        <p className="image">
          <img src={img} alt={name} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <h5 className="title is-5">{name}</h5>
          <h6 className="subtitle is-6">{time}</h6>
          <p>{desc}</p>
          {highlights.length > 0 &&
            <ul>
              {
                highlights.map((desc, i) => {
                  const id = new Buffer(i+name+desc).toString('base64');
                  return <li key={id}>{desc}</li>
              })
              }
            </ul>
          }
        </div>
      </div>
    </article>
  );
}

const Experience = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Experience</h1>
        <h2 className="subtitle">What I've Done</h2>
        {
          companies.map((company, i) => {
            const id = new Buffer(i+company).toString('base64');
            return <CompanyExperience key={id} {...company} />
          })
        }
        <div className="section">
          <div className="level">
            <p className="level-item">
              <a className="button" href="static/resume.pdf" target="_blank">Download Resume</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;