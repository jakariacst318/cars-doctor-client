
import checkout from "../../assets/images/checkout/checkout.png"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingsRow from "./BookingsRow";
import Swal from "sweetalert2";
import { config } from "localforage";

const Bookings = () => {
    // data load kora
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

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

                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = bookings.filter(booking =>booking._id !== id);
                            setBookings(remaining)
                        }
                    })
            }
        });
    }


    return (
        <div className="mb-20">
            <div className="card p-3 bg-base-100 shadow-xl image-full pb-14">
                <figure><img src={checkout} alt="photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl md:text-4xl text-white lg:ms-20 lg:pt-20 ">Cart Details</h2>


                </div>
            </div>
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
                        {/* row 1 */}
                        {
                            bookings.map(booking => <BookingsRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                            ></BookingsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Bookings;