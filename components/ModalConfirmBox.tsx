import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

function ModalConfirmBox() {
  const router = useRouter()
  return (
    <div>
      <div className="text-center text-3xl font-bold">
        폰트를 추가하시려구요?
      </div>
      <div className="text-xl text text-center py-2">
        아직 로그인을 하지 않으신 것 같아요
      </div>
      <div className="flex justify-center items-center gap-5 py-5">
        <button
          onClick={() => {
            signIn()
          }}
          className="px-4 py-2 bg-black text-white text-2xl font-bold rounded-lg hover:bg-zinc-600 transition duration-200 ease-in-out"
        >
          Sign In
        </button>
        <button
          onClick={() => {
            signIn()
          }}
          className="px-4 py-2 bg-black text-white text-2xl font-bold rounded-lg hover:bg-zinc-600 transition duration-200 ease-in-out"
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default ModalConfirmBox
