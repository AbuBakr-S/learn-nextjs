import Image from 'next/image'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {

  // Accessing the session on the server
  const session = await getServerSession(authOptions)

  return (
    <main>
      <h1>Hello { session && <span>{session.user!.name}</span> }</h1>
      <ProductCard />
    </main>
  )
}
