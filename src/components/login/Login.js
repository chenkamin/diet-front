import React from "react";
import axios from "axios";

function Home() {
  const [state, setState] = React.useState({ email: "", password: "" });

  const handleInputs = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const handleRedirect = (user) => {
    return user.role == "client"
      ? `http://localhost:3000/daily/${user.id}`
      : "http://localhost:3000/MyUsers";
  };

  const postData = async () => {
    let data = await axios.post("http://localhost:4000/users/login", state);
    const nextPage = handleRedirect(data.data.data.user[0]);
    console.log(data.data);
    localStorage.setItem("token", data.data.token);
    localStorage.setItem("id", data.data.data.user[0].id);

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
