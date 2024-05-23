const url = 'https://wedev-api.sky.pro/api/kanban'

export const getCards =(token) => {
    return fetch( url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
        // Можно и не писать method: 'GET', так как он по умолчанию стоит 
    }).then((response) => {
        if(response.status === 401) {
            throw new Error('Нет авторизации')
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

const urlPost = 'https://wedev-api.sky.pro/api/kanban'

export const addNewCard =({token, newTask}) => {
    return fetch( urlPost, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newTask)
    }).then((response) => {
        if(response.status === 401) {
            throw new Error('Нет авторизации')
        }
        if(response.status === 500) {
            throw new Error('Ошибка сервера')
        }
        if(response.status === 400) {
            throw new Error('Полученные данные не в формате JSON')
        }
        if(!response.ok){
            throw new Error('Что-то пошло не так')
        }
        return response.json()
    })
}