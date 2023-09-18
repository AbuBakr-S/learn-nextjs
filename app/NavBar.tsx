'use client'
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="navbar bg-base-100 border rounded-lg">
      <div className="navbar-start">
        <Link href={'/'} className="btn btn-ghost normal-case text-xl">Next-App</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex">
          <Link href={'/admin'} className="btn btn-ghost normal-case text-sm">Admin</Link>
          <Link href={'/users'} className="btn btn-ghost normal-case text-sm">Users</Link>
          <Link href={'/products'} className="btn btn-ghost normal-case text-sm">Products</Link>
            {status === 'unauthenticated' && <Link href={'/api/auth/signin'} className="btn btn-ghost normal-case text-sm">Login</Link>}
            {status === 'authenticated' &&
              <>
                <Link className='btn btn-ghost normal-case text-sm' href={'/api/auth/signout'}>Sign Out</Link>
                <div className='px-4 self-center'>{session.user?.name}</div>
              </>
            }
        </ul>
      </div>
    </div>
  )
}

export default NavBar