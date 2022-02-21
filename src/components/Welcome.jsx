import img from '../images/bg.jpeg';

const Welcome = () => {

    // const containerStyle = {
    //     backgroundImage:
    //         "{bg}",
    // };

    return (
        <section className="w-full bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${img})`, height: '800px' }}>
            <div className="lg:container mx-auto flex flex-col md:flex-row justify-center items-center mt-36">
                <div className="section-content flex-1">
                    <p className=' tracking-wider text-xl '>ARCHITECTURE STUDIO</p>
                    <h1 className=' font-bold mt-3 ' style={{ fontSize: '56px' }}>We create architecture, landscapes, interiors</h1>
                </div>
                <div className="section-img-container flex-1 flex justify-center items-center">
                    <div className="image-container w-96 h-96 p-4 bg-white rounded-full">
                        <img className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Welcome;