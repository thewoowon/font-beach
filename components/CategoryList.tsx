import { CategoryType } from '@/types/categories'
import Link from 'next/link'
import { Categories } from 'constants/constants'
import { useRouter } from 'next/router'

export default function CategoryList() {
  const router = useRouter()
  return (
    <div className="flex gap-10">
      {Categories.map((category) => (
        <div
          onClick={() => router.push(`/categories/${category.id}`)}
          key={category.id}
          className="bg-white shadow-md px-4 py-2 rounded-lg text-2xl text-blue-500 hover:bg-blue-500 hover:text-white transition ease-in-out duration-200"
        >
          {category.name}
        </div>
      ))}
    </div>
  )
}
