function Card({ feature }) {
    return (
        <div className="card">
            <img className="card-img" src={feature.image} alt='img' />
            <h3 className="card-title" >{feature.title}</h3>
            <p className="card-text" >{feature.text}</p>
        </div>
    );
}

export default Card;