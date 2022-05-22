import { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import authService from '../services/authService'
import '../styles/nav.css'

export default function Nav() {

    const {
        user,
        setUser
    } = useContext(UserContext)

    const navigate = useNavigate()
    const location = useLocation()

    const [t] = useTranslation('global')

    useEffect(() => {
        let elements = document.getElementsByTagName('li')
        for (let i = 0; i < elements.length; i++) {
            let el = elements[i]
            if (el.id === location.pathname) {
                el.classList.add('currentPage')
            } else {
                el.classList.remove('currentPage')
            }
        }
    }, [])

    return (
        <nav>
            <ul>
                <li
                    id='/'
                    onClick={() => navigate('/')}>
                    {t('nav.home')}
                </li>
                <li
                    id='/patients'
                    onClick={() => navigate('/patients')}>
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
