import Image from 'next/image'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import tiger from '@/public/images/tiger.png'

export default async function Home() {

  // Accessing the session on the server
  const session = await getServerSession(authOptions)

  return (
    <main>
      <h1>Hello { session && <span>{session.user!.name}</span> }</h1>
      <ProductCard />
      <div className="relative h-screen max-w-6xl">
        {/* NextJS can add these image dimensions automatically to the DOM for local images
        <Image src={tiger} alt='Tiger'/> */}
        {/* Remote images require a hotsname to be provided in next.config */}
        <Image 
          src='https://cdn.pixabay.com/photo/2018/04/26/12/14/travel-3351825_1280.jpg'
          alt='trip outdoor summer vehicle'
          fill
          className="object-cover"
          // sizes prop doesn't impact the size of the image on the screen
          // informs nextjs how to serve different images for different devices
          sizes='(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw'
          quality={100}
        />
      </div>
    </main>
  )
}
