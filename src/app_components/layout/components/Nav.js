import { useNavigate } from 'react-router-dom'
import '../../../styles/layout/nav.css'

export default function Nav() {

    const navigate = useNavigate()

    return (
        <nav>
            <ul>
                <li onClick={() => navigate('/')}>
                    Inicio
                </li>
                <li onClick={() => navigate('/patients')}>
                    Pacientes
                </li>
            </ul>
        </nav>
    )
};
