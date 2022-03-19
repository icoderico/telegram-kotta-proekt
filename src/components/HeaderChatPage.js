import React from "react";

const HeaderChatPage = () => {
  return (
    <section id="headerChatPage">
      <div className="container">
        <div className="row py-2 justify-content-between align-items-center">
          <div className="col-10">  
            <h5>Name</h5>
            <small>Last seen Recently</small>
          </div>
          <div className="col-2">
            <ul className="d-flex justify-content-between align-items-center">
              <li>
                <a
                  className="text-dark"
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
                  className="text-dark"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-phone"></i>
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  className="text-dark"
                  href="https://en.wikipedia.org/wiki/Celebrity"
                >
                  <i className="border border-dark text-light bg-dark py-1 px-2 fas fa-info"></i>
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  className="text-dark"
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
