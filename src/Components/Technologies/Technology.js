function Technology(props) {
    
    return (
        <div className="technology shadow rounded border-top border-primary">
            <img className="technology-img" src={require(`./${props.img_name}`)} />
            <p className="text-center text-primary fw-bold fs-5 text">{props.text}</p>
        </div>
    );
}

export default Technology;