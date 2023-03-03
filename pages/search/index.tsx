import { useRouter } from 'next/router'
import { useState } from 'react'

function Search() {
  const router = useRouter()
  const [allSearch, setAllSearch] = useState<string>('')
  return (
    <div className="min-h-screen flex flex-col text-4xl justify-center items-center">
      <div className="flex pb-10">
        <input
          className="bg-white w-[500px] h-20 text-lg xs:text-3xl text-black px-4 py-2 border border-black rounded-lg outline-none"
          placeholder="Search Engine"
          value={allSearch}
          onChange={(e) => setAllSearch(e.target.value)}
        ></input>
        <button
          onClick={() => {
            router.push(`/search/${allSearch}`)
          }}
          className="mx-2 cursor-pointer mr-2 px-4 py-2 font-semibold text-xs xs:text-sm flex justify-center items-center bg-black dark:bg-zinc-500 text-white rounded-md hover:bg-zinc-600 transition duration-200 ease-in-out"
        >
          Search
        </button>
      </div>
      <div>찾으시는 검색 결과가 없으신가요?</div>
      <div>폰트명이나 종류를 정확히 입력해주세요.</div>
    </div>
  )
}

export default Search
