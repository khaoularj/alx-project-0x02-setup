import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="max-w-md p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{content}</p>
      <span className="text-gray-500">User ID: {userId}</span>
    </div>
  );
};

export default PostCard;