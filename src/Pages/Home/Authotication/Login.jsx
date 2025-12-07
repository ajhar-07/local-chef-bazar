import React from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
    const {loginUser,loginwithGoogle}=useAuth()
    const {register,handleSubmit,formState:{errors}}=useForm()
  const handleLogin = (data) => {
    console.log(data);
    loginUser(data.email,data.password)
    .then(result=>{
        console.log(result.user);
        alert('login Successfully')
    })
    .catch(error=>{
        console.log(error);
        alert(error.message)
        
    })
  };

  const handleGoogleLogin = () => {
   loginwithGoogle()
   .then(result=>{console.log(result.user);
    alert("Login Successfully")
   })
   .catch(error=>{
    console.log(error);
    alert(error.message)
    
   })
  };

  return (
    <div className="min-h-screen py-5 flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

       
        <div className="mb-4">
          <Link
            to="/"
            className="text-emerald-500 font-medium hover:underline"
          >
            ← Back to Home
          </Link>
        </div>

        
        <h2 className="text-3xl font-bold text-emerald-500 text-center mb-6">
          Login
        </h2>

       
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
          
         
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
             {...register('email',{required:true})}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your email"
            />
            {
                errors.email?.type==="required" && <p className="text-red-500">Email is Required</p>
            }
          </div>

         
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
             {...register('password',{required:true,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/})}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your password"
            />
             {
                errors.password?.type==="pattern"&&<p className="text-red-500"> Password must include uppercase, lowercase, number & special character</p>
            }
           {errors.password?.type==="required" && <p className="text-red-500">Password is Required</p>}
          </div>

          
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-emerald-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

         
          <button
            type="submit"
            className="w-full py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition"
          >
            Login
          </button>
        </form>

       
        <div className="text-center my-4 text-gray-500">OR</div>

       
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 border flex items-center justify-center gap-3 rounded-lg hover:bg-gray-50 transition"
        >
          <FcGoogle size={24} />
          <span className="font-medium">Continue with Google</span>
        </button>

        
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
