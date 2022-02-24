

const Tools = () => {

    const Card = ({ imgSrc, heading, para }) => {
        <div className="card">
            <div className="img-container">
                <img src={imgSrc} alt="" />
            </div>
            <div className="card-content">
                <h3>{heading}</h3>
                <p>{para}</p>
            </div>
        </div>
    }



    return (
        <section className="py-40">
            <div className="grid grid-cols-2 md:grid-cols-4">
                <div className="bg-slate-300">a</div>
                <div className="bg-slate-300">b</div>
                <div className="bg-slate-300">c</div>
                <div className="bg-slate-300">d</div>
            </div>
        </section>
    );
}

export default Tools;