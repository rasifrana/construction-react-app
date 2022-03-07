import tools1 from '../images/tools-1.png'
import tools2 from '../images/tools-2.png'
import tools3 from '../images/tools-3.png'
import tools4 from '../images/tools-4.png'

import Card from "./Card";

const Tools = () => {

    const cardData = [
        {
            id: 1,
            img: tools1,
            heading: 'website Themes',
            para: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, quam!'
        },
        {
            id: 2,
            img: tools2,
            heading: 'website Themes',
            para: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, quam!'
        },
        {
            id: 3,
            img: tools3,
            heading: 'website Themes',
            para: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, quam!'
        },
        {
            id: 4,
            img: tools4,
            heading: 'website Themes',
            para: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, quam!'
        }

    ]



    return (
        <section className="md:py-40 py-24 wrapper p-4">
            <div className="text-center my-4 pb-10">
                <p className=" uppercase text-orange-500 mb-4">PRODUCTS</p>
                <h2 className=" text-2xl font-bold">We Build Tools For the Web</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {cardData.map((item) => (
                    <Card key={item.id} imgSrc={item.img} heading={item.heading} para={item.para} />
                ))};
            </div>
        </section>
    );
}

export default Tools;