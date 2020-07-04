import React from "react";
import axios from "axios";

function Home() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleInputs = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const postData = async () => {
    let data = await axios.post("http://localhost:4000/users/signup", state);
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
      <input
        type="password"
        placeHolder="password"
        name="passwordConfirm"
        value={state.passwordConfirm}
        onChange={handleInputs}
      />
      <input
        type="text"
        placeHolder="name"
        name="name"
        value={state.name}
        onChange={handleInputs}
      />
      <div onClick={postData}>LOGIN</div>
    </div>
  );
}

export default Home;
