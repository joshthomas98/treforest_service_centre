import React from "react";

const Testimonials = () => {
  return (
    <>
      <div id="testimonials" className="px-5 pb-5 text-dark">
        <div className="container">
          <h2 className="text-center">Testimonials</h2>
          <p className="lead text-center text-dark mb-5">
            See what our customers have to say about Treforest Service Centre...
          </p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Craig</h3>
                  <p className="card-text text-dark">
                    "At Treforest Service Station, my van's well-being is a top
                    priority. The team's dedication to excellence and expertise
                    transformed my vehicle, making every journey smoother and
                    more reliable than ever." — <strong>Craig</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/12.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Michael</h3>
                  <p className="card-text text-dark">
                    "Treforest Service Station stands out for it's exceptional
                    van services. The diverse range of services have enhanced my
                    van's performance. It's the go-to place for reliable
                    automotive care." — <strong>Michael</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/13.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Steve</h3>
                  <p className="card-text text-dark">
                    "The professionalism at Treforest Service Station make
                    vehicle maintenance a pleasure. A welcoming atmosphere and
                    friendly staff ensure that every visit is a pleasant
                    experience." — <strong>Steve</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/14.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Jason</h3>
                  <p className="card-text text-dark">
                    "Choosing Treforest Service Station was a game-changer for
                    my van. Personalised attention and expert care has instilled
                    confidence in every mile. Highly recommended for top-notch
                    van services." — <strong>Jason</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
