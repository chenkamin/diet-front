import React from "react";
import axios from "axios";

function Home() {
  const [state, setState] = React.useState({ email: "", password: "" });

  const handleInputs = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const handleRedirect = (role) => {
    return role == "client"
      ? "http://localhost:3000/<mypage>"
      : "http://localhost:3000/<guide>";
  };

  const postData = async () => {
    let data = await axios.post("http://localhost:4000/users/login", state);
    const nextPage = handleRedirect(data.data.data.user[0].role);
    console.log(nextPage);
    return data;
  };

  return (
    <div id="home-container">
my data
    </div>
  );
}

export default Home;
