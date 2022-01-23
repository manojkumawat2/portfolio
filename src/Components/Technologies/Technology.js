import ContentLoader from 'react-content-loader';


function Technology(props) {
    const TechCard = () => (
        <div className="technology shadow rounded border-top border-primary">
            <img className="technology-img" src={require(`./${props.img_name}`)} alt={props.text} />
            <p className="text-center text-primary fw-bold fs-5 text">{props.text}</p>
        </div>
    );

    const Preloader = () => (
        <div className="technology">
            <ContentLoader>
                <rect x="0" y="5" rx="5" ry="5" width="150" height="150" />
            </ContentLoader>
        </div>
    );

    if(!props.img_name || !props.text) {
        return (
            <Preloader />
        )
    } else {
        return (
             <TechCard />
        );
    }
    
}

export default Technology;