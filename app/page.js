import About from '@components/components/Pages/Home/About'
import Intro from '@components/components/Pages/Home/Intro'
import Services from '@components/components/Pages/Home/Services'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className="hero_section h-full flex flex-col justify-start items-center p-10">
        <div className="hero_text">
          <div className='hero_text-title font-medium text-2xl'>
            Empowering Business Through Customized
            <br />
            <span className="capitalize text-[#3ED3FD]"> Software Solutions</span>
            <br />
          </div>
          <span className='uppercase text-xs underline cursor-pointer'>Veiw More</span>
        </div>
        <Image
          className='mt-5'
          src="/hero-image.svg"
          width={450}
          height={64}
          alt="The Magicians"
        />
      </div>
      <Intro />
      <Services />
      <About />
    </main>
  )
}
