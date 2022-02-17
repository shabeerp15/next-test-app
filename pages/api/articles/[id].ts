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
    req.query.id 
    const filteredArticles = articles.filter(article => article.id === req.query.id)
   
    if(filteredArticles.length > 0) {
        res.status(200).json(filteredArticles[0])
    } else {
        res.status(404).json({ message: 'Article not found' })
    }
}
