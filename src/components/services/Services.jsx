import React from "react"
import tooth from "../../../public/tooth.png"
import Shape from "../../../public/Shape.png"
import human from "../../../public/human-brain.png"
import medical from "../../../public/medical-file.png"
import docman from "../../../public/doctor-man.png"
import docwomen from "../../../public/doctor-woman.png"
import amb from "../../../public/ambulance.png"
import path from "../../../public/path.png"
import google from "../../../public/google.png"
import twitter from "../../../public/twitter.png"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

const Specialists = [
  { name: "Dr. Awaatif Al", Specialist: "Dental Care" },
  { name: "Dr. Filipa Gaspar", Specialist: "Cardiology" },
  { name: "Dr. Sukhmeet Gorae", Specialist: "Neurological" },
  { name: "Dr. Siri Jakobsson", Specialist: "Prediatrics" },
]

const images = [
  {
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
  },
  {
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
  },
  {
    image: "https://picsum.photos/200/200?random=9",
  },
  {
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    image: "https://picsum.photos/200/200?random=8",
  },
]

const Services = () => {
  const [data, setData] = useState([])

  console.log(data)

  const fetchApi = async () => {
    try {
      const res = await axios.get(
        "https://admin.tomedes.com/api/v1/get-reviews?page=1"
      )
      console.log(res)
      setData(res?.data?.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <>
      <div className="flex justify-center flex-col items-center mt-24 w-[100%]">
        <div className="text-4xl font-sans text-blue-400">Our Services</div>
        <div className="flex justify-center mt-4">
          <span className="font-sans text-1xl max-w-md text-center">
            We provide the most full medical services, so every person could
            have the opportunity to receive qualitative medical help.
          </span>
        </div>
        <div className="flex justify-center gap-8 w-[60%] mt-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center p-4 w-48 h-48 shadow-xl shadow-blue-400/30 rounded-xl transition-all duration-300 hover:w-56 hover:h-56 hover:shadow-blue-400/50">
            <img src={tooth} alt="" className="h-20 w-20 mb-4" />
            <p className="text-center">Dental care</p>
          </div>

          {/* Card 2 - Special blue card */}
          <div className="flex flex-col items-center bg-blue-500 text-white p-4 w-48 h-48 rounded-xl transition-all duration-300 hover:w-56 hover:h-56 hover:bg-blue-600">
            <img src={Shape} alt="" className="h-20 w-20 mb-4" />
            <span className="text-center">Pulmonry</span>
            <span className="font-light mt-2">Learn more {">"} </span>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center p-4 w-48 h-48 shadow-xl shadow-blue-400/30 rounded-xl transition-all duration-300 hover:w-56 hover:h-56 hover:shadow-blue-400/50">
            <img src={human} alt="" className="h-20 w-20 mb-4" />
            <p className="text-center">Neurogical</p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center p-4 w-48 h-48 shadow-xl shadow-blue-400/30 rounded-xl transition-all duration-300 hover:w-56 hover:h-56 hover:shadow-blue-400/50">
            <img src={medical} alt="" className="h-20 w-20 mb-4" />
            <p className="text-center">Prediatrics</p>
          </div>
        </div>
      </div>

      <div className="flex w-[100%] gap-8 justify-center items-center mt-6 h-screen">
        <div className="flex flex-col w-[40%] gap-4">
          <span className="font-bold text-2xl">Clinic With Innovative </span>
          <span className="">
            We provide the most full medical services, so every person could
            heave the oppurtunity to receive qualitative medical help.
          </span>
          <p className="bg-blue-500 text-white p-2 rounded-full w-[100px] ">
            Learn more
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-24 relative">
            <div className="flex flex-col items-center justify-center">
              <img
                src={docwomen}
                alt=""
                className="h-[140px] w-[80px] absolute mb-32"
              />
              <div className="flex items-end px-2 h-[120px] bg-white  shadow-blue-300 shadow-2xl rounded-xl font-bold text-xs ">
                <p>Qualified Doctors</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <img
                src={amb}
                alt=""
                className="h-[80px] w-[80px] absolute mb-32"
              />
              <div className="flex items-end px-2 h-[120px] bg-white  shadow-blue-300 shadow-2xl rounded-xl font-bold text-xs">
                <p>24 Hours Service</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={docman}
              alt=""
              className="h-[100px] w-[120px] absolute mb-32"
            />
            <div className="flex items-end px-2 h-[120px] bg-white  shadow-blue-300 shadow-2xl rounded-xl font-bold text-xs">
              <p>Emergency Care</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <p className="text-[34px] font-medium">We Have The Best Specialist</p>
        <p className="flex flex-col justify-center">
          <span>
            We have a wide experience in experience design and strategy,
          </span>
          <span className="flex justify-center">
            with locally-rooted knowledge.
          </span>
        </p>
      </div>

      <div className="flex  w-[100%] gap-8 justify-center">
        {Specialists.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-[15%] bg-white shadow-2xl rounded-lg"
          >
            <div className="w-[100%] h-[240px] bg-slate-400 rounded-t-lg"></div>
            <div className="flex flex-col p-2">
              <span className=" font-bold">{item.name}</span>
              <span className="">{item.Specialist}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 w-[100%]">
        <p className="flex pl-32 text-4xl font-bold mt-24">
          What Our Customers Say
        </p>
        <div className="flex flex-wrap gap-6 justify-center w-[100%] p-2">
          {data.map((review, index) => {
            const imageIndex = index % images.length
            const reviewImage = images[imageIndex].image

            return (
              <div
                key={review.ID}
                className="flex flex-col justify-between p-6 w-[40%] min-h-[260px] bg-white text-black shadow-xl rounded-xl relative"
              >
                <div className="absolute -top-2 -right-2 flex justify-center items-center rounded-full bg-blue-800 w-10 h-10">
                  <span className="text-white text-4xl">"</span>
                </div>
                <p className="mb-4">"{review.Reviews}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={reviewImage}
                    alt="User"
                    className=" w-12 h-12 rounded-full object-cover m-2"
                  />
                  <div className="flex flex-col items-center">
                    <span className="font-bold">{review.Name}</span>
                    <span className="text-sm text-gray-600">
                      {review.Company}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex w-[100%] justify-center my-[100px]">
        <div className="flex flex-col items-center justify-center bg-blue-600 rounded-2xl w-[80%] h-[300px] gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-white text-3xl font-bold">
              Subscribe to Newsletter
            </span>
            <span className="text-white">
              We have a wide experience in experience design and strategy,
            </span>
          </div>
          <span className="flex justify-between p-4 bg-white rounded-2xl w-[60%]">
            <input
              type="text"
              placeholder="Enter your email address"
              className="outline-none "
            />
            <button className="bg-blue-600 px-12 py-3 rounded-full text-white ">
              Send
            </button>
          </span>
        </div>
      </div>

      <div className="flex justify-between gap-20 px-32 py-2 ">
        <div className="font-bold text-2xl">
          <span className="text-blue-700">Medi</span>
          <span className="text-red-500">care+</span>
        </div>
        <div className="flex gap-5 text-blue-700 items-center pr-10 ">
          <span>Home</span>
          <span>About</span>
          <span>Services</span>
          <span>News</span>
        </div>
      </div>

      <div className="flex flex-col px-32 gap-1 justify-center bg-blue-200 w-[100%] h-[240px]">
        <div className="flex flex-row gap-6 ">
          <img
            src={path}
            alt=""
            className="h-[30px] w-[30px] p-2 bg-white rounded-full"
          />
          <img
            src={google}
            alt=""
            className="bg-white h-[30px] w-[30px] p-2 rounded-full"
          />
          <img
            src={twitter}
            alt=""
            className="bg-white h-[30px] w-[30px] p-2 rounded-full"
          />
        </div>
        <span className="text-xs ">©2023 - 011BQ </span>
      </div>
    </>
  )
}

export default Services
