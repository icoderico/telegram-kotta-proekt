import React from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { useState } from "react";

const HeaderAllChat = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section id="headerAllChat">
      <div className="container py-2">
        <div className="row text-center justify-content-between w-100 align-items-center">
          <div className="col-4">
            <Button variant="primary" className="buton" onClick={handleShow}>
              <i className="fas fa-bars color"></i>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  Telegram Settings <i className="fa-solid fa-gear"></i>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ul className="text-center py-2 text-light offcanvasUl  bg-opacity-50">
                  <li className="mt-4">Blocked User</li>
                  <li className="mt-4">Active Session</li>
                  <li className="mt-4">Edit Profile</li>
                  <li className="mt-4">Notifications</li>
                  <li className="mt-4">Privacy And Security</li>
                  <li className="mt-4">Chat Settings</li>
                  <li className="mt-4">Advanced</li>
                  <li className="mt-4">Language</li>
                  <li className="mt-4">Pascode & Face Id</li>
                  <li className="mt-4">Two-Step Verification</li>
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
          <div className="col-4">
            <h1 className="color">Chats</h1>
          </div>
          <div className="col-4">
            <i className="fas fa-search color buton"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderAllChat;
