import { server } from '../../../config/index'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Meta from '../../../components/Meta'

type Props = {
   article: any
}

const Article = (props: Props) => {
   const { article } = props
   // const router = useRouter()
   // const { id } = router.query
   return (
      <>
         <Meta
            title={article.title}
            keywords={article.keywords}
            description={article.excerpt}
         />
         <h1>{article.title}</h1>
         <p>{article.body}</p>
         <br />
         <Link href='/'>Go Back</Link>
      </>
   )
}

export const getServerSideProps = async (context: any) => {
   const res = await fetch(`${server}/api/articles/${context.params.id}`)

   const article = await res.json()
   return {
      props: {
         article,
      },
   }
}

// export const getStaticPaths = async () => {
//    const res = await fetch(`${server}/api/articles`)

//    const articles = await res.json()

//    return {
//       paths: articles.map((article: any) => ({
//          params: { id: article.id.toString() },
//       })),
//       fallback: false,
//    }
// }

// export const getStaticProps = async (context: any) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()
//     return {
//         props: {
//             article
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//     const articles = await res.json()

//     return {
//         paths: articles.map((article: any) => ({
//             params: { id: article.id.toString() }
//         })),
//         fallback: false
//     }
// }

export default Article
