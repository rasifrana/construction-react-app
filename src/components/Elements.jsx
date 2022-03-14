import elementImg from '../images/elements.png';

const Elements = () => {
    return (

        <section id='elements' className="element-section gradient-bg mt-6">
            <div className="element-container wrapper grid grid-cols-1 md:grid-cols-2">
                <div className="element-img-container grid place-items-center">
                    <img src={elementImg} alt="" className=" object-cover w-2/4 md:w-3/4" />
                </div>
                <div className="element-content-container p-4 text-center md:text-left">
                    <p className=" uppercase text-orange-500 mb-4">ELEMENTS</p>
                    <h2 className=" text-2xl font-bold mb-3">Everything You Need With Just One Tool</h2>
                    <p>Your beautiful website is incomplete without the right copy. Our in-house copywriters will craft quality copy that will engage visitors and propel them into action. In fact, content is an important part of your online strategy. Whether you want to build links or improve search engine rankings, our content writers will create high quality content that will enlighten, engage and convert.</p>
                </div>
            </div>
        </section>

    );
}

export default Elements;