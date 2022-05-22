import { useTranslation } from 'react-i18next'
import '../../../styles/patients/patients_table.css'

export default function PatientsTable({
    patients
}) {

    const [t] = useTranslation('global')

    if (patients.length === 0) {
        return <h3>{t('patientsTable.loading')}</h3>
    }

    return (
        <div id="tableParent">
            <table>
                <thead>
                    <tr>
                        <th>{t('patientsTable.firstName')}</th>
                        <th>{t('patientsTable.lastName')}</th>
                        <th>{t('patientsTable.age')}</th>
                        <th>{t('patientsTable.country')}</th>
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
