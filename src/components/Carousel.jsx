import Carousel from 'react-elastic-carousel';
// import { items } from '../components/data'

const CarouselComp = () => {


    const items = [
        { id: 1, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit' },
        { id: 2, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit' },
        { id: 3, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit' },
        { id: 4, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit' },
        { id: 5, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit' }
    ];

    return (
        <div className="wrapper py-20 relative mb-20">
            <div className='carousels w-full md:w-3/4'>
                <Carousel pagination={false} enableAutoPlay autoPlaySpeed={3500}
                    transitionMs={700}>
                    {items.map(item => <div className='carousel rounded-lg carousel-bg flex justify-center items-center text-white font-semi-bold text-2xl shadow-2xl' key={item.id}>


                        <p className='pl-5 md:px-20'>{item.title}</p>

                    </div>)}
                </Carousel>
            </div>
            <div className="testimonial hidden lg:block bg-white rounded-xl shadow-2xl w-1/2 absolute right-5 -bottom-10">
                {/* <img src='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/11/software-23.png' alt="" className=" object-cover w-3/4" /> */}

            </div>

        </div>


    );
}

export default CarouselComp;