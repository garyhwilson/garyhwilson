import { getSortedPostsData } from "@/lib/posts";
import PostSummaryItem from "./PostSummaryItem";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className="stack">
      <h2>Blog</h2>
      <div className="flow">
        {posts.map(post => (
          <PostSummaryItem key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
