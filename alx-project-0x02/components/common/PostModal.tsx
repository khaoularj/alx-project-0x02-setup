import React, { useState } from 'react';
import { PostModalProps } from '../../interfaces';

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    if (!isOpen) return null;
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({ title, content });
      setTitle('');
      setContent('');
      onClose();
    };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4">Create a New Post</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="content">
                Content
              </label>
              <textarea
                id="content"
                className="w-full border border-gray-300 p-2 rounded-lg"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="mr-2 px-4 py-2 bg-gray-200 rounded-lg"
                onClick={onClose}
              >
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default PostModal;