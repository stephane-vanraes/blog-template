import api from "$lib/api"

export async function del({ params }) {
    const slug = params.slug.replace('.json', '')
    await api.deletePost(slug)
    
    return {
        status: 200,
        body: {}
    }
}

export async function put({ body, params }) {
    const slug = params.slug.replace('.json', '')
    await api.updatePost(slug, body)

    return {
        status: 200,
        body: {}
    }
}

export async function post({ body }) {
    const slug = 'blog/' + body.title.toLowerCase().replace(' ', '-')
    await api.createPost(slug, body)

    return {
        status: 200,
        body: {}
    }
}