import { useContext } from "react"
import Nav from "../../app_components/Nav"
import UserContext from "../../contexts/UserContext"

export default function PatientsList() {

    const { user } = useContext(UserContext)

    console.log(user)

    return (
        <div className="mainContent">
            {user !== null &&
                <Nav />
            }
            <section>
                <h3>Lista de pacientes</h3>
            </section>
        </div>
    )
};
