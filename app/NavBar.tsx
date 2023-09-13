import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 border rounded-lg">
      <div className="navbar-start">
        <Link href={'/'} className="btn btn-ghost normal-case text-xl">Next-App</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link href={'/admin'} className="btn btn-ghost normal-case text-sm">Admin</Link>
          <Link href={'/users'} className="btn btn-ghost normal-case text-sm">Users</Link>
        </ul>
      </div>
    </div>
  )
}

export default NavBar