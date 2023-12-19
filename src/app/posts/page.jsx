import PostCard from "@/src/components/PostCard";

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data;
}

// RSC React Server Component
async function PostPages() {
  const posts = await loadPosts(); //Funcion del servidor
  // console.log(posts)

  return (
    <>
      <h1 className="text-center mb-4">Posts</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center m-4">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </>
  );
}

export default PostPages;
