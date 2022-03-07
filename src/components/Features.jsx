import box1 from '../images/ft-1.png'
import box2 from '../images/ft-2.png'
import box3 from '../images/ft-3.png'
import box4 from '../images/ft-4.png'
import box5 from '../images/ft-5.png'
import box6 from '../images/ft-6.png'
import box7 from '../images/ft-7.png'
import box8 from '../images/ft-8.png'

const Features = () => {

    const Box = ({ imgSrc, header }) => {
        return (
            <div className="box-container grid place-items-center mb-6">
                <img src={imgSrc} alt='' className="w-1/2" />
                <h3 className=" font-semibold">{header}</h3>
            </div>
        );
    }

    const boxData = [
        {
            img: box1,
            heading: 'Responsive Themes'
        },
        {
            img: box2,
            heading: 'Responsive Themes'
        },
        {
            img: box3,
            heading: 'Responsive Themes'
        },
        {
            img: box4,
            heading: 'Responsive Themes'
        },
        {
            img: box5,
            heading: 'Responsive Themes'
        },
        {
            img: box6,
            heading: 'Responsive Themes'
        },
        {
            img: box7,
            heading: 'Responsive Themes'
        },
        {
            img: box8,
            heading: 'Responsive Themes'
        }

    ];



    return (
        <section className="features-section py-16  bg-gradient-to-b from-[#d2d0ff]">
            <div className="wrapper">
                <div className="feature-heading text-center">
                    <p className=" uppercase text-orange-500 mb-4">FEATURES</p>
                    <h2 className=" text-2xl font-bold">What You Get</h2>
                </div>
                <div className="feature-box-container grid grid-cols-2 md:grid-cols-4 lg:w-3/4 mx-auto gap-3 md:py-16">
                    {
                        boxData.map((item, index) => (
                            <Box key={index} imgSrc={item.img} header={item.heading} />
                        ))
                    }

                </div>
                <div className="btn text-center my-4">
                    <a href=" " className='py-3 px-16 mt-4 inline-block bg-blue-700 text-white rounded-2xl shadow-2xl' >Get Started</a>
                </div>

            </div>


        </section>
    );
}

export default Features;