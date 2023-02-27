import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      author: 'John Doe',
      date: 'May 1, 2023',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      title: 'Sed ut perspiciatis unde omnis',
      author: 'Jane Smith',
      date: 'April 15, 2023',
      excerpt:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
    {
      id: 3,
      title: 'Consectetur adipiscing elit',
      author: 'James Johnson',
      date: 'March 27, 2023',
      excerpt:
        'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];

  return (
    <div className=" mt-16">
      <div className=" h-screen w-screen bg-gray-100">
        <div className="mx-auto max-w-screen-xl py-8 px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Latest Posts 😃
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="overflow-hidden bg-white shadow sm:rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    <a href="#" className="hover:underline">
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    By {post.author} on {post.date}
                  </p>
                </div>
                <div className="flex flex-col gap-4 px-4 py-5 sm:p-6">
                  <p className="text-base text-gray-700">{post.excerpt}</p>
                  <a
                    href="#"
                    className="mt-3 text-base font-medium text-blue-600 hover:text-blue-500"
                  >
                    Read more &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
