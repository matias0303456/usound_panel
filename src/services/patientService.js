import { urls } from "../utilities/config"

const patientService = {

    getPatients: async token => {
        try {
            const data = await fetch(urls.getPatients, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            })
            return data.json()
        } catch (err) {
            console.log(err)
        }
    }

}

export default patientService