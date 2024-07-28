// import { useEffect, useState } from "react";
import { useState } from "react";
import useServices from "../../../hook/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
    //  custom hook
    const [asc, setAsc] = useState(true)
    const services = useServices(asc)

    /*    const [services, setServices] = useState([])
   
       useEffect(() =>{
           fetch('https://cars-doctor-server-sigma.vercel.app/services')
           .then(res => res.json())
           .then(data => setServices(data))
       },[]) */
    return (
        <div>
            <div className="space-y-5 text-center mt-10">
                <h2 className="text-xl text-[#FF3811] font-bold">Services</h2>
                <h1 className="text-4xl font-bold">Our Service Area</h1>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                <div className="">
                    <button className=" btn text-white bg-[#FF3811] hover:bg-[#d83312] border-0  mb-10 mt-5"
                    onClick={() => setAsc(!asc)}>
                        {asc ? "Price: High to Low" : "Price: Low to High"}
                    </button>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center px-2">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;