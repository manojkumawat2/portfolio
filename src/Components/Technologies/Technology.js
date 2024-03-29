
function Technology(props) {
    return (
        <div className="technology shadow-sm rounded border-top border-primary">
            <img className="technology-img" src={require(`./${props.img_name}`)} alt={props.text} loading="lazy"/>
            <p className="text-center text-primary fw-bold fs-5 text">{props.text}</p>
        </div>
    );
}

export default Technology;