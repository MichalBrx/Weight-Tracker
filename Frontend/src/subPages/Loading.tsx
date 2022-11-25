const Loading = () => {
  return (
    <div className="py-4 text-center grid place-content-center ">
      <h1 className="text-8xl my-40 font-mono">Weight-Tracker</h1>
      <div className="flex justify-center ">
        <h3 className="z-20 font-medium w-full text-5xl ">Loading..</h3>

        <svg
          className="motion-safe:animate-spin"
          fill="none"
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loading;
