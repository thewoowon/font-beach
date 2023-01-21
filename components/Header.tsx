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
import { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function Header() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const [toggle, setToggle] = useState(false)
  const clickProfile = () => {
    setToggle(!toggle)
  }

  return (
    <header
      className="bg-white fixed top-0 left-0 right-0 z-50"
      style={{ borderBottom: '0.5px solid #3f7cf7' }}
    >
      <div
        className="m-auto flex h-12 items-center w-full"
        style={{ maxWidth: '1080px' }}
      >
        <div
          className="cursor-pointer text-xs xs:text-sm flex flex-col justify-center items-center ml-4"
          style={{ fontFamily: 'Kashie-Mercy' }}
          onClick={() => {
            router.push('/')
          }}
        >
          FontBeach
        </div>
        <span className="m-auto"></span>
        <div
          className="cursor-pointer text-xs xs:text-sm flex justify-center items-center px-2 h-full"
          onClick={() => {
            router.push('/products')
          }}
        >
          Products
        </div>
        <div
          className="cursor-pointer text-xs xs:text-sm flex justify-center items-center px-2 h-full"
          onClick={() => {
            router.push('/wishlist')
          }}
        >
          Wish
        </div>
        <div
          className="cursor-pointer text-xs xs:text-sm flex justify-center items-center px-2 h-full"
          onClick={() => {
            router.push('/cart')
          }}
        >
          Cart
        </div>
        <div
          className="cursor-pointer text-xs xs:text-sm flex justify-center items-center px-2 h-full"
          onClick={() => {
            router.push('/qna')
          }}
        >
          {'Q&A'}
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
            className="cursor-pointer text-xs xs:text-sm flex justify-center items-center px-2 hover:bg-zinc-50 transition duration-200 ease-in-out h-full"
            onClick={() => {
              signIn()
            }}
          >
            Login
          </div>
        )}
      </div>
    </header>
  )
}

const ProfileMenu = () => {
  const menus = [
    { title: '프로필', link: '/my' },
    { title: '로그아웃', link: '/auth/signout' },
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
