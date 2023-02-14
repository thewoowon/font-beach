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
