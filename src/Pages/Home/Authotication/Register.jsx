import React from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.files[0];

    console.log({ name, email, password, photo });
  };

  const handleGoogleRegister = () => {
    console.log("Google Register Clicked");
  };

  return (
    <div className="min-h-screen pt-5 pb-5 flex justify-center items-center bg-gray-100">
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
          Register
        </h2>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-5">

          {/* Username */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your username"
            />
          </div>

          {/* User Photo */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Profile Photo
            </label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              required
              className="w-full px-3 py-2 border rounded-lg bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

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

          {/* Register button */}
          <button
            type="submit"
            className="w-full py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="text-center my-4 text-gray-500">OR</div>

        {/* Google Register */}
        <button
          onClick={handleGoogleRegister}
          className="w-full py-3 border flex items-center justify-center gap-3 rounded-lg hover:bg-gray-50 transition"
        >
          <FcGoogle size={24} />
          <span className="font-medium">Continue with Google</span>
        </button>

        {/* Login link */}
        <p className="text-center mt-5 text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-500 font-medium hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;
