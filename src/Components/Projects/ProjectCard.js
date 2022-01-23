function ProjectCard(props) {
    const technologies = props.technologies.map(technology => {
        return (
        <span class="badge rounded-pill bg-light text-dark border border-primary m-1">
            {technology}
        </span>
        );
    })
    return (
        <div className="project shadow rounded border-top border-primary border-2 mt-5">
            <div className="project-img">
                <img src={require(`./${props.img_name}`)} alt={props.title} />
            </div>
            <div className="project-content  p-2">
                <a href="?#" className="text-primary h3 project-title">
                    {props.title}
                </a>
                <p className="project-desc mt-2" dangerouslySetInnerHTML={{__html:props.desc}} />
                <div className="tech-labels">
                    {technologies}
                </div>
                <div className="project-links mt-2">
                    <a href={props.links.github} className="project-link" target="_blank" rel="noreferrer">
                        <i class="bi bi-github"></i>
                    </a>
                    <a href={props.links.live_link} className="project-link" target="_blank" rel="noreferrer">
                        <i class="bi bi-globe"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;