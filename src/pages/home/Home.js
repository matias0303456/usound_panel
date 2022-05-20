import LoginForm from "./components/LoginForm";
import '../../styles/home/home.css'
import Nav from "../../app_components/Nav";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Home() {

    const {
        user
    } = useContext(UserContext)

    return (
        <div className="mainContent">
            {user !== null &&
                <Nav />
            }
            <section>
                {
                    user === null ?
                        <>
                            <h3>Inicie sesión para ingresar al sistema</h3>
                            <LoginForm />
                        </> :
                        <h3 id="welcomeSection">
                            Bienvenido / a, {user.user.username}
                        </h3>
                }
            </section>
        </div>
    )
};
