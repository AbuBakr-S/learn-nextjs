import React from 'react'
import Link from 'next/link';
import { sort } from 'fast-sort';
import { User } from '../types/User';

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  // Use the fast-sort package to handle sorting, with a default name sort
  const sortedUsers = sort(users).asc(
    sortOrder === 'email' 
      ? user => user.email 
      : user => user.name
  );

  return (
    <table className='table table-zebra'>
        <thead>
          <tr>
            {/* Set the query string inside a Link to enable client side transitions (SPA) */}
            <th><Link href={'/users?sortOrder=name'}>Name</Link></th>
            <th><Link href={'/users?sortOrder=email'}>Email</Link></th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default UserTable