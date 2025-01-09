// pages/posts.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}


export async function getStaticProps() {
  
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

const Posts = ({ posts }: PostsPageProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6">
        <h2 className="text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl mb-6 tracking-tight text-transparent">
          Welcome to the Posts Page
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard
                  key={post.id}
                  title={post.title}
                  content={post.content}
                  userId={post.userId} body={''} id={0}            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Posts;
