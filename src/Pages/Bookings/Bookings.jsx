
import checkout from "../../assets/images/checkout/checkout.png"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingsRow from "./BookingsRow";
import Swal from "sweetalert2";
// import axios from "axios";
import useAxiousSecure from "../../hook/useAxiousSecure";

const Bookings = () => {
    // data load kora
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiousSecure();

    // const url = `https://cars-doctor-server-sigma.vercel.app/bookings?email=${user?.email}`;

    // hook us kore
    const url = `/bookings?email=${user?.email}`;
    useEffect(() => {


        // hook us kore

        axiosSecure.get(url)
        .then(res => setBookings(res.data))



        // new axios us kore
        // axios.get(url, { withCredentials: true })
        //     .then(res => {
        //         setBookings(res.data)
        //     })

            // Support Session
        // fetch(url, { credentials: 'include' })
        //     .then(res => res.json())
        //     .then(data => setBookings(data))

        // old 
        // fetch(url)
        // .then(res => res.json())
        // .then(data => setBookings(data))
    }, [url, axiosSecure])

    // bookingsRow data 
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#008000",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://cars-doctor-server-sigma.vercel.app/bookings/${id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining)
                        }
                    })
            }
        });
    }

    // update 
    const handleBookingConform = id => {
        fetch(`https://cars-doctor-server-sigma.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings)
                }
            })
    }

    return (
        <div className="mb-20">
            <div className="card p-3 bg-base-100 shadow-xl image-full pb-14">
                <figure><img src={checkout} alt="photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl md:text-4xl text-white lg:ms-20 lg:pt-20 ">Cart Details</h2>


                </div>
            </div>
            <h2 className="text-5xl text-red-500"> booooooook! {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className=" font-bold text-lg text-[#FF3811]">IMAGES</th>
                            <th className=" font-bold text-lg text-[#FF3811]">SERVICE</th>
                            <th className=" font-bold text-lg text-[#FF3811]">PRICE</th>
                            <th className=" font-bold text-lg text-[#FF3811]">DATE</th>
                            <th className=" font-bold text-lg text-[#FF3811]">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            bookings && bookings?.map(booking => <BookingsRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConform={handleBookingConform}
                            ></BookingsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Bookings;