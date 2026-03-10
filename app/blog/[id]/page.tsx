import React from "react";
import { blogData } from "../data";
import Link from "next/link";
import Image from "next/image";

export default function BlogDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params as React.Usable<{ id: string }>);
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  return (
    <div className="py-8">
      {blog ? (
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between">
            <Link href="/blog">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded mb-4 cursor-pointer">
                Back
              </button>
            </Link>
          </div>
          <div className="relative w-full max-w-5xl h-120 aspect-square overflow-hidden rounded mb-8">
            <Image
              src={blog.imageUrl}
              alt={blog.blogTitle}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex justify-between items-center text-gray-600 dark:text-gray-400 mb-4">
            <span>{blog.blogDate}</span>
            <span className="bg-orange-600 text-white px-3 py-1.5 uppercase text-xs rounded">
              {blog.blogCategory}
            </span>
          </div>
          <div>
            <h1 className="lg:text-4xl text-2xl font-bold mb-8">
              {blog.blogTitle}
            </h1>
          </div>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p>{blog.blogDetails}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">
          Blog not found.
        </p>
      )}
    </div>
  );
}
