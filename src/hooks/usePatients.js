import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import patientService from "../services/patientService";

export default function usePatients() {

    const [patients, setPatients] = useState([])

    const { user } = useContext(UserContext)

    useEffect(() => {
        patientService.getPatients(user.token).then(data => setPatients(data))
    }, [])

    return patients
};
