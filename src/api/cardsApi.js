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

export const addNewCard =({token, newTask}) => {
    return fetch( url, {
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

export const deleteCard =({token, id}) => {
    return fetch( url + `/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        },
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

export const editCard =({token, editTask, id}) => {
    return fetch( url + `/${id}`, {
        method: 'PUT',
        body: JSON.stringify(editTask),
        headers: {
            Authorization: `Bearer ${token}`
        },
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Полученные данные не в формате JSON!");
        }
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