import React from "react";
import axios from "axios";

function Home() {
  const [state, setState] = React.useState({ email: "", password: "" });

  const handleInputs = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const handleRedirect = (role) => {
    return role == "client"
      ? "http://localhost:3000/MyDay"
      : "http://localhost:3000/MyUsers";
  };

  const postData = async () => {
    let data = await axios.post("http://localhost:4000/users/login", state);
    const nextPage = handleRedirect(data.data.data.user[0].role);
    console.log(data.data.token);
    localStorage.setItem("token", data.data.token);
    console.log(nextPage);
    window.location.replace(nextPage);
    return data;
  };



  return (
    <div id="home-container">
      <input
        type="email"
        placeHolder="email"
        name="email"
        value={state.email}
        onChange={handleInputs}
      />
      <input
        type="password"
        placeHolder="password"
        name="password"
        value={state.password}
        onChange={handleInputs}
      />
      <div onClick={postData}>LOGIN</div>
    </div>
  );
}

export default Home;
