import { TAKE } from '@/constants/constants'
import { useQuery } from '@tanstack/react-query'

const useGetFontsCount = (deboundecKeyword: string, commerce: boolean) => {
  return useQuery(
    [`/api/get-fonts-count?contains=${deboundecKeyword}&commerce=${commerce}`],
    () =>
      fetch(
        `/api/get-fonts-count?contains=${deboundecKeyword}&commerce=${commerce}`
      )
        .then((res) => res.json())
        .then((data) => Math.ceil(data.data / TAKE))
  )
}

export default useGetFontsCount
