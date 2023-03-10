import {
  IconBoxMultiple,
  IconBox,
  IconHeart,
  IconHome,
  IconShoppingCart,
  IconUser,
} from '@tabler/icons'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { signIn } from 'next-auth/react'
import ThemeSwitch from './ThemeSwitch'
import fontbeach_black from '../public/assets/fontbeach_black.png'
import fontbeach_white from '../public/assets/fontbeach_white.png'
import { useTheme } from 'next-themes'

export default function Header() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [toggle, setToggle] = useState(false)
  const [search, setSearch] = useState<string>('')
  const clickProfile = () => {
    setToggle(!toggle)
  }

  useEffect(() => setMounted(true), [])

  return (
    <header className="bg-white dark:bg-zinc-800 fixed top-0 left-0 right-0 z-50 py-5 border-b border-zinc-200 dark:border-white">
      <div
        className="m-auto flex h-12 items-center w-full"
        style={{ maxWidth: '1080px' }}
      >
        <div className="flex gap-5">
          <div
            className="cursor-pointer font-bold text-lg xs:text-2xl flex flex-col justify-center items-center ml-4"
            onClick={() => {
              router.push('/')
            }}
          >
            {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
              <Image
                alt=""
                src={fontbeach_white}
                width={100}
                height={75}
              ></Image>
            ) : (
              <Image
                alt=""
                src={fontbeach_black}
                width={100}
                height={75}
              ></Image>
            )}
          </div>
          <div className="flex items-center">
            <input
              className="bg-white text-xs xs:text-sm text-black px-4 py-2 border border-black rounded-lg outline-none"
              placeholder="Search Engine"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <button
              onClick={() => {
                router.push(`/search/${search}`)
              }}
              className="mx-2 cursor-pointer mr-2 px-4 py-2 font-semibold text-xs xs:text-sm flex justify-center items-center bg-black dark:bg-zinc-500 text-white rounded-md hover:bg-zinc-600 transition duration-200 ease-in-out"
            >
              Search
            </button>
          </div>
        </div>
        <span className="m-auto"></span>
        <div className="cursor-pointer mr-2 text-xs xs:text-sm flex justify-center items-center px-2 h-full">
          <ThemeSwitch></ThemeSwitch>
        </div>
        <div
          className="cursor-pointer mr-2 px-4 py-2 font-semibold text-xs xs:text-sm flex justify-center items-center bg-black dark:bg-zinc-500 text-white rounded-md hover:bg-zinc-600 transition duration-200 ease-in-out"
          onClick={() => {
            router.push('/upload')
          }}
        >
          Upload
        </div>
        {session ? (
          <div className="mr-4 flex justify-center items-center relative">
            <Image
              onClick={clickProfile}
              className="rounded-full cursor-pointer mx-2"
              alt=""
              src={session.user?.image!}
              width={30}
              height={30}
            ></Image>
            {toggle && <ProfileMenu />}
          </div>
        ) : (
          <div
            className="cursor-pointer mr-2 px-4 py-2 font-semibold text-xs xs:text-sm flex justify-center items-center bg-black dark:bg-zinc-500 text-white rounded-md hover:bg-zinc-600 transition duration-200 ease-in-out"
            onClick={() => {
              signIn()
            }}
          >
            Sign in
          </div>
        )}
      </div>
    </header>
  )
}

const ProfileMenu = () => {
  const menus = [
    { title: '?????????', link: '/my' },
    { title: '????????????', link: '/auth/signout' },
  ]
  return (
    <ol
      style={{ border: '1px solid rgba(200,200,200,0.6)' }}
      className="font-sans-kr absolute top-10 z-50 w-[120px] shadow-lg bg-white rounded-md overflow-hidden transition duration-200 ease-in-out"
    >
      {menus.map((menu) => (
        <Link href={menu.link} className="text-zinc-700" key={menu.title}>
          <li className="hover:bg-zinc-100 transition duration-200 ease-in-out px-4 py-2 w-full text-center text-sm text-darkGray">
            {menu.title}
          </li>
        </Link>
      ))}
    </ol>
  )
}
