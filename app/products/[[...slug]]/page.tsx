import React from 'react'

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string }
}

const ProductPage = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h1>ProductPage</h1>
      {slug?.map(route => <p key={route}>Route: {route}</p>)}
      <p>Sort Order: {sortOrder}</p>
    </div>
  )
}

export default ProductPage