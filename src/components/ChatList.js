import React from "react";
import { Link } from "react-router-dom";

const data = new Date();
const today = data.getDate();
const month = data.getMonth();
const year = data.getFullYear();
const day = data.getDay();

const ChatList = () => {
  return (
    <section id="chatList">
      <div className="container">
        <ul>
          <li>
            <Link className="text-decoration-none text-dark" to={"/allchat"}>
              <div className="row  justify-content-center align-items-center">
                <div className="col-3 text-center">
                  <img
                    className="mw-100 image"
                    src="https://i.insider.com/56e34aad52bcd022008b5fa5?width=1000&format=jpeg&auto=webp"
                    alt=""
                  />
                </div>
                <div className="col-6 align-self-center">
                  <h1>Drake</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    magnam iste quia debitis maxime suscipit saepe animi quaerat
                    ex voluptate!
                  </p>
                </div>
                <div className="col-3 text-center">
                  <p>
                    {today}:0{month}:{year}
                  </p>
                  <p>{day}</p>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none text-dark" to={"/allchat"}>
              <div className="row  justify-content-center align-items-center">
                <div className="col-3 text-center">
                  <img
                    className="mw-100 image"
                    src="https://assets.vogue.in/photos/60655988149b2b615d65b1be/2:3/w_444,h_666,c_limit/Is%20our%20cultural%20obsession%20with%20celebrity%20transformations%20ruining%20our%20self-esteem"
                    alt=""
                  />
                </div>
                <div className="col-6 align-self-center">
                  <h1>Ariana Grande</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    magnam iste quia debitis maxime suscipit saepe animi quaerat
                    ex voluptate!
                  </p>
                </div>
                <div className="col-3 text-center">
                  <p>
                    {today}:0{month}:{year}
                  </p>
                  <p>{day}</p>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none text-dark" to={"/allchat"}>
              <div className="row  justify-content-center align-items-center">
                <div className="col-3 text-center">
                  <img
                    className="mw-100 image"
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/zendaya-attends-the-71st-emmy-awards-at-microsoft-theater-news-photo-1574806042.jpg?crop=0.612xw:0.916xh;0.143xw,0.0839xh&resize=640:*"
                    alt=""
                  />
                </div>
                <div className="col-6 align-self-center">
                  <h1>Zendaya</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    magnam iste quia debitis maxime suscipit saepe animi quaerat
                    ex voluptate!
                  </p>
                </div>
                <div className="col-3 text-center">
                  <p>
                    {today}:0{month}:{year}
                  </p>
                  <p>{day}</p>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none text-dark" to={"/allchat"}>
              <div className="row  justify-content-center align-items-center">
                <div className="col-3 text-center">
                  <img
                    className="mw-100 image"
                    src="https://deadline.com/wp-content/uploads/2016/06/dwayne-johnson.jpg"
                    alt=""
                  />
                </div>
                <div className="col-6 align-self-center">
                  <h1>The Rock</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    magnam iste quia debitis maxime suscipit saepe animi quaerat
                    ex voluptate!
                  </p>
                </div>
                <div className="col-3 text-center">
                  <p>
                    {today}:0{month}:{year}
                  </p>
                  <p>{day}</p>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none text-dark" to={"/allchat"}>
              <div className="row  justify-content-center align-items-center">
                <div className="col-3 text-center">
                  <img
                    className="mw-100 image"
                    src="https://cdn.vox-cdn.com/thumbor/SbX1VbxJhxijxD1tzRTJ8uq38P4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19101461/spider_man_far_from_home_peter_parker_1562394390.jpg"
                    alt=""
                  />
                </div>
                <div className="col-6 align-self-center">
                  <h1>Tom Holland</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    magnam iste quia debitis maxime suscipit saepe animi quaerat
                    ex voluptate!
                  </p>
                </div>
                <div className="col-3 text-center">
                  <p>
                    {today}:0{month}:{year}
                  </p>
                  <p>{day}</p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ChatList;
