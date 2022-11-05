import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
    const projects_data = [
        {
            'title': 'MyClass - Online Class and Lecture Manager',
            'img_name': 'project1.png',
            'desc': "<ul><li>Created a Platform where the users can create and join classes.</li>" +
            "<li>Faculty can schedule and manage the lectures.</li>" +
            "<li>Faculty can manage the attendance of students.</li>" +
            "</ul>",
            'technologies' : ['JavaScript', 'Node.js', 'Express.js', 'MySQL', 'EJS', 'CSS'],
            'links': {
                'github': 'https://github.com/manojkumawat2/myclass/',
                'live_link': 'https://myclass.murl.tech/'
            }
        },
        {
            'title': 'URL Shortening Web Application',
            'img_name': 'project2.png',
            'desc': "<ul><li>Created a web application to shorten the urls.</li>" +
            "</ul>",
            'technologies' : ['Python', 'JavaScript', 'Django', 'MySQL', 'HTML', 'CSS'],
            'links': {
                'github': '',
                'live_link': ''
            }
        },
        {
            'title': 'Seller Management System',
            'img_name': 'project3.png',
            'desc': "Created a web application to manage the sellers and this application contains features like registration, <br/> approval,re-apply after the rejection of the application",
            'technologies' : ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
            'links': {
                'github': '',
                'live_link': ''
            }
        }

    ];

    const projects_jsx = projects_data.map((project, index) => {
        return <ProjectCard 
        key={index}
        img_name={project.img_name} 
        title={project.title}
        desc={project.desc}
        technologies={project.technologies}
        links={project.links}
        />
    })

    return (
        <div className="project-container container">
            <h2 className="text-center text-primary fw-bold">Projects</h2>
            <div className="projects">
                {projects_jsx}
            </div>
        </div>
    );
}

export default Projects;