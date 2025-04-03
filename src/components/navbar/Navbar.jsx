import React from "react"

export const Navbar = () => {
  return (
    <div className="flex justify-evenly gap-20 pl-8 py-2 ">
      <div className="font-bold text-2xl">
        <span className="text-blue-700">Medi</span>
        <span className="text-red-500">care+</span>
      </div>
      <div className="flex gap-5 text-blue-700 items-center pr-10 ">
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>News</span>
        <div className="bg-blue-500 px-4 py-2 rounded-xl text-white ">
          Contact
        </div>
      </div>
    </div>
  )
}
