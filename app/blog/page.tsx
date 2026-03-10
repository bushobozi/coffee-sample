import BlogCard from "./components/BlogCard";
import { blogData } from "./data";

export default function Blog() {
  return (
    <>
      <div className="text-center pt-10 pb-5">
        <h1 className="lg:text-6xl text-4xl font-bold text-black dark:text-white mb-4">
          Discover New Adventures
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore, discover, and find inspiration through these exciting
          journeys.
        </p>
      </div>
      <div className="flex justify-center gap-2 flex-wrap p-4 mb-4">
        <span className="bg-gray-100 rounded-full px-5 py-3 text-sm font-semibold text-gray-600">
          Latest
        </span>
        <span className="bg-gray-100 rounded-full px-5 py-3 text-sm font-semibold text-gray-600">
          News
        </span>
        <span className="bg-gray-100 rounded-full px-5 py-3 text-sm font-semibold text-gray-600">
          Travel
        </span>
        <span className="bg-gray-100 rounded-full px-5 py-3 text-sm font-semibold text-gray-600">
          Breaking
        </span>
        <span className="bg-gray-100 rounded-full px-5 py-3 text-sm font-semibold text-gray-600">
          Latest
        </span>
        <span className="bg-gray-100 rounded-full px-5 py-3 text-sm font-semibold text-gray-600">
          News
        </span>
        <span className="bg-gray-100 rounded-full px-5 py-3 text-sm font-semibold text-gray-600">
          Travel
        </span>
        <span className="bg-gray-100 rounded-full px-5 py-3 text-sm font-semibold text-gray-600">
          Breaking
        </span>
        <span className="bg-gray-100 rounded-full px-5 py-3 text-sm font-semibold text-gray-600">
          Latest
        </span>
        <span className="bg-gray-100 rounded-full px-5 py-3 text-sm font-semibold text-gray-600">
          News
        </span>
        <span className="bg-gray-100 rounded-full px-5 py-3 text-sm font-semibold text-gray-600">
          Travel
        </span>
        <span className="bg-gray-100 rounded-full px-5 py-3 text-sm font-semibold text-gray-600">
          Breaking
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            imageUrl={blog.imageUrl}
            blogCategory={blog.blogCategory}
            blogDate={blog.blogDate}
            blogTitle={blog.blogTitle}
          />
        ))}
      </div>
    </>
  );
}
