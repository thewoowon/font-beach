import { TAKE } from '@/constants/constants'
import { Fonts } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'

const useGetFonts = (
  activePage: number,
  selectedFilter: string,
  deboundecKeyword: string
) => {
  return useQuery<{ data: Fonts[] }, unknown, Fonts[]>(
    [
      `/api/get-fonts?skip=${
        TAKE * (activePage - 1)
      }&take=${TAKE}&orderBy=${selectedFilter}&contains=${deboundecKeyword}`,
    ],
    () =>
      fetch(
        `/api/get-fonts?skip=${
          TAKE * (activePage - 1)
        }&take=${TAKE}&orderBy=${selectedFilter}&contains=${deboundecKeyword}`
      ).then((res) => res.json()),
    {
      select: (data) => data.data,
    }
  )
}

export default useGetFonts
