// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const cf_url = `https://api.cloudflare.com/client/v4/accounts/${process.env.NEXT_PUBLIC_CF_ID}/images/v2/direct_upload`

async function getUrl() {
  try {
    const { uploadURL } = await fetch(cf_url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CF_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => data.result)

    return uploadURL
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
  try {
    const url = await getUrl()
    res.status(200).json({ status: 200, data: url, message: 'Success' })
  } catch (error) {
    res.status(400).json({ status: 200, message: 'Failed' })
  }
}
