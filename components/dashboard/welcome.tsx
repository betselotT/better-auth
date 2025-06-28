import React from "react";
import { NavUserProps } from "../nav-user";

const WelcomeDashboard = ({ user }: { user: NavUserProps }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg shadow-md mb-6">
      <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
      <p className="text-lg mt-2">
        Your role: <span className="font-semibold capitalize">{user.role}</span>
      </p>
    </div>
  );
};

export default WelcomeDashboard;
