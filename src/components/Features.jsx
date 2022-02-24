

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
            img: 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/11/software-25.png',
            heading: 'Responsive Themes'
        },
        {
            img: 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/11/software-25.png',
            heading: 'Responsive Themes'
        },
        {
            img: 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/11/software-25.png',
            heading: 'Responsive Themes'
        },
        {
            img: 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/11/software-25.png',
            heading: 'Responsive Themes'
        },
        {
            img: 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/11/software-25.png',
            heading: 'Responsive Themes'
        },
        {
            img: 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/11/software-25.png',
            heading: 'Responsive Themes'
        },
        {
            img: 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/11/software-25.png',
            heading: 'Responsive Themes'
        },
        {
            img: 'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/11/software-25.png',
            heading: 'Responsive Themes'
        }

    ];



    return (
        <section className="features-section py-12 wrapper">
            <div className="feature-heading text-center">
                <p className=" uppercase text-orange-500 mb-4">PRODUCTS</p>
                <h2 className=" text-2xl font-bold">What You Get</h2>
            </div>
            <div className="feature-box-container grid grid-cols-2 md:grid-cols-4 lg:w-3/4 mx-auto gap-3 py-16">
                {
                    boxData.map((item) => (
                        <Box imgSrc={item.img} header={item.heading} />
                    ))
                }

            </div>
            <div className="btn text-center my-4">
                <a href=" " className='py-3 px-16 mt-4 inline-block bg-blue-700 text-white rounded-2xl shadow-2xl' >Get Started</a>
            </div>

        </section>
    );
}

export default Features;