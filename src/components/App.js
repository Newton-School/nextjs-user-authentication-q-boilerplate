import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";

const App = () => {
  return (
    <div>
      <h1>User Authentication App</h1>
      {/* TODO: Conditionally render LoginForm or UserProfile based on if the user is authenticated or not */}
    </div>
  );
};

export default App;
