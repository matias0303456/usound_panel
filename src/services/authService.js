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
    },

    logout: async token => {
        try {
            await fetch(
                urls.logout,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token
                    }
                }
            )
        } catch (err) {
            console.log(err)
        }
    }

}

export default authService