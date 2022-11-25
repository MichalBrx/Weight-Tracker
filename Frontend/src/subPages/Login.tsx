import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { postData as login } from "../api/loginApi";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  interface user {
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isLoading } = useMutation(login, {
    onSuccess: (data) => {
      console.log("SUCCES", data);
      navigate("/home");
    },
    onError: (err) => {
      console.log("Error", err);
    },
  });

  const onSubmit = (data: user) => {
    const user = { ...data };
    mutate(user);
  };

  return (
    <div>
      <div className="bg-base-100 sm:bg-white">
        <div className="m-2 mx-3 sm:flex sm:justify-center">
          <div className="flex md:mt-20 gap-3">
            <div className="mockup-phone border-primary my-5">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1 bg-violet-300">
                  <div className="w-full h-16 bg-violet-900 flex justify-center items-center text-white font-semibold text-2xl font-mono px-3 relative">
                    <h1 className="w-full text-center m-1 max-w-min flex-wrap sm:max-w-none">
                      Weight Tracker
                    </h1>
                  </div>
                  <div
                    id="ifError"
                    className="invisible peer-invalid:visible text-red-700 font-semibold px-8 sm:px-16 m-2 p-2 border border-red-700 bg-rose-400 rounded"
                    // className={`${errors } ? ' hidden  ' : 'hidden'`}
                  >
                    {/* <p>{errors => {console.log(errors)}}</p> */}
                  </div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    id="form"
                    className="sm:p-10 p-5 pt-14 flex flex-wrap gap-5 sm:justify-center -mt-5"
                  >
                    <label
                      id="email"
                      className="w-full ml-2 font-semibold text-black"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      id="email"
                      className="-mt-4 p-1 rounded-md w-full pl-3 focus:outline-none focus:border focus:border-violet-900"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Field required",
                        },
                      })}
                    />

                    <label
                      id="password"
                      className="w-full ml-2 font-semibold text-black"
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      placeholder="password"
                      id="password"
                      className="-mt-4 p-1 rounded-md w-full pl-3 focus:outline-none focus:border focus:border-violet-900"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Field required",
                        },
                      })}
                    />

                    <button
                      type="submit"
                      className="p-1 rounded-md w-36 h-10 pl-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:scale-110 active:scale-100 duration-200 text-white font-semibold mt-5 flex-start"
                    >
                      Sign In
                    </button>
                  </form>
                  <div className="text-center font-semibold">
                    <h4 className="text-violet-900">Don't have an account?</h4>
                    <a
                      className="text-fuchsia-500 hover:cursor-pointer"
                      href="#/register"
                    >
                      Sign Up first
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex mt-28 max-w-md">
              <div className="flex justify-center flex-wrap">
                <h1 className="text-4xl text-center font-medium ">
                  If <label className="font-bold text-fuchsia-500">YOU</label>
                  want to lose weight,
                  <br />
                  <label className="font-bold text-violet-600">WE</label> will
                  make it easier
                </h1>
                <img
                  src="../../yoga2.png"
                  alt="yoga position"
                  className="h-96 w-96 brightness-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
