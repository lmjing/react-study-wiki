import React from "react";

class Button extends React.Component {
    render() {
        return <button className="btn">{this.props.buttonLabel}</button>
    }
}

Button.defaultProps = {
    buttonLabel: 'Submit'
}

export default Button
