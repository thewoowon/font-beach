import Link from 'next/link'

export default function Bye() {
  return (
    <div
      style={{ height: '500px' }}
      className="flex flex-col justify-center items-center font-sans-kr-light"
    >
      <div className="relative text-5xl">Font Beach</div>
      <div className="relative font-sans-kr-light text-xl py-3">
        폰트의 바다에서 다시 만나요!
      </div>
      <div className="text-xl">다음에 또 만나요! 😍😍😍</div>
      <div className="flex flex-col justify-center items-center py-3 text-blue-500">
        <Link
          className="border-b-2 border-b-white hover:border-b-blue-500 cursor-pointer"
          href="/"
        >
          {'-> '} 메인으로 이동하기
        </Link>
      </div>
    </div>
  )
}
