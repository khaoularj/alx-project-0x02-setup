import React from 'react';
import Header from '@/components/layout/Header';

const Posts = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6">
      <h2 className="text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl mb-6 tracking-tight text-transparent">Welcome to the Posts Page</h2>
      </main>
    </div>
  );
};

export default Posts;