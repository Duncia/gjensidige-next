import Link from "next/link";
import styles from "./posts.scss";

async function fetchPosts() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 5,
    },
  });
  const posts = await resp.json();
  return posts;
}

async function PostsPage() {
  const posts = await fetchPosts();
  return (
    <section className="container pt-lr pb-lr">
      <div className="container__inner">
        <h1 className="pb-sm">Posts test</h1>
        <ul className="posts">
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <Link href={`/posts/${post.id}`}>To post</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default PostsPage;
