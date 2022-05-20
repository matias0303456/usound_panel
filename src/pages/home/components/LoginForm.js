import { useContext, useState } from 'react'
import UserContext from '../../../contexts/UserContext'
import authService from '../../../services/authService'
import '../../../styles/home/loginForm.css'

export default function LoginForm() {

    const {
        setUser
    } = useContext(UserContext)

    const [auth, setAuth] = useState({})

    const handleChange = e => {
        setAuth({
            ...auth,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        authService.login(auth)
            .then(data => {
                if (data.error) {
                    document.getElementById('loginError').classList.remove('d-none')
                    return
                }
                document.getElementById('loginError').classList.add('d-none')
                document.getElementById('loginForm').reset()
                setUser(data)
                sessionStorage.setItem('user', JSON.stringify(data))
            })
    }

    return (
        <form id='loginForm' onChange={e => handleChange(e)} onSubmit={e => handleSubmit(e)}>
            <small id='loginError' className='d-none'>
                Nombre de usuario o contraseña incorrectos.
            </small>
            <div className='form-group'>
                <label htmlFor="text">Usuario</label>
                <input type="text" name="username" />
            </div>
            <div className='form-group'>
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" />
            </div>
            <div className='form-group'>
                <input type="submit" value="Iniciar sesión" />
            </div>
        </form>
    )
};
