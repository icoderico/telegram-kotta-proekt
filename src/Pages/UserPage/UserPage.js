import React, { useEffect } from "react";
import userPic from "./user-photo.jpg";
import "./userpage.scss";

const UserPage = () => {
  const token = localStorage.getItem("TOKEN");

  console.log(token);

  useEffect(() => {
    fetch(`https://telegram-alisherjon-api.herokuapp.com/users`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [token]);

  return (
    <>
      <div className="userPage">
        <div className="userCard">
          <div className="UserPageHeader">
            <h4>Information</h4>
            <div className="userPageIcons">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
              <i className="fa-solid fa-delete-left"></i>
            </div>
          </div>
          <div className="userPageProfile">
            <img className="userImg" src={userPic} alt="" width={100} />
            <div className="userText">
              <h4>Name Middle-name</h4>
              <p className="text-secondary fw-lighter">last seen recntly</p>
            </div>
          </div>
          <div className="break"></div>
          <div className="userPageInfromation">
            <div className="row userInfo">
              <div className="col-md-3 text-center">
                <i class="fa-solid fa-circle-info"></i>
              </div>
              <div className="col-md-9">
                <span>+998 (XX) XXX-XX-XX</span> <br />
                <span className="text-secondary fw-lighter">telephone</span>
              </div>
            </div>
            <div className="row userInfo">
              <div className="col-md-3 text-center"></div>
              <div className="col-md-9">
                <span>...</span> <br />
                <span className="text-secondary fw-lighter">About me</span>
              </div>
            </div>
            <div className="row userInfo">
              <div className="col-md-3 text-center"></div>
              <div className="col-md-9">
                <span>...</span> <br />
                <span className="text-secondary fw-lighter mt-4">
                  User Name
                </span>
              </div>
            </div>
            <div className="row userInfo">
              <div className="col-md-3 text-center">
                <i class="fa-solid fa-bell"></i>
              </div>
              <div className="col-md-6">
                <span>Notifications</span>
              </div>
              <div className="col-md-3">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    checked
                  />
                </div>
              </div>
            </div>
            <div className="row userInfo ">
              <div className="col-md-3"></div>
              <div className="col-md-9">
                <h5 className="text-primary">Send Message</h5>
              </div>
            </div>
          </div>
          <div className="break"></div>
          <div className="userPageAdditional">
            <div className="row addInfo">
              <div className="col-md-3 text-center">
                <i class="fa-solid fa-image"></i>
              </div>
              <div className="col-md-9">50 Photographers</div>
            </div>
            <div className="row addInfo">
              <div className="col-md-3 text-center">
                <i class="fa-solid fa-video"></i>
              </div>
              <div className="col-md-9"> 19 Videos</div>
            </div>
            <div className="row addInfo">
              <div className="col-md-3 text-center">
                <i class="fa-solid fa-file"></i>
              </div>
              <div className="col-md-9"> 22 Files</div>
            </div>
            <div className="row addInfo">
              <div className="col-md-3 text-center">
                <i class="fa-solid fa-headphones-simple"></i>
              </div>
              <div className="col-md-9"> 12 Audiofiles</div>
            </div>
            <div className="row addInfo">
              <div className="col-md-3 text-center">
                <i class="fa-solid fa-link"></i>
              </div>
              <div className="col-md-9"> 6 Links</div>
            </div>
            <div className="row addInfo">
              <div className="col-md-3 text-center">
                <i class="fa-solid fa-microphone-lines"></i>
              </div>
              <div className="col-md-9"> 6 Audiomessage</div>
            </div>
            <div className="row addInfo">
              <div className="col-md-3 text-center">
                <i className="fa-solid fa-code-branch"></i>
              </div>
              <div className="col-md-9"> 32 Gifts</div>
            </div>
            <div className="row addInfo">
              <div className="col-md-3 text-center">
                <i class="fa-solid fa-user-group"></i>
              </div>
              <div className="col-md-9"> 6 Groups</div>
            </div>
          </div>
          <div className="break"></div>
          <div className="footer">
            <div className="row addInfo">
              <div className="col-md-3 text-center">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
              <div className="col-md-9 text-start">Sent</div>
            </div>
            <div className="row addInfo">
              <div className="col-md-3 text-center">
                <i class="fa-solid fa-pen"></i>
              </div>
              <div className="col-md-9 text-start"> Rename</div>
            </div>
            <div className="row addInfo">
              <div className="col-md-3 text-center">
                <i class="fa-solid fa-delete-left"></i>
              </div>
              <div className="col-md-9 text-start"> Remove from Contact</div>
            </div>
            <div className="row addInfo">
              <div className="col-md-3 text-center">
                <i class="fa-solid fa-ban text-danger"></i>
              </div>
              <div className="col-md-9 text-danger text-start"> Block</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
