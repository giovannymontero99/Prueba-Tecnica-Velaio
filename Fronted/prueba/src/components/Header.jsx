import './Header.css'

const Header = (props) => {

    return (
        <header className='Header'>
            <div className='header-logo'>
                <h1>PortalNoticias</h1>
                <p>El mejor lugar para estar actualizado 📰</p>
            </div>
            <div className='header-text'>
                { props.login ? <div>Para acceder al mejor contenido debes estar registrado, si aún no lo has hecho, ¿Que esperas? es muy facil !</div> : <div>Ingresa un correo y contraseña</div> }
            </div>
        </header>
    )
}
export default Header;