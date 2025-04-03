import React from "react"
import { Navbar } from "../components/navbar/Navbar"
import Home from "../components/home/Home"
import Services from "../components/services/Services"
export default function Index() {
  return (
    <div className="bg-blue-50">
      <Navbar />
      <Home />
      <Services />
    </div>
  )
}
