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

export default function Home() {
  const [temp, setTemp] = useState<Array<FontListItemType>>(dummy)

  return (
    <Layout title="FontBeach - Home" description="Welcome to the FontBeach!">
      <CategoryWrapper>
        <CategoryList></CategoryList>
      </CategoryWrapper>
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
    </Layout>
  )
}
