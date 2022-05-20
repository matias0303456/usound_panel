import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../../context/userContext'
import authService from '../../../services/authService'
import '../../../styles/home/nav.css'

export default function Nav() {

    const navigate = useNavigate()

    const {
        user,
        setUser
    } = useContext(UserContext)

    return (
        <nav>
            <ul>
                <li onClick={() => navigate('/')}>
                    Inicio
                </li>
                <li onClick={() => navigate('/patients')}>
                    Pacientes
                </li>
                <li onClick={() => {
                    authService.logout(user.token)
                    setUser(null)
                    sessionStorage.clear()
                }}>
                    Cerrar sesión
                </li>
            </ul>
        </nav>
    )
};
