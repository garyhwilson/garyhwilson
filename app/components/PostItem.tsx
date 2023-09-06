import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

export default function PostItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <div className="box">
      <Link href={`/posts/${id}`}>{title}</Link>
      <p>{formattedDate}</p>
    </div>
  );
}
