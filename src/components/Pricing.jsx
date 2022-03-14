

const Pricing = () => {
    return (
        <section className="pricing">
            <div className="wrapper px-2 py-24">
                <div className="price-content text-center md:w-3/4 mx-auto pb-10">
                    <p className=" uppercase text-orange-500 mb-4">PRICING</p>
                    <h2 className=" text-2xl font-bold">Choose A Plan That Works For You</h2>
                    <p className="my-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in hic non nesciunt vero doloribus enim at commodi beatae laudantium.</p>

                </div>
                <div className="pricing-container grid gap-10 grid-cols-1 md:grid-cols-3 px-6 lg:w-3/4 mx-auto ">
                    <div className="price-box text-center py-8 rounded-xl shadow-2xl">
                        <p className="mb-8">single Site</p>
                        <div className="price mb-10 flex justify-center">
                            <span className=" text-slate-400 ">$</span>
                            <span className=" font-extrabold text-6xl text-orange-500">35</span>
                            <span className="text-slate-400 self-end">/mon</span>
                        </div>
                        <div className="offers">
                            <ul>
                                <li className="py-2"> Basic Features </li>
                                <li className="py-2"> Basic SEO Features </li>
                                <li className="py-2"> Subscribers Email </li>
                                <li className="py-2"> Free Hosting option </li>
                                <li className="py-2"> Limited Portal Access. </li>

                            </ul>
                        </div>
                    </div>
                    <div className="price-box text-center py-8 rounded-xl shadow-2xl md:scale-110">
                        <p className="mb-8">Single Site</p>
                        <div className="price mb-10 flex justify-center">
                            <span className=" text-slate-400 ">$</span>
                            <span className=" font-extrabold text-6xl text-blue-700">85</span>
                            <span className="text-slate-400 self-end">/mon</span>
                        </div>
                        <div className="offers">
                            <ul>
                                <li className="py-2"> Medium Features </li>
                                <li className="py-2"> Medium SEO Features </li>
                                <li className="py-2"> Subscribers Email </li>
                                <li className="py-2"> Free Hosting option </li>
                                <li className="py-2"> Limited Portal Access. </li>

                            </ul>
                        </div>
                    </div>
                    <div className="price-box text-center py-8 rounded-xl shadow-2xl">
                        <p className="mb-8">single Site</p>
                        <div className="price mb-10 flex justify-center">
                            <span className=" text-slate-400 ">$</span>
                            <span className=" font-extrabold text-6xl text-orange-500">35</span>
                            <span className="text-slate-400 self-end">/mon</span>
                        </div>
                        <div className="offers">
                            <ul>
                                <li className="py-2"> Advanced Features </li>
                                <li className="py-2"> Advanced SEO Features </li>
                                <li className="py-2"> Subscribers Email </li>
                                <li className="py-2"> Free Hosting option </li>
                                <li className="py-2"> Limited Portal Access. </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>


        </section>
    );
}


export default Pricing;