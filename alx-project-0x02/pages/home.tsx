import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';

const Home = () => {
 
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([
    { title: 'Card 1', content: 'This is the content for Card 1' },
    { title: 'Card 2', content: 'This is the content for Card 2' },
    { title: 'Card 3', content: 'This is the content for Card 3' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: { title: string; content: string }) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6">
        <h2 className="text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl mb-6 tracking-tight text-transparent">
          Welcome to the Home Page
        </h2>
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default Home;
