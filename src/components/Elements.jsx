

const Elements = () => {
    return (

        <section className="element-section gradient-bg mt-6">
            <div className="element-container wrapper grid grid-cols-1 md:grid-cols-2">
                <div className="element-img-container grid place-items-center">
                    <img src='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/11/software-23.png' alt="" className=" object-cover w-2/4 md:w-3/4" />
                </div>
                <div className="element-content-container p-4 text-center md:text-left">
                    <p className=" uppercase text-orange-500 mb-4">PRODUCTS</p>
                    <h2 className=" text-2xl font-bold">We Build Tools For the Web</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, facere quibusdam qui obcaecati, atque quia odit, nihil error nemo nam doloremque deleniti labore quisquam iste illo totam dolor vel aperiam.</p>
                </div>
            </div>
        </section>

    );
}

export default Elements;