import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

    const {_id, title, img, price } = service
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="photo" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                    <div className="card-actions text-xl font-semibold text-[#FF3811] justify-end items-center ">
                        <p className="">Price: ${price}</p>
                        <Link to={`/checkout/${_id}`}>
                            <AiOutlineArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;