import '../../../styles/home/loginForm.css'

export default function LoginForm() {
    return (
        <form>
            <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
            </div>
            <div className='form-group'>
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="passwordl" />
            </div>
            <div className='form-group'>
                <input type="submit" value="Iniciar sesión" />
            </div>
        </form>
    )
};
