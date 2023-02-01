import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '@/components/Layout'
import FontListBox from '@/components/FontListBox'
import FontListItem from '@/components/FontListItem'
import { useState } from 'react'

export type FontListItemType = {
  id: number
  name: string
  description: string
  image: string
}

export default function Home() {
  const [temp, setTemp] = useState<Array<FontListItemType>>([])

  return (
    <Layout title="FontBeach - Home" description="Welcome to the FontBeach!">
      <FontListBox>
        {temp?.map((item) => {
          const fontElement: FontListItemType = {
            id: item.id,
            name: item.name,
            description: item.description,
            image: item.image,
          }
          return <FontListItem key={fontElement.id} {...fontElement} />
        })}
      </FontListBox>
    </Layout>
  )
}
