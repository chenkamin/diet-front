import React from "react";
import axios from "axios";

function Home() {
  const [state, setState] = React.useState({ email: "", password: "" });

  const handleInputs = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const postData = async () => {
    let data = await axios.post("http://localhost:4000/users/login", state);
    console.log(data);
    console.log(state);
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
