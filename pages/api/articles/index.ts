// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { articles } from '../../../data'

type Data = {
   articles: Array<{
      id: string,
      title: string,
      excerpt: string,
      body: string,
   }>
}

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   res.status(200).json( articles )
}
