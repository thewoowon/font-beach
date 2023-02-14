import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '@/components/Layout'
import FontListBox from '@/components/FontListBox'
import FontListItem from '@/components/FontListItem'
import { useCallback, useState } from 'react'
import { FontListItemType } from '@/types/fonts'
import CategoryWrapper from '@/components/CategoryWrapper'
import CategoryList from '@/components/CategoryList'
import { CategoryType } from '@/types/categories'
import FilterWrapper from '@/components/FilterWrapper'
import FilterBox from '@/components/FilterBox'
import { FITERS, TAKE } from '@/constants/constants'
import { Loader, Modal, Pagination } from '@mantine/core'
import { useRecoilState } from 'recoil'
import { openModalState } from '@/states/states'
import ModalImageBox from '@/components/ModalImageBox'
import styled from '@emotion/styled'
import { MainSwiper } from '@/components/MainSwiper'
import { Fonts } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import useDebounce from '@/hooks/useDebounce'

export default function Home() {
  //const [fonts, setFonts] = useState<Fonts[]>([])
  const [opened, setOpened] = useRecoilState(openModalState)
  const [skip, setSkip] = useState(0)
  const [activePage, setPage] = useState(1)
  const [keyword, setKeyword] = useState<string>('')
  const [selectedFilter, setSelectedFilter] = useState<string | null>(
    FITERS[0].value
  )
  const deboundecKeyword = useDebounce(keyword, 500)
  const [commence, setCommence] = useState<boolean>(false)
  const { data: fonts } = useQuery<{ data: Fonts[] }, unknown, Fonts[]>(
    [
      `/api/get-fonts?skip=${
        TAKE * (activePage - 1)
      }&take=${TAKE}&orderBy=${selectedFilter}&contains=${keyword}`,
    ],
    () =>
      fetch(
        `/api/get-fonts?skip=${
          TAKE * (activePage - 1)
        }&take=${TAKE}&orderBy=${selectedFilter}&contains=${keyword}`
      ).then((res) => res.json()),
    {
      select: (data) => data.data,
    }
  )

  const { data: total } = useQuery(
    [`/api/get-fonts-count?contains=${deboundecKeyword}`],
    () =>
      fetch(`/api/get-fonts-count?contains=${deboundecKeyword}`)
        .then((res) => res.json())
        .then((data) => Math.ceil(data.data / TAKE))
  )

  return (
    <Layout title="FontBeach - Home" description="Welcome to the FontBeach!">
      {/* <CategoryWrapper>
        <CategoryList></CategoryList>
      </CategoryWrapper> */}
      {/* <MainSwiper></MainSwiper> */}
      <ImageFill src="/assets/beach.jpeg" className="flex"></ImageFill>
      <FilterWrapper>
        <FilterBox></FilterBox>
      </FilterWrapper>
      <FontListBox>
        {fonts ? (
          fonts.length > 0 ? (
            fonts?.map((font) => {
              const fontElement: FontListItemType = {
                id: font.id,
                name: font.name ?? 'NO NAME',
                description: font.description ?? 'NO DESCRIPTION',
                image: font.image ?? 'NO IMAGE',
                createdAt:
                  font.createdAt.toString().substring(0, 10) ?? 'NO DATE',
                author: font.author ?? 'NO AUTHOR',
                commerce: font.commerce ?? false,
                code: font.code ?? 'NO CODE',
              }
              return <FontListItem key={fontElement.id} {...fontElement} />
            })
          ) : (
            <div
              style={{ height: '200px' }}
              className="flex flex-col justify-center items-center font-sans-kr-light"
            >
              <div>목록이 비었어요.</div>
            </div>
          )
        ) : (
          <div
            style={{ height: '400px' }}
            className="flex flex-col justify-center items-center font-sans-kr-light"
          >
            <div>폰트 목록을 가져오는 중입니다.</div>
            <Loader variant="bars" color={'gray'} size={'lg'}></Loader>
          </div>
        )}
        <div className="w-full flex mt-20">
          {total && total !== 0 ? (
            <Pagination
              className="m-auto"
              page={activePage}
              onChange={setPage}
              total={total}
              color="dark"
            />
          ) : null}
        </div>
      </FontListBox>
      <Modal
        opened={opened}
        onClose={() => {
          setOpened(false)
        }}
        centered
        size="xl"
      >
        <ModalImageBox />
      </Modal>
    </Layout>
  )
}

const ImageFill = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
`
