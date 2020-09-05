import React, { Fragment, useState, Component } from "react";
import aboutImage from '../asset/images/about-image.jpg'

const About = () => {

  const initialInfo = {
    title: 'Testing Hooks',
    subTitle: 'Example',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    imgaeURL: ''
  }

  const [info, SetInfo] = useState(initialInfo);

    return (
      <Fragment key="About-container">
        <section id="about" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="about-info">
                  <div
                    className="section-title wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <h4>{info.subTitle}</h4>
                    <h2>{info.title}</h2>
                  </div>  
                  <div className="wow fadeInUp" data-wow-delay="0.4s">
                    <p>{info.paragraph}</p>
                  </div>
                </div>
              </div>
  
              <div className="col-md-6 col-sm-12">
                <div className="wow fadeInUp about-image" data-wow-delay="0.6s">
                  <img
                    src={aboutImage}
                    className="img-responsive"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
}








export default About;
