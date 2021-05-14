# Svelte Blog Template

A simplistic blog template with some basic functionality:

- embedded markdown editor
- ability to edit 'static' pages (about, frontpage content)
- logic to fetch related posts based on tags

## Connecting to a data source

All endpoints use `$lib/api.js` to interact with your data source. In this file you can import any data source you want.

```js
import * as source from '<your-library>';
export {
    ...source
}
```

The library has to include the following functions

- login
- logout
- getPosts
- getRelatedPosts
- createPost
- readPost
- updatePost
- deletePost

## Currently missing (but hopefully added soon)

- better related posts logic with weighting
- uploading images
- some type definitions for the api library
- error pages
