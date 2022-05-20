import '../../../styles/patients/patients_table.css'

export default function PatientsTable({
    patients
}) {

    if (patients.length === 0) {
        return <h3>Cargando pacientes...</h3>
    }

    return (
        <div id="tableParent">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>País</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(p => {
                        return (
                            <tr>
                                <td>{p.sweeper_name}</td>
                                <td>{p.hunter_name}</td>
                                <td>{p.amount}</td>
                                <td>{p.closer_name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};
