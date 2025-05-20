import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

export const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Registration done", email, password);

    // Password validation
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLengthValid = password.length >= 6;

    if (!hasUpperCase) {
      Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password must contain at least one uppercase letter.",
      });
      return;
    }

    if (!hasLowerCase) {
      Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password must contain at least one lowercase letter.",
      });
      return;
    }

    if (!isLengthValid) {
      Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password must be at least 6 characters long.",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user.accessToken) {
          Swal.fire({
            title: "Registration successful!",
            icon: "success",
            draggable: true,
          });
        }
        const createdAt = result?.user?.metadata?.creationTime;

        const newUser = { name, email, createdAt };
        // save new user info to the database
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data._id) {
              console.log("user created to db");
            }
          });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen text-gray-700 bg-slate-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-4">
              <span className="font-semibold">Get Ready to Play!</span> Register
              and start your journey with top-notch sports gear made just for
              you.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-200">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text mb-1 text-gray-700 font-semibold">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input placeholder-gray-600 bg-slate-300 text-gray-700"
                />
              </div>
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
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input placeholder-gray-600 bg-slate-300 text-gray-700"
                />
                {/* Show / Hide text button */}
                <p
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-sm text-gray-700 mt-1 cursor-pointer select-none"
                >
                  {showPassword ? "Hide" : "Show"}
                </p>
              </div>
              <div className="form-control mt-3">
                <input
                  type="submit"
                  className="btn bg-slate-600"
                  value="Register"
                />
              </div>
              <p>
                Already have an account?{"  "}
                <span>
                  <Link to="/login" className="text-blue-500">
                    Login
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
