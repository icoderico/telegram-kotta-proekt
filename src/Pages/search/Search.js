import React from "react";
import axios from "axios";

const Search = () => {
  const handleSubmit = (e) => {
    const token = localStorage.getItem("TOKEN");
    console.log(token);
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const username = data.username;
    console.log(data, username);
    axios.get(`https://telegram-alisherjon-api.herokuapp.com/users/${username}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  };
  
  return (
    <section id="search">
      <div className="container py-3">
        <form onSubmit={handleSubmit} className="w-100 text-center">
          <input
            className="form-control-lg  inputSearch text-center rounded-pill w-50"
            type="search"
            placeholder="🔍  Search..."
          />
          <button type="submit" className="buttonSearch">
            Go
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;
