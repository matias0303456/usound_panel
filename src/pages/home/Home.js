import LoginForm from "./components/LoginForm";
import '../../styles/home/home.css'
import Nav from "../../app_components/Nav";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useTranslation } from "react-i18next";

export default function Home() {

    const {
        user
    } = useContext(UserContext)

    const [t] = useTranslation('global')

    return (
        <div className="mainContent">
            {user !== null &&
                <Nav />
            }
            <section>
                {
                    user === null ?
                        <>
                            <h3 className="loginMessage">{t('home.loginMessage')}</h3>
                            <LoginForm />
                        </> :
                        <h3 id="welcomeSection">
                            {t('home.welcomeMessage')}{user.user.username}
                        </h3>
                }
            </section>
        </div>
    )
};
