import React, { Fragment } from "react";

const Product = () => {
  return (
    <Fragment key="product-container">
      <section id="menu" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                <h2>Our Menus</h2>
                <h4>Tea Time &amp; Dining</h4>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="menu-thumb">
                <a
                  href="images/menu-image1.jpg"
                  className="image-popup"
                  title="American Breakfast"
                >
                  <img
                    src="images/menu-image1.jpg"
                    className="img-responsive"
                    alt=""
                  />

                  <div className="menu-info">
                    <div className="menu-item">
                      <h3>American Breakfast</h3>
                      <p>Tomato / Eggs / Sausage</p>
                    </div>
                    <div className="menu-price">
                      <span>$25</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="menu-thumb">
                <a
                  href="images/menu-image2.jpg"
                  className="image-popup"
                  title="Self-made Salad"
                >
                  <img
                    src="images/menu-image2.jpg"
                    className="img-responsive"
                    alt=""
                  />

                  <div className="menu-info">
                    <div className="menu-item">
                      <h3>Self-made Salad</h3>
                      <p>Green / Fruits / Healthy</p>
                    </div>
                    <div className="menu-price">
                      <span>$18</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="menu-thumb">
                <a
                  href="images/menu-image3.jpg"
                  className="image-popup"
                  title="Chinese Noodle"
                >
                  <img
                    src="images/menu-image3.jpg"
                    className="img-responsive"
                    alt=""
                  />

                  <div className="menu-info">
                    <div className="menu-item">
                      <h3>Chinese Noodle</h3>
                      <p>Pepper / Chicken / Vegetables</p>
                    </div>
                    <div className="menu-price">
                      <span>$34</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="menu-thumb">
                <a
                  href="images/menu-image4.jpg"
                  className="image-popup"
                  title="Rice Soup"
                >
                  <img
                    src="images/menu-image4.jpg"
                    className="img-responsive"
                    alt=""
                  />

                  <div className="menu-info">
                    <div className="menu-item">
                      <h3>Rice Soup</h3>
                      <p>Green / Chicken</p>
                    </div>
                    <div className="menu-price">
                      <span>$28</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="menu-thumb">
                <a
                  href="images/menu-image5.jpg"
                  className="image-popup"
                  title="Project title"
                >
                  <img
                    src="images/menu-image5.jpg"
                    className="img-responsive"
                    alt=""
                  />

                  <div className="menu-info">
                    <div className="menu-item">
                      <h3>Deli Burger</h3>
                      <p>Beef / Fried Potatoes</p>
                    </div>
                    <div className="menu-price">
                      <span>$46</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="menu-thumb">
                <a
                  href="images/menu-image6.jpg"
                  className="image-popup"
                  title="Project title"
                >
                  <img
                    src="images/menu-image6.jpg"
                    className="img-responsive"
                    alt=""
                  />

                  <div className="menu-info">
                    <div className="menu-item">
                      <h3>Big Flat Fried</h3>
                      <p>Pepper / Crispy</p>
                    </div>
                    <div className="menu-price">
                      <span>$30</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Product;
