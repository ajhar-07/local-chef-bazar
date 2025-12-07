import React from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  const handleGoogleLogin = () => {
    console.log("Google Login Clicked");
  };

  return (
    <div className="min-h-screen py-5 flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        {/* Back to Home */}
        <div className="mb-4">
          <Link
            to="/"
            className="text-emerald-500 font-medium hover:underline"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <h2 className="text-3xl font-bold text-emerald-500 text-center mb-6">
          Login
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-emerald-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="text-center my-4 text-gray-500">OR</div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 border flex items-center justify-center gap-3 rounded-lg hover:bg-gray-50 transition"
        >
          <FcGoogle size={24} />
          <span className="font-medium">Continue with Google</span>
        </button>

        {/* Register Link */}
        <p className="text-center mt-5 text-gray-700">
          New here?{" "}
          <Link to="/register" className="text-emerald-500 font-medium hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
