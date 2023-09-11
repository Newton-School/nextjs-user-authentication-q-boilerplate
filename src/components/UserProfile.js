import React from "react";
import { logout } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";

const UserProfile = ({ user }) => {
  const handleLogout = () => {
    // TODO: Implement logout button click logic here
    // Replace this comment with your code for handling the logout button click
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Welcome!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
