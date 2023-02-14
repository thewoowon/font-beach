import { CategoryType } from '@/types/categories'
import { FontListItemType } from '@/types/fonts'

export const temptation = []

export const TAKE = 12

export const FITERS = [
  { label: '추천순', value: 'like' },
  { label: '다운로드순', value: 'download' },
  { label: '조회순', value: 'view' },
]

export const getOrderBy = (orderBy?: string) => {
  return orderBy
    ? orderBy === 'like'
      ? { orderBy: { like: 'desc' } }
      : orderBy === 'download'
      ? { orderBy: { download: 'desc' } }
      : orderBy === 'view'
      ? { orderBy: { view: 'desc' } }
      : { orderBy: { like: 'desc' } }
    : undefined
}

export const Categories: CategoryType[] = [
  {
    id: '1',
    name: '최신',
    slug: 'font',
    description: '최신 폰트',
    image: '/images/categories/font.png',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
  },
  {
    id: '2',
    name: '브랜드',
    slug: 'theme',
    description: '브랜드별 인기 폰트',
    image: '/images/categories/theme.png',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
  },
  {
    id: '3',
    name: '트렌드',
    slug: 'font',
    description: '요즘 트렌드를 반영한 폰트',
    image: '/images/categories/font.png',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
  },
  {
    id: '4',
    name: '연령순',
    slug: 'theme',
    description: '연령별 인기 폰트',
    image: '/images/categories/theme.png',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
  },
]
