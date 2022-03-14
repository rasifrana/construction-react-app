import img from '../images/bg.png';
import { motion } from 'framer-motion';

const Welcome = () => {

    // const containerStyle = {
    //     backgroundImage:
    //         "{bg}",
    // };

    return (
        <section className="w-full bg-cover bg-center" style={{ backgroundImage: `url(${img})`, height: '600px' }} id='home'>
            <div className="layer px-2 h-full bg-gradient-to-b  from-blue-800">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 6 }} className="lg:w-3/4 mx-auto h-full flex justify-center items-center flex-col text-white text-center py-4 md:py-16 sm:pt-40 md:pt-60">


                    <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className=' font-bold mt-3 text-4xl sm:text-5xl ' >Products that Empower the Businesses with Latest Technology</motion.h1>
                    <p className='py-8  lg:w-1/2 mx-auto'>We specialise in web design and online marketing services. Having built more than 1200 websites for companies of all sizes across the Europe.</p>

                    <a href="#pricing" className='py-3 px-16 mt-4 inline-block bg-blue-700 rounded-xl shadow-2xl' >Get Prices</a>

                    {/* <div className=" flex-1 flex justify-center items-center">
                    <div className="image-container shadow-2xl w-96 h-96 p-4 bg-white rounded-full">
                        <img className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="" />
                    </div>
                </div> */}
                </motion.div>
                {/* <div className='flex flex-col md:flex-row mt-16'>
                    <div className='flex-1'></div>
                    <div className='flex-1 p-8'>
                        <p className='text-white text-lf w-3/4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, dolore.</p>
                        <div>
                            <a className='text-white mt-6 inline-block px-8 py-4 bg-pink-800 font-bold tracking-wide rounded-tr-xl rounded-bl-xl' href="">Learn More</a>
                        </div>
                    </div>
                </div> */}
            </div>

        </section>
    );
}

export default Welcome;