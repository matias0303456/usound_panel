import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import authService from '../services/authService'
import '../styles/nav.css'

export default function Nav() {

    const {
        user,
        setUser
    } = useContext(UserContext)

    const navigate = useNavigate()

    const [t] = useTranslation('global')

    return (
        <nav>
            <ul>
                <li onClick={() => navigate('/')}>
                    {t('nav.home')}
                </li>
                <li onClick={() => navigate('/patients')}>
                    {t('nav.patients')}
                </li>
                <li onClick={() => {
                    authService.logout(user.token)
                    setUser(null)
                    sessionStorage.clear()
                    navigate('/')
                }}>
                    {t('nav.logout')}
                </li>
            </ul>
        </nav>
    )
};
