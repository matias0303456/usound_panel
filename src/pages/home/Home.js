import LoginForm from "./components/LoginForm";
import '../../styles/home/home.css'
import Nav from "../../app_components/layout/components/Nav";
import { useContext } from "react";
import UserContext from "../../context/userContext";

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
                            <h3>Inicie sesión para entrar al sistema</h3>
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
