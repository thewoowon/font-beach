import { CategoryType } from '@/types/categories'
import Link from 'next/link'
import { Categories } from 'constants/constants'

export default function CategoryList({
  categories,
}: {
  categories: CategoryType[]
}) {
  return (
    <div>
      <ul>
        {Categories.map((category) => (
          <li key={category.id}>
            <Link href={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
