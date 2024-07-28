import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiousSecure";

const useServices = (asc) => {
    const [services, setServices] = useState([])


    // axios bebohar korbo akhn new
    useEffect (() =>{
        // axiosSecure('/services') 
        /* data sort korar jonno  63_5-2 Price range 100 to 300*/
        axiosSecure(`/services?sort=${asc ?  'asc': 'desc'}`)
        .then(res => setServices(res.data))
    },[asc])

    // hook us korci  old
    /* useEffect(() => {
        fetch('https://cars-doctor-server-sigma.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []) */
    return services
};

export default useServices;