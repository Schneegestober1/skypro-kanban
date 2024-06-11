const url = 'https://wedev-api.sky.pro/api/user'

export const register =({login, name, password}) => {
    return fetch( url, {
        method: 'POST',
        body: JSON.stringify({
            login,
            name,
            password,
        })
    }).then((response) => {
        if(response.status === 400) {
            return response.json().then(error => {
                if (error.error === 'Пользователь с таким логином уже существует') {
                    throw new Error('Пользователь с таким логином уже существует');
                } else if (error.error === 'login должен содержать хотя бы 3 символа') {
                    throw new Error('Имя, эл. почта или пароль должны содержать хотя бы 3 символа');
                }
            })
        }
        if(response.status === 500) {
            throw new Error('Ошибка сервера')
        }
        if(!response.ok){
            throw new Error('Что-то пошло не так')
        }
        return response.json()
    })
}

export const signIn =({login, password}) => {
    return fetch( url + '/login', {
        method: 'POST',
        body: JSON.stringify({
            login,
            password,
        })
    }).then((response) => {
        if(response.status === 400) {
            throw new Error('Такого пользователья не существует:(')
        }
        if(response.status === 500) {
            throw new Error('Ошибка сервера')
        }
        if(!response.ok){
            throw new Error('Что-то пошло не так')
        }
        return response.json()
    })
}