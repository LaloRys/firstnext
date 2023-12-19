import React, { Suspense } from 'react'
import Posts from '../page'

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await res.json()
  // console.log(post)
  return post
}


async function Page({params}) {
  console.log("params", params)
  const post = await loadPost(params.id)
 
  return (
    <div>
      Post id: {params.id}
      <div>
        <h1>Post solicitada: {post.id}</h1>
        <p className='text-lg font-semibold'>{post.title}</p>
        <p>{post.body}</p>
      </div>
      <hr />
      <Suspense fallback={<div>Cargando publicaciones...</div>}>
        <Posts/>
      </Suspense>
    </div>
  )
}

export default Page