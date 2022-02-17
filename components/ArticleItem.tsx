import Link from 'next/link'
import styles from '../styles/Article.module.css'

type Props = {
    article: any
}

const ArticleItem = (props: Props) => {
    const { article } = props
  return (
    <Link href={`/article/${article.id}`}>
        <a className={styles.card}>
            <h3>{props.article.title} &rarr;</h3>
            <p>{props.article.body}</p>
        </a>
    </Link>
  )
}


export default ArticleItem