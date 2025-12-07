import React from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const { registerUser, loginwithGoogle } = useAuth();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const handleRegister = (data) => {
    console.log(data);
    registerUser(data.email, data.password, data.name, data.photo)
      .then(result => {
        console.log(result.user);
        alert("Register Successfully");
      })
      .catch(error => {
        console.log(error);
        alert(error.message);
      });
  };

  const handleGoogleRegister = () => {
    loginwithGoogle()
      .then(result => {
        console.log(result.user);
        alert("Register Successfully");
      })
      .catch(error => {
        console.log(error);
        alert(error.message);
      });
  };

  const password = watch("password"); 

  return (
    <div className="min-h-screen pt-5 pb-5 flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

       
        <div className="mb-4">
          <Link to="/" className="text-emerald-500 font-medium hover:underline">
            ← Back to Home
          </Link>
        </div>

       
        <h2 className="text-3xl font-bold text-emerald-500 text-center mb-6">
          Register
        </h2>

        <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">

          
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your username"
            />
            {errors.name && <p className="text-red-500">Please put a name</p>}
          </div>

         
          <div>
            <label className="block text-gray-700 font-medium mb-1">Profile Photo</label>
            <input
              type="file"
              accept="image/*"
              {...register("photo", { required: true })}
              className="w-full px-3 py-2 border rounded-lg bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {errors.photo && <p className="text-red-500">Attach a photo</p>}
          </div>

         
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </div>

         
          <div>
            <label className="block text-gray-700 font-medium mb-1">Address</label>
            <input
              type="text"
              {...register("address", { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your address"
            />
            {errors.address && <p className="text-red-500">Address is required</p>}
          </div>

         
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your password"
            />
            {errors.password?.type === "required" && <p className="text-red-500">Password is required</p>}
            {errors.password?.type === "minLength" && <p className="text-red-500">Password must be 6 characters or longer</p>}
            {errors.password?.type === "pattern" && <p className="text-red-500">Password must include uppercase, lowercase, number & special character</p>}
          </div>

          
          <div>
            <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: value => value === password
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword?.type === "required" && <p className="text-red-500">Confirm password is required</p>}
            {errors.confirmPassword?.type === "validate" && <p className="text-red-500">Passwords do not match</p>}
          </div>

          
          <button
            type="submit"
            className="w-full py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition"
          >
            Register
          </button>
        </form>

       
        <div className="text-center my-4 text-gray-500">OR</div>

       
        <button
          onClick={handleGoogleRegister}
          className="w-full py-3 border flex items-center justify-center gap-3 rounded-lg hover:bg-gray-50 transition"
        >
          <FcGoogle size={24} />
          <span className="font-medium">Continue with Google</span>
        </button>

       
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
