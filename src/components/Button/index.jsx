const Button = ({ btnicon, btntext }) => {
    return (
        <button className="button">
            {btnicon && <img src={btnicon} alt="Ícone" />}
            {btntext}
        </button>
    );
}

export default Button;
