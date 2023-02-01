import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Footer() {
  const router = useRouter()
  return (
    <footer
      className="py-5 font-sans-kr-light text-md xs:text-md"
      style={{ borderTop: '0.5px solid rgba(230,230,230,1)' }}
    >
      <div
        className="flex justify-between mx-auto"
        style={{ maxWidth: '1080px' }}
      >
        <div>
          <Image src={'/vercel.svg'} alt="" width={200} height={300}></Image>
        </div>
        <div className="w-full gap-2 max-w-5xl m-auto flex justify-start items-start xl:text-sm lg:text-sm md:text-xs sm:text-xs text-xs">
          <div className="flex flex-col items-center">
            <div className="font-sans-kr-light">FOLLOW US</div>
            <ol className="p-5">
              <li className="font-sans-kr-light">
                <Link href={'https://www.instagram.com/lovekong_zip/'}>
                  Instagram
                </Link>
              </li>
              <li className="font-sans-kr-light">
                <Link href={'https://m.blog.naver.com/alrnrdls/222732676166'}>
                  Blog
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </footer>
  )
}
