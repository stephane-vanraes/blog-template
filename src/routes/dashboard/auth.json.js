import api from "$lib/api"

export async function post({ body }) {
    const { username, password } = JSON.parse(body)

    const isAuth = await api.login(username, password)

    return {
        status: isAuth ? 200 : 401,
        body: {}
    }
}

export async function del() {
    await api.logout()
    
    return {
        staus: 200,
        body: {}
    }
}