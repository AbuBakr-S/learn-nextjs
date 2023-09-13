import React from 'react'
import UserTable from './UserTable'

interface Props {
  searchParams: { sortOrder: string };
}

// Access our query string from the searchParams made available on the server side
const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      {/* Pass down the queryString to the component level */}
      <UserTable sortOrder={sortOrder} />
    </>
  )
}

export default UsersPage