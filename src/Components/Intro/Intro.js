import './Intro.css';
import IntroGIF from './intro.gif';

function Intro () {
    return (
        <div className="row intro">
            <div className="col-sm">
                <div className="intro-text-container">
                    <h5 className="intro-heading">Hey!</h5>
                    <p className="intro-text">
                        I'm <label className="intro-text-label text-primary">Manoj Kumawat,</label> <br />
                        a Software Developer.
                    </p>
                    <div className="social-icons">
                        <a href="/#" className="social-icon">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="/#" className="social-icon">
                            <i className="bi bi-github"></i>
                        </a>
                        <a href="/#" className="social-icon">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="/#" className="social-icon">
                            <i className="bi bi-twitter"></i>
                        </a>
                    </div>
                    <div className="intro-buttons mt-3">
                        <a href="?#" type="button" className="intro-resume-button btn btn-light">
                            <i className="bi bi-download"></i> Download CV
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-sm">
                <img className="intro-img" src={IntroGIF} alt="" />
            </div>
        </div>
    );
}

export default Intro;