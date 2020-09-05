import React, { Fragment, useState, useContext, useEffect } from "react";
import Map from './Map'

const apiCallFake = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ ourStoy: "Base de dato" });
    }, 2000);
  });
};

const Contact = () => {
  // console.log(AppContext);
  const initalStateValues = {
    name: '',
    email: '',
    subject: '',
    message: ''    
  }
  const [values, setValues] = useState(initalStateValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('...Sendind Data')
  }

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setValues({...values, [name]: value})
    console.log(values)
  }

  return (
    <Fragment key="product-container">
      <section id="contact" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Map/>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="col-md-12 col-sm-12">
                <div
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <h2>Contact Us</h2>
                </div>
              </div>

              <form
                className="wow fadeInUp"
                id="contact-form"
                data-wow-delay="0.8s"
                onSubmit={handleSubmit}
              >
                <h6 className="text-success">
                  Your message has been sent successfully.
                </h6>

                <h6 className="text-danger">
                  E-mail must be valid and message must be longer than 1
                  character.
                </h6>

                <div className="col-md-6 col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    id="cf-name"
                    name="name"
                    placeholder="Full name"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 col-sm-6">
                  <input
                    type="email"
                    className="form-control"
                    id="cf-email"
                    name="email"
                    placeholder="Email address"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-12 col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    id="cf-subject"
                    name="subject"
                    placeholder="Subject"
                    onChange={handleChange}
                  />

                  <textarea
                    className="form-control"
                    rows="6"
                    id="cf-message"
                    name="message"
                    placeholder="Tell about your project"
                    onChange={handleChange}
                  ></textarea>

                  <button
                    type="submit"
                    className="form-control"
                    id="cf-submit"
                    name="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
