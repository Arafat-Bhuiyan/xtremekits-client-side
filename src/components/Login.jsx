import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

export const Login = () => {
  const { logInUser, googleLogin } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    googleLogin()
      .then((result) => {
        console.log(result.user);
        if (result.user.accessToken) {
          Swal.fire({
            title: "Login successful!",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setIsLoading(false);
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    setIsLoading(true);
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);

        // update last login time
        const lastLogInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastLogInTime };

        fetch("http://localhost:5000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Log in info updated in db", data);
            if (data.modifiedCount >= 0) {
              Swal.fire({
                title: "Login successful!",
                icon: "success",
                draggable: true,
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
    setIsLoading(false);
  };
  return (
    <div>
      <div className="hero min-h-screen text-gray-700 bg-slate-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-4">
              <span className="font-semibold">Let's Get Moving!</span> Login and
              level up your game with the best accessories.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-200">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text mb-1 text-gray-700 font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input placeholder-gray-600 w-full bg-slate-300 text-gray-700"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text mb-1 text-gray-700 font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input placeholder-gray-600 w-full bg-slate-300 text-gray-700"
                />
                {/* Show / Hide text button */}
                <p
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-sm text-gray-700 mt-1 cursor-pointer select-none"
                >
                  {showPassword ? "Hide" : "Show"}
                </p>
              </div>
              <div className="form-control mt-3" disabled={isLoading}>
                <button className="btn w-full bg-slate-600">
                  {isLoading ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      Loading...
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
              <div></div>
              <button
                disabled={isLoading}
                onClick={handleGoogleLogin}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Loading...
                  </>
                ) : (
                  <div className="flex gap-1 items-center">
                    <svg
                      aria-label="Google logo"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path
                          fill="#34a853"
                          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                        ></path>
                        <path
                          fill="#4285f4"
                          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                        ></path>
                        <path
                          fill="#fbbc02"
                          d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                        ></path>
                        <path
                          fill="#ea4335"
                          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                        ></path>
                      </g>
                    </svg>
                    Login with Google
                  </div>
                )}
              </button>
              <p>
                Don't have an account?{"  "}
                <span>
                  <Link to="/register" className="text-blue-500">
                    Register
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
