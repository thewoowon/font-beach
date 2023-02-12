import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '@/components/Layout'
import FontListBox from '@/components/FontListBox'
import FontListItem from '@/components/FontListItem'
import { useState } from 'react'
import { FontListItemType } from '@/types/fonts'
import CategoryWrapper from '@/components/CategoryWrapper'
import CategoryList from '@/components/CategoryList'
import { CategoryType } from '@/types/categories'
import FilterWrapper from '@/components/FilterWrapper'
import FilterBox from '@/components/FilterBox'
import { dummy } from '@/constants/constants'
import { Modal } from '@mantine/core'
import { useRecoilState } from 'recoil'
import { openModalState } from '@/states/states'
import ModalImageBox from '@/components/ModalImageBox'
import styled from '@emotion/styled'
import { MainSwiper } from '@/components/MainSwiper'

export default function Home() {
  const [temp, setTemp] = useState<Array<FontListItemType>>(dummy)
  const [opened, setOpened] = useRecoilState(openModalState)
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
        {temp?.map((item) => {
          const fontElement: FontListItemType = {
            id: item.id,
            name: item.name,
            description: item.description,
            image: item.image,
            createdAt: item.createdAt,
            author: item.author,
            commerce: item.commerce,
            code: item.code,
          }
          return <FontListItem key={fontElement.id} {...fontElement} />
        })}
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
