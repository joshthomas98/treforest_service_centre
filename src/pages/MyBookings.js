import React from "react";

const MyBookings = () => {
  return (
    <div>
      <div className="container mb-4 main-container">
        <div className="row">
          <div className="col-lg-4 pb-5">
            {/* Account Sidebar*/}
            <div className="author-card pb-3">
              <div
                className="author-card-cover"
                style={{
                  backgroundImage:
                    "url(https://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg)",
                }}
              >
                <a
                  className="btn btn-style-1 btn-white btn-sm"
                  href="#"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="You currently have 290 Reward points to spend"
                >
                  <i className="fa fa-award text-md" />
                  &nbsp;290 points
                </a>
              </div>
              <div className="author-card-profile">
                <div className="author-card-avatar">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt="Daniel Adams"
                  />
                </div>
                <div className="author-card-details">
                  <h5 className="author-card-name text-lg">Daniel Adams</h5>
                  <span className="author-card-position">
                    Joined February 06, 2017
                  </span>
                </div>
              </div>
            </div>
            <div className="wizard">
              <nav className="list-group list-group-flush">
                <a className="list-group-item active" href="#">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <i className="fa fa-shopping-bag mr-1 text-muted" />
                      <div className="d-inline-block font-weight-medium text-uppercase">
                        Orders List
                      </div>
                    </div>
                    <span className="badge badge-secondary">6</span>
                  </div>
                </a>
                <a
                  className="list-group-item"
                  href="https://www.bootdey.com/snippets/view/bs4-profile-settings-page"
                  target="__blank"
                >
                  <i className="fa fa-user text-muted" />
                  Profile Settings
                </a>
                <a className="list-group-item" href="#">
                  <i className="fa fa-map-marker text-muted" />
                  Addresses
                </a>
                <a
                  className="list-group-item"
                  href="https://www.bootdey.com/snippets/view/bs4-wishlist-profile-page"
                  tagert="__blank"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <i className="fa fa-heart mr-1 text-muted" />
                      <div className="d-inline-block font-weight-medium text-uppercase">
                        My Wishlist
                      </div>
                    </div>
                    <span className="badge badge-secondary">3</span>
                  </div>
                </a>
                <a className="list-group-item" href="#">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <i className="fa fa-tag mr-1 text-muted" />
                      <div className="d-inline-block font-weight-medium text-uppercase">
                        My Tickets
                      </div>
                    </div>
                    <span className="badge badge-secondary">4</span>
                  </div>
                </a>
              </nav>
            </div>
          </div>
          {/* Orders Table*/}
          <div className="col-lg-8 pb-5">
            <div className="d-flex justify-content-end pb-3">
              <div className="form-inline">
                <label className="text-muted mr-3" htmlFor="order-sort">
                  Sort Orders
                </label>
                <select className="form-control" id="order-sort">
                  <option>All</option>
                  <option>Delivered</option>
                  <option>In Progress</option>
                  <option>Delayed</option>
                  <option>Canceled</option>
                </select>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead>
                  <tr>
                    <th>Order #</th>
                    <th>Date Purchased</th>
                    <th>Status</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a
                        className="navi-link"
                        href="#order-details"
                        data-toggle="modal"
                      >
                        78A643CD409
                      </a>
                    </td>
                    <td>August 08, 2017</td>
                    <td>
                      <span className="badge badge-danger m-0">Canceled</span>
                    </td>
                    <td>
                      <span>$760.50</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        className="navi-link"
                        href="#order-details"
                        data-toggle="modal"
                      >
                        34VB5540K83
                      </a>
                    </td>
                    <td>July 21, 2017</td>
                    <td>
                      <span className="badge badge-info m-0">In Progress</span>
                    </td>
                    <td>$315.20</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        className="navi-link"
                        href="#order-details"
                        data-toggle="modal"
                      >
                        112P45A90V2
                      </a>
                    </td>
                    <td>June 15, 2017</td>
                    <td>
                      <span className="badge badge-warning m-0">Delayed</span>
                    </td>
                    <td>$1,264.00</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        className="navi-link"
                        href="#order-details"
                        data-toggle="modal"
                      >
                        28BA67U0981
                      </a>
                    </td>
                    <td>May 19, 2017</td>
                    <td>
                      <span className="badge badge-success m-0">Delivered</span>
                    </td>
                    <td>$198.35</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        className="navi-link"
                        href="#order-details"
                        data-toggle="modal"
                      >
                        502TR872W2
                      </a>
                    </td>
                    <td>April 04, 2017</td>
                    <td>
                      <span className="badge badge-success m-0">Delivered</span>
                    </td>
                    <td>$2,133.90</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        className="navi-link"
                        href="#order-details"
                        data-toggle="modal"
                      >
                        47H76G09F33
                      </a>
                    </td>
                    <td>March 30, 2017</td>
                    <td>
                      <span className="badge badge-success m-0">Delivered</span>
                    </td>
                    <td>$86.40</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
