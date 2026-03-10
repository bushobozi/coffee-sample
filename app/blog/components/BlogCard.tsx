import Link from "next/link";
import { Button } from "@/app/components";

interface MyBlogCard {
  id: number;
  imageUrl?: string;
  blogCategory?: string;
  blogDate?: string;
  blogTitle?: string;
}

export default function BlogCard({
  id,
  imageUrl,
  blogCategory,
  blogDate,
  blogTitle,
}: MyBlogCard) {
  return (
    <div
      className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
      style={{
        height: "450px",
        backgroundImage: `url(${
          imageUrl ||
          "https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8="
        })`,
      }}
    >
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-linear-to-b from-transparent to-gray-900"></div>
      <div className="absolute top-0 right-0 left-0 mx-5 mt-2 p-2 flex justify-between items-center">
        <Link
          href={`/blog/${id}`}
          className="text-xs bg-orange-600 text-white px-3 py-1.5 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500 rounded"
        >
          {blogCategory}
        </Link>
        <div className="text-white font-regular flex flex-col justify-start">
          <span className="-mt-3">{blogDate}</span>
        </div>
      </div>
      <main className="p-5 z-10">
        <Link
          href={`/blog/${id}`}
          className="text-xl tracking-tight font-medium leading-7 font-regular text-white hover:underline"
        >
          {blogTitle}
        </Link>
        <Link href={`/blog/${id}`}>
          <Button size="sm" type="button" variant="primary" className="mt-2">
            Read More
          </Button>
        </Link>
      </main>
    </div>
  );
}
