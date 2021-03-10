// function Header(props) {
//     return (
//         <header>
//             <h1>app header {props.title}</h1>
//         </header>
//     );
// }

import PropTypes from 'prop-types'
import Button from './Buttons'

const Header = ({title}) => {
    return (
        <header>
            {/* inline props */}
            <h1>app header {title}</h1>
            {/* style tag uses two brackets. uses camel case instead of dash */}
            <h1 style={{color: "green", backgroundColor: "skyblue"}}>app header2 {title}</h1>
            <h1 style={headingStyle}>app header3 with variable style {title}</h1>
            <Button color='green' text='click'/>
        </header>
    );
}

// default props are used when no value is passed
Header.defaultProps = {
    title: "page0"
}

// declare prop types. tho will not stop from rendering
Header.propTypes = {
    title: PropTypes.string.isRequired
}

const headingStyle = {
    color: "green", 
    backgroundColor: "black"
}

export default Header;