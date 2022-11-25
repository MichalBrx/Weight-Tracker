import React, { useState } from "react";
import Forms from "../components/forms";
import { useNavigate } from "react-router-dom";

import { useQuery } from "react-query";

import { getCurrentUser } from "../api/getCurrentUser";
import Loading from "./Loading";

const main = () => {
  const navigate = useNavigate();

  const { data, error, isError, isLoading } = useQuery(
    "currentUser",
    getCurrentUser
  );

  if (isLoading) {
    <Loading />;
  }
  if (isError) {
    console.log(error);
    navigate("/login");
  }

  const [show, setShow] = useState(false);

  return (
    <div>
      <div id="container">
        <div
          id="NavBar"
          className="w-full h-16 bg-violet-900 flex justify-center items-center text-white font-semibold text-2xl font-mono px-3 md:px-60"
        >
          <h1 className="w-full flex justify-center">Weight Tracker</h1>
          <label className="drawer-button btn btn-primary md:hidden w-10 h-10">
            <button
              className="material-icons"
              onClick={() => setShow((prevState) => !prevState)}
            >
              menu
            </button>
          </label>
        </div>

        {/* <!-- MOBILE --> */}
        <div
          id="mySidenav"
          // className="fixed w-0 top-0 right-0 overflow-x-hidden pt-16 duration-150 z-50 bg-violet-200 shadow-md h-full md:hidden"
          className={
            show
              ? "fixed w-40 top-0 right-0 overflow-x-hidden pt-16 duration-150 z-50 bg-violet-200 shadow-md h-full md:hidden"
              : "fixed w-0 top-0 right-0 overflow-x-hidden pt-16 duration-150 z-50 bg-violet-200 shadow-md h-full md:hidden"
          }
        >
          <div className="flex w-full justify-start ml-5">
            <a className="p-2 block duration-75 h-10 w-10 text-4xl z-20"></a>
          </div>
          <div className="flex justify-end w-full">
            <ul className="menu pt-4 w-2/3 text-violet-900 font-semibold text-xl">
              <li>
                <a
                  className="p-2 pr-6 duration-75 w-full rounded-l-lg flex justify-end"
                  href="/login"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:hidden">
          <div id="content" className="w-full">
            <h1 className="w-full text-center text-3xl mt-5">
              Hello {""}
              {data?.data.name}
            </h1>
            <div>
              <Forms />
            </div>
            <div
              id="Facts"
              className="flex flex-wrap max-w-5xl w-full p-6 gap-3 justify-center"
            >
              <h1 className="w-full text-center text-3xl">Facts</h1>
              <div id="tile1" className="border w-44 p-3 py-4">
                <h1 className="w-full text-center text-bold text-xl">
                  Remaning Calories
                </h1>
                <p className="w-full text-center my-3 text-bold text-2xl"></p>
                <p className="w-full text-center">{0} already used</p>
              </div>
              <div id="tile2" className="border w-44 py-4">
                <h1 className="w-full text-center text-bold text-xl">
                  Recent Loss
                </h1>
                <p className="w-full text-center my-3 text-bold text-2xl">KG</p>
              </div>
              <div id="tile3" className="border w-44 py-4">
                <h1 className="w-full text-center text-bold text-xl">
                  To the goal
                </h1>
                <p className="w-full text-center my-3 text-bold text-2xl"></p>
                <p className="w-full text-center">to {80}kg</p>
              </div>
              <div id="tile4" className="border w-44 py-4">
                <h1 className="w-full text-center text-bold text-xl">Daily</h1>
                <p className="w-full text-center my-3 text-bold text-2xl"></p>
                <p className="w-full text-center">Days left to get goal</p>
              </div>
              <div id="tile5" className="border w-44 py-4">
                <h1 className="w-full text-center text-bold text-xl">
                  Total loss
                </h1>
                <p className="w-full text-center my-3 text-bold text-2xl"></p>
                <p className="w-full text-center">From start till now</p>
              </div>
              <div id="tile6" className="border w-44 py-4">
                <h1 className="w-full text-center text-bold text-xl">BMI</h1>
                <p className="w-full text-center my-3 text-bold text-2xl"></p>
                <p className="w-full text-center">Current Body-Mass Index</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- DESKTOP --> */}
        <div
          id="ToolBar"
          className="md:grid hidden justify-between w-full grid-cols-11 grid-rows-1 auto-cols-max"
        >
          <div
            id="content"
            className="w-full p-10 col-span-9 justify-center flex flex-wrap"
          >
            <h1 className="m-2 text-3xl w-full text-center">
              Hello {""}
              {data?.data.name}
            </h1>

            <Forms />

            <div
              id="Facts"
              className="flex flex-wrap max-w-5xl w-full p-6 gap-3 justify-center"
            >
              <h1 className="w-full text-center text-4xl">Facts</h1>
              <div id="tile1" className="border w-1/4 p-3 py-4">
                <h1 className="w-full text-center text-bold text-xl">
                  Remaning Calories
                </h1>
                <p className="w-full text-center my-3 text-bold text-2xl"></p>
                <p className="w-full text-center">{0} already used</p>
              </div>
              <div id="tile2" className="border w-1/4 py-4">
                <h1 className="w-full text-center text-bold text-xl">
                  Recent Loss
                </h1>
                <p className="w-full text-center my-3 text-bold text-2xl">KG</p>
              </div>
              <div id="tile3" className="border w-1/4 py-4">
                <h1 className="w-full text-center text-bold text-xl">
                  To the goal
                </h1>
                <p className="w-full text-center my-3 text-bold text-2xl"></p>
                <p className="w-full text-center">to {80}kg</p>
              </div>
              <div id="tile4" className="border w-1/4 py-4">
                <h1 className="w-full text-center text-bold text-xl">Daily</h1>
                <p className="w-full text-center my-3 text-bold text-2xl"></p>
                <p className="w-full text-center">Days left to get goal</p>
              </div>
              <div id="tile5" className="border w-1/4 py-4">
                <h1 className="w-full text-center text-bold text-xl">
                  Total loss
                </h1>
                <p className="w-full text-center my-3 text-bold text-2xl"></p>
                <p className="w-full text-center">From start till now</p>
              </div>
              <div id="tile6" className="border w-1/4 py-4">
                <h1 className="w-full text-center text-bold text-xl">BMI</h1>
                <p className="w-full text-center my-3 text-bold text-2xl"></p>
                <p className="w-full text-center">Current Body-Mass Index</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end w-full col-span-2 h-96">
            <div className="w-48 bg-violet-200 rounded-bl-lg">
              <div className="flex justify-end py-5">
                <ul className="pt-4 w-2/3 text-violet-900 font-semibold text-xl">
                  <li>
                    <a
                      className="p-2 pr-6 w-full rounded-l-lg flex justify-end bg-violet-300 duration-200 active:bg-violet-900 active:text-violet-200 my-3 hover:bg-violet-400"
                      href="/login"
                    >
                      Logout
                    </a>
                  </li>
                  <li>
                    <a
                      className="p-2 pr-6 w-full rounded-l-lg flex justify-end bg-violet-300 duration-200 active:bg-violet-900 active:text-violet-200 my-3 hover:bg-violet-400"
                      href="/"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="p-2 pr-6 w-full rounded-l-lg flex justify-end bg-violet-300 duration-200 active:bg-violet-900 active:text-violet-200 my-3 hover:bg-violet-400"
                      href="/"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      className="p-2 pr-6 w-full rounded-l-lg flex justify-end bg-violet-300 duration-200 active:bg-violet-900 active:text-violet-200 my-3 hover:bg-violet-400"
                      href="/"
                    >
                      Diet
                    </a>
                  </li>
                  <li>
                    <a
                      className="p-2 pr-6 w-full rounded-l-lg flex justify-end bg-violet-300 duration-200 active:bg-violet-900 active:text-violet-200 my-3 hover:bg-violet-400"
                      href="/"
                    >
                      Workout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
