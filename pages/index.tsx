import type { NextPage } from 'next'
import { server } from '../config/index'

import Image from 'next/image'
import ArticleList from '../components/ArticleList'

const Home: NextPage = ({ articles }: any) => {
   console.log(articles, 'articles')
   return (
      <div>
         <ArticleList articles={articles} />
      </div>
   )
}

export default Home

export const getStaticProps = async () => {
   const res = await fetch(`${server}/api/articles`)
   const articles = await res.json()

   return {
      props: {
         articles,
      },
   }
}

// export const getStaticProps = async () => {
//    const res = await fetch(
//       'https://jsonplaceholder.typicode.com/posts?_limit=5'
//    )
//    const articles = await res.json()

//    return {
//       props: {
//          articles,
//       },
//    }
// }
