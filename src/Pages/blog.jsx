import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: "https://slimhamdi.net/sliim/demos/images/blog/blog-post-1.jpg",
      date: "15 NOV",
      title: "Best WordPress Themes for Affiliate Marketing in 2020",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore dolor sit amet, consetetur diam nonumy eirmod tempor invid sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
    },
    {
      id: 2,
      image: "https://slimhamdi.net/sliim/demos/images/blog/blog-post-2.jpg",
      date: "15 NOV",
      title: "Best WordPress Themes for Affiliate Marketing in 2020",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
    },
    {
      id: 3,
      image: "https://slimhamdi.net/sliim/demos/images/blog/blog-post-3.jpg",
      date: "15 NOV",
      title: "Best WordPress Themes for Affiliate Marketing in 2020",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore dolor sit amet, consetetur diam nonumy eirmod tempor invid sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
    },
  ];

  return (
    <div className="bg-[#292929] p-6 md:p-24 mx-auto">
      <div className="flex justify-center items-center">
        <p className="text-white text-4xl md:text-7xl font-bold">
          My <span className="text-[#ff5722]">Blog</span>
        </p>
      </div>

      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col justify-center items-center mt-8 md:mt-16 h-auto w-full md:w-[700px] mx-auto md:ml-52 hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          <img src={post.image} alt="" className="w-full" />
          <div className="flex flex-col md:flex-row justify-between bg-[#383838] text-white p-4">
            <p className="text-lg font-bold bg-[#ff5722] h-16 w-14 rounded-sm text-center">
              {post.date.split(" ")[0]} <br />
              {post.date.split(" ")[1]}
            </p>
            <div className="mt-4 md:mt-0 md:ml-2">
              <p className="text-xl md:text-2xl font-semibold">{post.title}</p>
              <p className="text-base md:text-lg mt-2">{post.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
