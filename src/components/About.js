import Link from 'react-router-dom'

const About = () => {
    return (
      <div>
          <p>Version 1.0</p>
          {/*<a href="/">Home</a>*/}
          {/*prevents page reload*/}
          <Link to="/">Home</Link>
      </div>
    );
}

export default About