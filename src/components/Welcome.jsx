import img from '../images/bg.jpeg';

const Welcome = () => {

    // const containerStyle = {
    //     backgroundImage:
    //         "{bg}",
    // };

    return (
        <section className="w-full bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${img})`, height: '800px' }}>
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center mt-36">
                <div className="section-content flex-1 px-5">
                    <p className=' tracking-wider text-xl '>ARCHITECTURE STUDIO</p>
                    <h1 className=' font-bold mt-3 ' style={{ fontSize: '56px' }}>We create architecture, landscapes, interiors</h1>
                </div>
                <div className=" flex-1 flex justify-center items-center">
                    <div className="image-container shadow-2xl w-96 h-96 p-4 bg-white rounded-full">
                        <img className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row mt-16'>
                <div className='flex-1'></div>
                <div className='flex-1 p-8'>
                    <p className='text-white text-lf w-3/4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, dolore.</p>
                    <div>
                        <a className='text-white mt-6 inline-block px-8 py-4 bg-pink-800 font-bold tracking-wide rounded-tr-xl rounded-bl-xl' href="">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Welcome;