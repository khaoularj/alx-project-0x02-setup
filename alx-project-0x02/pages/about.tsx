import React from 'react';
import Button from '@/components/common/Button';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
      <h1 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mb-8">
        Welcome to the About Page
      </h1>
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
