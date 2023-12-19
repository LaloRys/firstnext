'use client'

import Link from "next/link";

//RCC React Client Component
function PostCard({post}) {
  return (
    <>
      <div className="bg-gray-950 p-10 m-2">
        <Link href={`/posts/${post.id}`} rel="preload">
          <h3 className="text-xl font-bold">
            {post.id}. {post.title}
          </h3>
        </Link>
        <p>{post.body}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {alert('Click Funcionando')}}>Click</button>
      </div>
    </>
  );
}

export default PostCard;
