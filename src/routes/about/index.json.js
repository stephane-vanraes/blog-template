import api from "$lib/api";

export async function get() {
    const content = await api.readPost('about')
    return {
        status: 200,
        body: content
    }
}
