import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src="/love.webp" alt='love' width={600} height={600} />
    </main>
  )
}
