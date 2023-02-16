// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getProductsCount(
  category_id: number,
  contains: string,
  commerce?: string
) {
  const containsCondition =
    contains && contains !== ''
      ? {
          name: { contains: contains },
        }
      : undefined

  const where =
    category_id && category_id !== -1
      ? {
          category_id: category_id,
          ...containsCondition,
        }
      : containsCondition
      ? containsCondition
      : undefined

  try {
    const response = await prisma.fonts.count({ where: where })
    prisma.$disconnect() // disconnect from database
    return response
  } catch (error) {
    console.error(error)
  }
}

type Data = {
  status: number
  data?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { category_id, contains, commerce } = req.query
  try {
    const fontsCount = await getProductsCount(
      Number(category_id),
      String(contains ?? ''),
      String(commerce ?? '')
    )
    res.status(200).json({ status: 200, data: fontsCount, message: 'Success' })
  } catch (error) {
    res.status(400).json({ status: 200, message: 'Failed' })
  }
}
