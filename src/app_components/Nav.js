import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import authService from '../services/authService'
import '../styles/nav.css'

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
                    navigate('/')
                }}>
                    Cerrar sesión
                </li>
            </ul>
        </nav>
    )
};
