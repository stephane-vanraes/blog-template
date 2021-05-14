import { promises as fs } from 'fs'
import path from 'path'
import glob from 'glob'
import gm from 'gray-matter'
import marked from 'marked'


const DATA = './data'

export async function getPosts() {
    const files = glob.sync(DATA + '/blog/**/*.md')
    const result = []
    for (let i = 0; i < files.length; i++) {
        const file = await fs.readFile(files[i], 'utf-8')
        const slug = '/blog/' + path.parse(files[i]).name
        const { date, excerpt, tags, title } = gm(file, { excerpt: true }).data

        result.push({
            date,
            excerpt,
            slug,
            tags: (tags || "").split(' '),
            title
        })
    }

    return result
}

export const createPost = updatePost

export async function readPost(slug)  {
    const file = await fs.readFile(DATA + `/${slug}.md`, 'utf-8')
    
    const data = gm(file)
    const markdown = data.content
    const front = data.data
    const html = marked(data.content)
    const tags = front.tags

    return {
        slug: '/' + slug,
        html,        
        markdown,
        ...front,
        tags: (tags || "").split(' '),
    }

}

export async function updatePost(slug, { title, tags, markdown }) {
    const date = new Date()
    const fileContent = `---
title: ${title}
tags: ${tags}
date: ${date.getFullYear()}-${(""+date.getMonth()).padStart(2, '0')}-${(""+date.getDay()).padStart(2, '0')}
---
${markdown}
`
    await fs.writeFile(DATA + `/${slug}.md`, fileContent)
}

export async function deletePost(slug) {
    const done = fs.unlink(DATA + `/${slug}.md`)
    return done
}

export async function getRelatedPosts(post) {
    const posts = (await getPosts())
        .filter(p => post.slug != p.slug)
        .filter(p => p.tags.some(t1 => post.tags.some(t2 => t1 === t2)));

    return posts
}


export async function login(username, password) {
    return (
        username === 'admin' &&
        password === '123'
    )
}

export async function logout() {
    return true
}