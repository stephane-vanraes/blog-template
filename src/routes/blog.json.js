import api from '$lib/api'

export async function get() {
    const posts = await api.getPosts()
    return {
        status: 200,
        body: posts
    }
}
