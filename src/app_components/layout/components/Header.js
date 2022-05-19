export default function Header() {

    return (
        <header>
            <h1>Logo</h1>
            <nav>
                <ul>
                    <li onClick={() => window.location.href = "/"}>
                        Inicio
                    </li>
                    <li onClick={() => window.location.href = "/patients"}>
                        Pacientes
                    </li>
                </ul>
            </nav>
        </header>
    )
}