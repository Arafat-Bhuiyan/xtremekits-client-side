import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen text-gray-700 bg-slate-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-4">
              <span className="font-semibold">Let's Get Moving!</span> Login and level up your game with the best
              accessories.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-200">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text mb-1 text-gray-700 font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input placeholder-gray-600 bg-slate-300 text-gray-700"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text mb-1 text-gray-700 font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input placeholder-gray-600 bg-slate-300 text-gray-700"
                />
              </div>
              <div className="form-control mt-3">
                <button className="btn bg-slate-600">Login</button>
              </div>
              <p>
                Don't have an account?{"  "}
                <span>
                  <Link to="/register" className="text-blue-500">
                    Register
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
