import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className='flex'>
      <div className='flex'>
        {/* Left */}
        <aside className='bg-slate-200 p-5 mr-5'>Admin Sidebar</aside>
        {/* Right */}
        <div>{children}</div>
      </div>
    </div>
  )
}

export default AdminLayout