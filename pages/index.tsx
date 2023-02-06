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
import ImageWrapper from '@/components/ImageWrapper'

export default function Home() {
  const [temp, setTemp] = useState<Array<FontListItemType>>(dummy)
  const [opened, setOpened] = useRecoilState(openModalState)
  return (
    <Layout title="FontBeach - Home" description="Welcome to the FontBeach!">
      <CategoryWrapper>
        <CategoryList></CategoryList>
      </CategoryWrapper>
      <ImageWrapper></ImageWrapper>
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
          }
          return <FontListItem key={fontElement.id} {...fontElement} />
        })}
      </FontListBox>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        size="xl"
      >
        <ModalImageBox />
      </Modal>
    </Layout>
  )
}
