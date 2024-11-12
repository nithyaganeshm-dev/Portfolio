import './Header.css'

const Header = (props) => {
    const {title, desc} = props
    return (
        <div className='bg-header'>
            <h3 className='header-title'>{title}</h3>
            <h1 className='header-description'>{desc}</h1>
        </div>
    )
}

export default Header
