// import React from 'react'

import { useState } from "react";
import { toast } from "react-toastify";
import { url } from "../../utils/Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DatasIsaLoading } from "../isLoading/DataIsLoading";

const Register = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        title: "",
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        whatsapp: "",
        // address: "",
        city: "",
        state: "",
        country: "",
        gender: "",
        ministryCall: "",
        other: "",
        whichMinistry: "",
        why: "",
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

        // Handle image upload
        const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files && e.target.files[0]) {
              const file = e.target.files[0];
              setImage(file);
              setPreview(URL.createObjectURL(file)); // Preview image
            }
          };
    
    //   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.checked ? "Yes" : "No" });
    //   };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!formData.email || !formData.firstName || !formData.phoneNumber || !image) {
          toast.error("Please fill in all required fields and upload an image");
          return;
        }
    
        try {
            setLoading(true);
            const formDataToSend = new FormData();
            Object.keys(formData).forEach((key) => {
                formDataToSend.append(key, (formData as any)[key]);
            });
            if (image) {
                formDataToSend.append("ayoAweMinImage", image);
            }

            const response = await axios.post(`${url}/minister/registerminister`, formDataToSend, {
                headers: { "Content-Type": "multipart/form-data" },
            });

          console.log("res", response)

        //   if (response.data)
          toast.success("Registration Successful!");

        navigate("/yme/register/success")

          setFormData({
            title: "",
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            whatsapp: "",
            // address: "",
            city: "",
            state: "",
            country: "",
            gender: "",
            ministryCall: "",
            other: "",
            whichMinistry: "",
            why: "",
          });

          setLoading(false)
        } catch (error: any) {
          toast.error(error.response?.data?.message || "Registration Failed");
          setLoading(false)
        }
      };



  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-white ">
        {/* <div className="bg-black w-full h-full opacity-70 absolute top-0 left-0"></div> */}
        <div className="w-[90%] flex justify-center items-center  ">

            <div className="w-full md:w-[60%] lg:w-[40%]rounded-[10px] bg-gray-300 shadow-lg p-4 flex flex-col gap-4 mt-[50px]"> 
                <p className="font-bold text-[18px] md:text-[22px] text-center">Young Ministers Equip Registration Form</p>

                <form onSubmit={handleSubmit} action="" className="flex flex-col gap-3 ">
                    {/* <div className="flex flex-col gap-2">
                        <p className="text-[16px] md:text-[20px]">Title</p> */}
                        <input type="text" className="w-full h-[45px] border-gray-400 border-[1px] rounded-[6px] text-[13px] md:text-[16px] outline-none bg-white  p-[5px] text-black" placeholder="Title i.e. Pastor/Mr/Mrs etc."
                        name="title" value={formData.title} onChange={handleChange} required />
                    {/* </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-[16px] md:text-[20px]">First Name</p> */}
                        <input type="text" className="w-full h-[45px] border-gray-400 border-[1px] bg-white  text-black rounded-[6px] text-[12px] md:text-[15px] outline-none p-[5px]" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required/>
                    {/* </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-[16px] md:text-[20px]">Middle Name</p> */}
                        <input type="text" className="w-full h-[45px] border-gray-400 border-[1px] bg-white  text-black  rounded-[6px] text-[12px] md:text-[15px] outline-none p-[5px]" placeholder="Middle Name" name="middleName" value={formData.middleName} onChange={handleChange}  />
                    {/* </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-[16px] md:text-[20px]">Last Name</p> */}
                        <input type="text" className="w-full h-[45px] border-gray-400 border-[1px] text-black  rounded-[6px] text-[12px] md:text-[15px] bg-white  outline-none p-[5px]" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange}  required />
                    {/* </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-[16px] md:text-[20px]">Email</p> */}
                        <input type="text" className="w-full h-[45px] border-gray-400 border-[1px] rounded-[6px] text-[12px] md:text-[15px] outline-none bg-white  text-black  p-[5px]" placeholder="Email" name="email" value={formData.email} onChange={handleChange}  required />
                    {/* </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-[16px] md:text-[20px]">Phone Number</p> */}
                        <input type="text" className="w-full h-[45px] border-gray-400 border-[1px] rounded-[6px] text-[12px] md:text-[15px] outline-none bg-white  text-black  p-[5px]" placeholder="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}  required/>
                    {/* </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-[16px] md:text-[20px]">WhatsApp Number</p> */}
                        <input type="text" className="w-full h-[45px] border-gray-400 border-[1px] rounded-[6px] text-[12px] md:text-[15px] outline-none bg-white  text-black  p-[5px]" placeholder="WhatsApp Number" name="whatsapp" value={formData.whatsapp} onChange={handleChange}  required />
                    {/* </div> */}

                    {/* <p className="font-bold">ADDRESS</p> */}

                    
                    {/* <div className="flex flex-col gap-2">
                        <p className="text-[16px] md:text-[20px]">Home Address</p> */}
                        {/* <input type="text" className="w-full h-[45px] border-gray-400 border-[1px] rounded-[6px] text-[12px] md:text-[15px] outline-none p-[5px]" placeholder="Home Address" name="address" value={formData.address} onChange={handleChange}  required /> */}
                    {/* </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-[16px] md:text-[20px]">City</p> */}
                        <input type="text" className="w-full h-[45px] border-gray-400 border-[1px] rounded-[6px] text-[12px] md:text-[15px] outline-none bg-white  text-black  p-[5px]" placeholder="City" name="city" value={formData.city} onChange={handleChange}  required/>
                    {/* </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-[16px] md:text-[20px]">State</p> */}
                        <input type="text" className="w-full h-[45px] border-gray-400 border-[1px] rounded-[6px] text-[12px] md:text-[15px] outline-none bg-white  text-black  p-[5px]" placeholder="State" name="state" value={formData.state} onChange={handleChange}  required />
                    {/* </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-[16px] md:text-[20px]">Country</p> */}
                        <input type="text" className="w-full h-[45px] border-gray-400 border-[1px] rounded-[6px] text-[12px] md:text-[15px] outline-none bg-white  text-black  p-[5px]" placeholder="Country" name="country" value={formData.country} onChange={handleChange}  required />
                    {/* </div> */}

                    <div className="flex flex-col gap-2">
                        <p className="text-[16px] md:text-[20px]">Gender*</p>

                        <div className="flex items-center gap-4">
                            <div className="flex gap-2 items-center">
                                <input className="w-[20px] h-[20px] border-gray-400 border-[1px] rounded-full outline-none p-[5px]"  type="radio" name="gender" value="Male" onChange={handleChange} checked={formData.gender === "Male"} />
                                <p className="text-[13px] md:text-[16px]">Male</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <input className="w-[20px] h-[20px] border-gray-400 border-[1px] rounded-full outline-none p-[5px]"  type="radio" name="gender" value="Female" onChange={handleChange} checked={formData.gender === "Female"} />
                                <p className="text-[13px] md:text-[16px]">Female</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-[16px] md:text-[20px]">Do you have a Ministry call?*</p>

                        <div className="flex items-center gap-4">
                            <div className="flex gap-2 items-center">
                                <input type="radio" className="w-[20px] h-[20px] border-gray-400 border-[1px] rounded-full outline-none p-[5px]"  name="ministryCall" onChange={handleChange} value="Yes" checked={formData.ministryCall === "Yes"}/>
                                <p className="text-[13px] md:text-[16px]">Yes</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <input type="radio" className="w-[20px] h-[20px] border-gray-400 border-[1px] rounded-full outline-none p-[5px]"   name="ministryCall" value="No" onChange={handleChange} checked={formData.ministryCall === "No"} />
                                <p className="text-[13px] md:text-[16px]">No</p>
                            </div>
                        </div>
                        
                        <div className="flex gap-2 items-center">
                            <input type="text" className="w-full h-[45px] border-gray-400 text-black  border-[1px] rounded-[6px] text-[12px] bg-white  md:text-[15px] outline-none p-[5px]" placeholder="Ministry Call (if others, pls, state.)" name="other" value={formData.other} onChange={handleChange} />
                                {/* // <p className="text-[13px] md:text-[16px]">Other</p> */}
                        </div>
                    </div>

                    <input type="text" className="w-full h-[45px] border-gray-400 border-[1px] rounded-[6px] text-[12px] md:text-[15px] outline-none bg-white  text-black  p-[5px]" placeholder="Which Ministry do you currently serve?" name="whichMinistry" value={formData.whichMinistry} onChange={handleChange} required />

                    <input type="text" className="w-full h-[45px] border-gray-400 border-[1px] rounded-[6px] text-[12px] md:text-[15px] outline-none bg-white  text-black  p-[5px]" placeholder="Why do you want to be part of the training?" name="why" value={formData.why} onChange={handleChange} required />

                    {/* <div className="">
                        <p>Please, upload a passport size image</p>

                        <input type="file" />

                        <p>preview</p>
                    </div> */}

                    <p className="text-[16px] md:text-[20px]">Please, upload a passport size image <br /><span className="text-red-400 text-[10px] md:text-[12px] leading-[10px]">Image file type must be either .jpg/.jpeg/png; <br /> Image size must not be more than 10mb </span></p>
                    <input type="file" onChange={handleImageChange} accept="image/*" className="border-[1px] border-gray-400 p-[6px] py-[10px] rounded-lg cursor-pointer bg-white" />
                    {preview && <img src={preview} alt="Preview" className="w-[270px] h-[250px] object-contain border-[1px] border-gray-400 rounded-lg mt-2 p-2" />}

                    <button className="w-full bg-[#000] border-none text-white hover:bg-[#2a2a2a]" type="submit">
                        { loading ? (<DatasIsaLoading />) : "Submit" }
                    </button>

                    <p className="text-[12px] md:text-[14px] lg:text-[16px]">*Any issues with registering? Pls contact <span className="font-bold">09038121579</span></p>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Register