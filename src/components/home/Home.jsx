import React from "react"

const Home = () => {
  return (
    <div className="flex gap-4 justify-center  w-[100%] px-12 py-2 ">
      <div className="gap-4 flex flex-col w-[40%] my-20 ">
        <div className="text-black font-bold text-2xl">
          Welcome to MediCare+ Clinic
        </div>
        <div className=" font-extrabold text-6xl text-blue-600">
          Best Specialists
        </div>
        <div className="font-sans ">
          We are on the leading edge of cancer care. Providing the full
          continuum of cancer treatments and supportive care services in a
          single convenient location.
        </div>
        <div className="flex gap-2">
          <span className="bg-blue-500 p-2 rounded-xl text-white ">
            {" "}
            Make an Appointment{" "}
          </span>
          <span className="bg-white p-2 rounded-xl text-blue-600 font-sans">
            Departments
          </span>
        </div>
      </div>
      <div className="bg-blue-100 rounded-md w-[25%]"> </div>
    </div>
  )
}

export default Home
