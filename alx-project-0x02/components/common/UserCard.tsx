import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="max-w-md p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-700 mb-2">Email: {email}</p>
      <p className="text-gray-700 mb-2">
        Address: {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
