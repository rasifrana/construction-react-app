import Carousel from 'react-elastic-carousel';
// import { items } from '../components/data'

const CarouselComp = () => {


    const items = [
        { id: 1, title: 'I personally love our new website, its fluid, modern and clean lines are a testament to Torc’s ability to realise a clients vision.we did not want another site based on WordPress due to its limitations. Torc successfully built and designed our website despite significant challenges to overcome...                        ' },
        { id: 2, title: 'Finding the right website developer is not easy.we were looking for a company who would give us ideas and suggestions on how to improve our online business! Torc Web Design offered the best all round response to what we were looking for!.features to add, and kept in mind how important...' },
        { id: 3, title: 'After discussing our project requirements with various companies, we decided to work with Torc Web Design to carry out a full bespoke redesign for our website, and I have to say it was a positive experience throughout. Torc are a very reliable, highly efficient and creative company that have transformed my ideas into a seamless site.' }
    ];

    return (
        <div className="wrapper py-20 relative mb-20" id='contact'>
            <div className='carousels w-full md:w-3/4'>
                <Carousel pagination={false} enableAutoPlay autoPlaySpeed={3500}
                    transitionMs={700}>
                    {items.map(item => <div className='carousel rounded-lg carousel-bg flex justify-center items-center text-white font-semi-bold md:text-2xl shadow-2xl' key={item.id}>


                        <p className='pl-5 md:px-20'>{item.title}</p>

                    </div>)}
                </Carousel>
            </div>
            <div className="testimonial hidden lg:flex justify-center  px-5 items-center bg-white rounded-xl shadow-2xl w-1/2 absolute right-5 -bottom-10">
                {/* <img src='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/11/software-23.png' alt="" className=" object-cover w-3/4" /> */}
                <div className="testimonial-img w-1/5">
                    <img className=' rounded-full' src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/03/portrait-square-04.jpg" alt="" />

                </div>
                <div className="test-content ml-6">
                    <p className=" uppercase text-orange-500 mb-4">“I GOT MY SITE UP AND RUNNING IN LESS THAN A DAY!”</p>
                    <p className="">Choose A Plan That Works For You</p>
                </div>

            </div>

        </div>


    );
}

export default CarouselComp;