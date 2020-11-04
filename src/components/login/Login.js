import React from "react";
import axios from "axios";
import http from './../../lib/httpService'
function Home() {
  const [state, setState] = React.useState({ email: "", password: "" });

  const handleInputs = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const handleRedirect = async (user) => {
    const aa = await user.role
    return aa == "client"
      ? `http://localhost:3000/menu`
      : "http://localhost:3000/MyUsers";
  };

  const postData = async () => {
    let data = await http.post(`/users/login`, state)
    // let data = await axios.post("http://localhost:4000/users/login", state);
    console.log(data.data.user[0])
    // console.table(data)
    const nextPage = await handleRedirect(data.data.user[0]);
    localStorage.setItem("token", data.data.token);
    localStorage.setItem("id", data.data.user[0].id);

    window.location.replace(nextPage);
    return data;
  };

  return (
    <div className="btns-container">
      <input
        type="email"
        placeHolder="email"
        name="email"
        value={state.email}
        onChange={handleInputs}
        className="btns-inputs"
      />
      <input
        type="password"
        placeHolder="password"
        name="password"
        value={state.password}
        onChange={handleInputs}
        className="btns-inputs"
      />
      <div onClick={postData} className="btns-inputs login-btn"
      >התחבר</div>
    </div>
  );
}

export default Home;
