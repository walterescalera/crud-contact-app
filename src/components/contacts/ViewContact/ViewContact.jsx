import React from "react";
import { Link } from "react-router-dom";

let ViewContact = () => {
  return (
    <React.Fragment>
      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-bold">View Contact</p>
            </div>
          </div>
        </div>
      </section>

      <section className="view-contact mt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                alt=""
                className="contact-img"
              />
            </div>

            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                  Name:<span className="fw-bold"> Alejandro</span>
                </li>

                <li className="list-group-item list-group-item-action">
                  Phone:<span className="fw-bold"> 3514323232</span>
                </li>

                <li className="list-group-item list-group-item-action">
                  Email:<span className="fw-bold"> Alejandro@gmail.com</span>
                </li>

                <li className="list-group-item list-group-item-action">
                  Company:<span className="fw-bold"> Alejandro@gmail.com</span>
                </li>

                 <li className="list-group-item list-group-item-action">
                  Title:<span className="fw-bold"> Alejandro@gmail.com</span>
                </li>

                 <li className="list-group-item list-group-item-action">
                  Group:<span className="fw-bold"> Alejandro@gmail.com</span>
                </li>   

              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Link to={"/contacts/list"} className="btn btn-warning">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ViewContact;
