export default function Nav() {
    return (
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
    )
};
