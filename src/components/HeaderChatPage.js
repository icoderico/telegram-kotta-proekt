import React from "react";
import { useParams } from "react-router-dom";

const HeaderChatPage = () => {

  const params = useParams();
  

  return (
    <section id="headerChatPage">
      <div className="container">
        <div className="row py-2 justify-content-between w-100 align-items-center">
          <div className="col-10">
            <h5 className="wordss">Name</h5>
            <small className="wordss">Last seen Recently</small>
          </div>
          <div className="col-2 align-self-center">
            <ul className="d-flex justify-content-center  align-items-center">
              <li>
                <a
                  className="wordss"
                  href="https://www.instagram.com/cristiano/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-search"></i>
                </a>
              </li>
              <li>
                <a
                  href="tel:+998930755620"
                  target="_blank"
                  className="wordss"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-phone"></i>
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  className="wordss"
                  rel="noopener noreferrer"
                  href="https://en.wikipedia.org/wiki/Celebrity"
                >
                  <i className="py-1 px-2 fas fa-info"></i>
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="wordss"
                  href="https://google.com"
                >
                  <i className="fas fa-list"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderChatPage;
