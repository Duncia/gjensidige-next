async function fetchPost(id) {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 5,
    },
  });
  const post = await resp.json();
  return post;
}

async function SinglePostPage({ params }) {
  const post = await fetchPost(params.id);
  return (
    <div className="container single-post pt-md pb-md">
      <div className="container__inner">
        <h1 className="pb-sm">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
export default SinglePostPage;
