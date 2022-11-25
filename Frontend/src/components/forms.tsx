import React, { useEffect } from "react";

const forms = () => {
  var hour = new Date().getHours();
  var minutes = new Date().getMinutes();

  var day = new Date().getDate();
  var month = new Date().getMonth();
  var year = new Date().getFullYear();

  var currentHour = hour + ":" + minutes;
  var currentDate = year + "-" + month + "-" + day;

  return (
    <div>
      <div
        id="Forms"
        className="flex gap-6 justify-center flex-wrap md:flex-nowrap mt-5 mx-3"
      >
        <div
          id="CaloriesForm"
          className="w-full shadow-lg flex justify-center flex-wrap max-w-lg border-t"
        >
          <h3 className="w-full text-center text-lg font-semibold mt-3">
            Add Calories
          </h3>
          <p className="w-full text-center">
            Write down what you eat to keep track of your calories
          </p>
          <div className="flex justify-center flex-wrap m-2 mb-5">
            <input
              type="text"
              required
              placeholder="Name of food"
              className="border w-48 p-1 px-3 m-1"
            />
            <input
              type="time"
              required
              id="currentTime"
              readOnly
              value={currentHour}
              className="border w-48 p-1 px-3 m-1"
            />
            <input
              type="text"
              required
              placeholder="Calories per 100 g/ml"
              className="border w-48 p-1 px-3 m-1"
            />
            <input
              type="text"
              required
              placeholder="Amount per grams"
              className="border w-48 p-1 px-3 m-1"
            />
          </div>
          <button className="mb-4 p-2 bg-violet-900 text-violet-200 px-10 font-semibold rounded-md max-h-10 duration-150 active:scale-110 active:bg-violet-200 active:text-violet-900">
            ADD
          </button>
        </div>
        <div
          id="CurrentWeight"
          className="w-full shadow-lg flex justify-center flex-wrap max-w-lg border-t"
        >
          <h3 className="w-full text-center text-lg font-semibold mt-3 ">
            Add current weight
          </h3>
          <p className="w-full text-center">
            Add your weight to get relevant Facts
          </p>
          <div className="flex justify-center w-full flex-wrap m-2 mb-5">
            <input
              type="date"
              value={currentDate}
              readOnly
              className="border w-full p-1 px-3 m-1"
            />
            <input
              type="text"
              placeholder="Current weight"
              className="border w-full p-1 px-3 m-1"
            />
          </div>
          <button className="mb-4 p-2 bg-violet-900 text-violet-200 px-10 font-semibold rounded-md max-h-10 self-end duration-200 active:scale-110 active:bg-violet-200 active:text-violet-900">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default forms;
