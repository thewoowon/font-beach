import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import fontbeach_black from '../public/assets/fontbeach_black.png'
import fontbeach_white from '../public/assets/fontbeach_white.png'

export default function Footer() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])
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
          {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
            <Image alt="" src={fontbeach_white} width={100} height={75}></Image>
          ) : (
            <Image alt="" src={fontbeach_black} width={100} height={75}></Image>
          )}
        </div>
        <div className="w-full gap-2 max-w-5xl m-auto flex justify-start items-start xl:text-sm lg:text-sm md:text-xs sm:text-xs text-xs">
          <div className="flex flex-col items-center">
            <div className="font-sans-kr-light">FOLLOW US</div>
            <ol className="p-5">
              <li className="font-sans-kr-light">
                <Link href={'https://www.instagram.com/thejobyouhate/'}>
                  Instagram
                </Link>
              </li>
              <li className="font-sans-kr-light">
                <Link href={'https://www.thewoowon.com/'}>Blog</Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </footer>
  )
}
