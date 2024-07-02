import checkout from "../../assets/images/checkout/checkout.png"
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const CheckOut = () => {
    const service = useLoaderData()
    const { title, price, _id, img } = service;
    const { user } = useContext(AuthContext)

    const handleService = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const message = form.message.value;

        // server site data save kora
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price,
            message,
        }
        console.log(booking)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Service book successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div >
            {/* <img src={checkout} alt="" /> */}
            <div className="card p-3 bg-base-100 shadow-xl image-full">
                <figure><img src={checkout} alt="photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl md:text-4xl text-white lg:ms-20 lg:pt-20 ">Check Out</h2>
                   
                    
                </div>
            </div>
            <h2 className="text-4xl text-center font-semibold my-5 ">Book Service:  <span className="text-[#FF3811]">{title} </span></h2>
            <div>
                <form onSubmit={handleService}>
                    <div className="grid md:grid-cols-2 gap-x-16  p-3">
                        <div>
                            <div className="form-control mb-5">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Your Name</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name="name" defaultValue={user?.displayName} required placeholder="First Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control mb-5">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Due Amount</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="number" name="price" defaultValue={price} className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        <div>
                            <div className="form-control mb-5">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Your Email</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="email" name="email" defaultValue={user?.email} required placeholder="Your Email" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control mb-5">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Date</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="date" name="date" required className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="p-3">
                        <textarea name="message" required placeholder="Your Message" className="textarea textarea-bordered  w-full" ></textarea>

                        <input type="submit" value="Order Confirm" className="btn btn-block text-white bg-[#FF3811] hover:bg-[#d83312] my-5" />
                    </div>

                </form>
            </div >
        </div >
    );
};

export default CheckOut;