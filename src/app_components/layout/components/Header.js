import '../../../styles/layout/header.css'
import Logo from '../../assets/header-logo.png'

export default function Header() {

    return (
        <header>
            <div id="logo">
                <img src={Logo} />
            </div>
            <h1>Panel de usuario</h1>
        </header>
    )
}