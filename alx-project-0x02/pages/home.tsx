import React from 'react'
import Card from '@/components/common/Card';

const home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
        <main className="p-6">
            <h2 className="text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl  mb-6 tracking-tight text-transparent">Welcome to the Home Page</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card title="Card 1" content="This is the content for Card 1" />
                <Card title="Card 2" content="This is the content for Card 2" />
                <Card title="Card 3" content="This is the content for Card 3" />
            </div>
        </main>
    </div>
  )
}

export default home