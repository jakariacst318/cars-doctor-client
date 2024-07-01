
import banner1 from "../../../assets/images/banner/1.jpg"
import banner2 from "../../../assets/images/banner/2.jpg"
import banner3 from "../../../assets/images/banner/3.jpg"
import banner4 from "../../../assets/images/banner/4.jpg"
import banner5 from "../../../assets/images/banner/5.jpg"
import banner6 from "../../../assets/images/banner/6.jpg"



const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[450px] rounded-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" />
                    {/* text */}
                    <div className="absolute flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                        <div className="text-white space-y-7 lg:pl-20  pl-10">
                            <h2 className="text-5xl  font-bold">Affordable <br /> Price For Car <br />Servicing</h2>
                            <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn text-white bg-[#FF3811] hover:bg-[#d83312] border-0 mr-5">Discover More</button>

                                <button className="btn btn-outline text-white border-white hover:bg-[#FF3811] hover:border-0 ">Latest Project</button>
                            </div>
                        </div>
                    </div>

                    {/* -slider- */}
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                        <a href="#slide6" className="btn btn-circle mr-5 hover:bg-[#FF3811] hover:text-white hover:border-0">❮</a>
                        <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-0">❯</a>
                    </div>

                </div>

                {/* ---------- */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    {/* text */}
                    <div className="absolute flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                        <div className="text-white space-y-7 lg:pl-20 pl-10">
                            <h2 className="text-5xl font-bold">Affordable <br /> Price For Car <br />Servicing</h2>
                            <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn text-white bg-[#FF3811] hover:bg-[#d83312] border-0 mr-5">Discover More</button>

                                <button className="btn btn-outline text-white border-white hover:bg-[#FF3811] hover:border-0 ">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    {/* -slider- */}
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5 hover:bg-[#FF3811] hover:text-white hover:border-0">❮</a>
                        <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-0">❯</a>
                    </div>
                </div>

                {/* ------------ */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    {/* text */}
                    <div className="absolute flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                        <div className="text-white space-y-7 lg:pl-20 pl-10">
                            <h2 className="text-5xl font-bold">Affordable <br /> Price For Car <br />Servicing</h2>
                            <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn text-white bg-[#FF3811] hover:bg-[#d83312] border-0 mr-5">Discover More</button>

                                <button className="btn btn-outline text-white border-white hover:bg-[#FF3811] hover:border-0 ">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    {/* -slider- */}
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5 hover:bg-[#FF3811] hover:text-white hover:border-0">❮</a>
                        <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-0">❯</a>
                    </div>
                </div>

                {/* -------- */}
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full" />
                    {/* text*/}
                    <div className="absolute flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  ">
                        <div className="text-white space-y-7 lg:pl-20 pl-10">
                            <h2 className="text-5xl font-bold">Affordable <br /> Price For Car <br />Servicing</h2>
                            <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn text-white bg-[#FF3811] hover:bg-[#d83312] border-0 mr-5">Discover More</button>

                                <button className="btn btn-outline text-white border-white hover:bg-[#FF3811] hover:border-0 ">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    {/* -slider- */}
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5 hover:bg-[#FF3811] hover:text-white hover:border-0">❮</a>
                        <a href="#slide5" className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-0">❯</a>
                    </div>
                </div>

                {/* ------------- */}
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={banner5} className="w-full" />
                    {/* text */}
                    <div className="absolute flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                        <div className="text-white space-y-7 lg:pl-20 pl-10">
                            <h2 className="text-5xl font-bold">Affordable <br /> Price For Car <br />Servicing</h2>
                            <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn text-white bg-[#FF3811] hover:bg-[#d83312] border-0 mr-5">Discover More</button>

                                <button className="btn btn-outline text-white border-white hover:bg-[#FF3811] hover:border-0 ">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    {/* -slider- */}
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5 hover:bg-[#FF3811] hover:text-white hover:border-0">❮</a>
                        <a href="#slide6" className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-0">❯</a>
                    </div>
                </div>

                {/* ------------ */}
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={banner6} className="w-full" />
                    {/* text */}
                    <div className="absolute flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  ">
                        <div className="text-white space-y-7 lg:pl-20 pl-10">
                            <h2 className="text-5xl font-bold">Affordable <br /> Price For Car <br />Servicing</h2>
                            <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn text-white bg-[#FF3811] hover:bg-[#d83312] border-0 mr-5">Discover More</button>

                                <button className="btn btn-outline text-white border-white hover:bg-[#FF3811] hover:border-0 ">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    {/* -slider- */}
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn btn-circle mr-5 hover:bg-[#FF3811] hover:text-white hover:border-0">❮</a>
                        <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-0">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;