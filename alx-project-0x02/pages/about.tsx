import React from 'react';
import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';


const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6">
      <h2 className="text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl mb-6 tracking-tight text-transparent">
        Welcome to the About Page
      </h2>
      </main>
      <div className="flex flex-col items-center space-y-4">
        <Button
          size="small"
          shape="rounded-sm"
          label="Small Button"
          onClick={() => alert('Small Button Clicked')}
        />
        <Button
          size="medium"
          shape="rounded-md"
          label="Medium Button"
          onClick={() => alert('Medium Button Clicked')}
        />
        <Button
          size="large"
          shape="rounded-full"
          label="Large Button"
          onClick={() => alert('Large Button Clicked')}
        />
      </div>
    </div>
  );
};

export default About;
