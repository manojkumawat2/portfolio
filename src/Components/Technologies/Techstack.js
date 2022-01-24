import './Techstack.css';
import Technology from './Technology';

function Techstack () {
    return (
        <div className="techstack-container container">
            <h2 className="text-center text-primary fw-bold">Technologies</h2>
            <div className="technologies">
                <Technology img_name='php.png' text = "PHP" />
                <Technology img_name='cpp.png' text = "C++" />
                <Technology img_name='javascript.png' text = "JavaScript" />
                <Technology img_name='codeigniter.png' text = "CodeIgniter" />
                <Technology img_name='nodejs.png' text = "Node.js" />
                <Technology img_name='react.png' text = "React.js" />
                <Technology img_name='jquery.png' text = "jQuery" />
                <Technology img_name='mysql.png' text = "MySQL" />
                <Technology img_name='git.png' text = "Github" />
            </div>
        </div>
    );
}

export default Techstack;