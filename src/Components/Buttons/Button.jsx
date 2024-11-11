import './Button.css'

const Button = (props) => {
    const {homeBtn, children} = props
    return (
        <button className={homeBtn}>{children}</button>
    )
}

export default Button
