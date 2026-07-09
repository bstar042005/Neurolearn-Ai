import "../..//styles/Button.css";

function Button({

    text,

    onClick,

    variant = "primary",

    type = "button",

    disabled = false,

}) {

    return (

        <button

            type={type}

            className={`btn ${variant}`}

            onClick={onClick}

            disabled={disabled}

        >

            {text}

        </button>

    );

}

export default Button;