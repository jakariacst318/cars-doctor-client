
import { AiFillStar } from "react-icons/ai";
import img1 from "../../../assets/images/products/1.png"
import img2 from "../../../assets/images/products/2.png"
import img3 from "../../../assets/images/products/3.png"
import img4 from "../../../assets/images/products/4.png"
import img5 from "../../../assets/images/products/5.png"
import img6 from "../../../assets/images/products/6.png"

const Products = () => {

    return (

        <div>
            <div className="space-y-5 text-center mt-24 mb-10">
                <h2 className="text-xl text-[#FF3811] font-bold">Popular Products</h2>
                <h1 className="text-4xl font-bold">Browse Our Products</h1>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7  justify-center">
                {/* images-1 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="images" className="rounded-xl" />
                    </figure>
                    <div className=" card-body items-center text-center">

                        <p className="flex text-lg text-[#FF912C]"><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></p>

                        <h2 className="card-title font-bold text-2xl ">Car Break Parts</h2>
                        <p className="text-xl font-bold text-[#FF3811]">$20.00</p>

                    </div>
                </div>
                {/* images-2 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="images" className="rounded-xl" />
                    </figure>
                    <div className=" card-body items-center text-center">

                        <p className="flex text-lg text-[#FF912C]"><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></p>

                        <h2 className="card-title font-bold text-2xl ">Car Buffer</h2>
                        <p className="text-xl font-bold text-[#FF3811]">$20.00</p>

                    </div>
                </div>
                {/* images-3 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="images" className="rounded-xl" />
                    </figure>
                    <div className=" card-body items-center text-center">

                        <p className="flex text-lg text-[#FF912C]"><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></p>

                        <h2 className="card-title font-bold text-2xl ">Car Air Filter</h2>
                        <p className="text-xl font-bold text-[#FF3811]">$20.00</p>

                    </div>
                </div>
                {/* images-4 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="images" className="rounded-xl" />
                    </figure>
                    <div className=" card-body items-center text-center">

                        <p className="flex text-lg text-[#FF912C]"><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></p>

                        <h2 className="card-title font-bold text-2xl ">krank-premium-n50zl</h2>
                        <p className="text-xl font-bold text-[#FF3811]">$20.00</p>

                    </div>
                </div>
                {/* images-5 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img5} alt="images" className="rounded-xl" />
                    </figure>
                    <div className=" card-body items-center text-center">

                        <p className="flex text-lg text-[#FF912C]"><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></p>

                        <h2 className="card-title font-bold text-2xl ">Tubeless Car Tyre</h2>
                        <p className="text-xl font-bold text-[#FF3811]">$20.00</p>

                    </div>
                </div>
                {/* images-6 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img6} alt="images" className="rounded-xl" />
                    </figure>
                    <div className=" card-body items-center text-center">

                        <p className="flex text-lg text-[#FF912C]"><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></p>

                        <h2 className="card-title font-bold text-2xl ">Car Engine Plug</h2>
                        <p className="text-xl font-bold text-[#FF3811]">$20.00</p>

                    </div>
                </div>

            </div>
        </div>


    );
};

export default Products;