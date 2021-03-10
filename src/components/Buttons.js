import PropTypes from 'prop-types'

const Button = ({color, text, triggerAddForm}) => {
    return (
        <button className='btn' style={{backgroundColor: color}}
                onClick={triggerAddForm}>{text}</button>
    );
}

Button.defaultProps = {
    backgroundColor: "steelblue"
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
}

export default Button;