const url = 'https://wedev-api.sky.pro/api/user'

export const register =({login, name, password}) => {
    return fetch( url, {
        method: 'POST',
        body: JSON.stringify({
            login: login,
            name: name,
            password: password,
        })
    }).then((response) => response.json()).then(response => response)
}