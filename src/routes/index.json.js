import api from '$lib/api'

export async function get() {
    const latestPosts = await api.getPosts()
    const frontpage = await api.readPost('frontpage')
    return {
        status: 200,
        body: {
            latestPosts,
            frontpage
        }
    }
}
