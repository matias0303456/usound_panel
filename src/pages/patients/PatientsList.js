import { useContext } from "react"
import Nav from "../../app_components/Nav"
import UserContext from "../../contexts/UserContext"
import usePatients from "../../hooks/usePatients"
import PatientsTable from "./components/PatientsTable"

export default function PatientsList() {

    const { user } = useContext(UserContext)

    const patients = usePatients()

    return (
        <div className="mainContent">
            {user !== null &&
                <Nav />
            }
            <section>
                <PatientsTable
                    patients={patients}
                />
            </section>
        </div>
    )
};
