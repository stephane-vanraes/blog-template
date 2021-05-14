import api from "$lib/api"

export async function get({ params }) {
    const { slug } = params
    const post = await api.readPost('blog/' + slug)
    const related = await api.getRelatedPosts(post)

    return {
        status: 200,
        body: {
            post,
            related
        }
    }
}
