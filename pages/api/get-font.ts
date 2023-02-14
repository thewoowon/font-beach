// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getFont(id: string) {
  try {
    const response = await prisma.fonts.findUnique({
      where: {
        id: id,
      },
    })
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
  const { id: fontId } = req.query

  if (fontId == null) {
    res.status(400).json({ status: 400, message: 'No Id' })
  }
  try {
    const font = await getFont(String(fontId))
    res.status(200).json({ status: 200, data: font, message: 'Success' })
  } catch (error) {
    res.status(400).json({ status: 400, message: 'Failed' })
  }
}
