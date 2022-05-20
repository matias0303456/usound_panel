import { urls } from "../utilities/config"

const authService = {

    login: async user => {
        try {
            const data = await fetch(
                urls.login,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                }
            )
            return data.json()
        } catch (err) {
            console.log(err)
        }
    }

}

export default authService