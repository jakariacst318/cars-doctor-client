

const BookingsRow = ({ booking, handleDelete, handleBookingConform }) => {


    const { img, service, price, date, _id, status } = booking

    // const handleDelete = id => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#008000",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {

    //             fetch(`https://cars-doctor-server-sigma.vercel.app/bookings/${id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data)
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your file has been deleted.",
    //                             icon: "success"
    //                         });
    //                     }
    //                 })
    //         }
    //     });
    // }

    return (
        <tr>
            <th >
                <button onClick={() => handleDelete(_id)} className="btn btn-circle bg-[#444444] text-white btn-sm hover:bg-[#FF3811] ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-24 rounded">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>

                </div>
            </td>
            <td className="font-semibold">{service}</td>
            <td className="font-semibold">${price}</td>
            <td className="font-semibold">{date}</td>
            <th>
                {
                    status === 'confirm' ? <span className="font-bold text-[#008000]">Confirmed</span> :
                    <button onClick={() => handleBookingConform(_id)} className="btn btn-ghost btn-xs bg-[#FF3811] text-white hover:bg-[#ac250a]">Pending</button>
                }
            </th>
        </tr>
    );
};

export default BookingsRow;