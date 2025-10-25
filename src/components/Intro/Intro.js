import "./Intro.css";
import { Link } from 'react-scroll';
import bg from '../../assets/image.jpg';

export default function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <h1 className="introTitle">
          Hello, I'm <span>Saad Ahmad</span>
        </h1>
        <p className="introText">
          A passionate and dedicated IT student with a strong foundation in programming, web development, and problem-solving. 
          Eager to apply my skills and knowledge in real-world projects while continuously learning and growing in the tech industry.
        </p>

        <Link to="projects" smooth={true} duration={600} offset={-64}>
          <button className="intro-button" aria-label="View My Work">
            View My Work
          </button>
        </Link>
      </div>

      <div className="introImage">
        <img src={bg} alt="Saad Ahmad" />
      </div>
    </section>
  )
}
