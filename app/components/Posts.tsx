import { getSortedPostsData } from "@/lib/posts";
import PostItem from "./PostItem";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className="stack">
      <h2>Blog</h2>
      <div className="flow">
        {posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
