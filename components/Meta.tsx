import Head from 'next/head'

type Props = {
   title: string
   keywords?: string
   description?: string
}

const Meta = (props: Props) => {
   const { title, keywords, description } = props
   return (
      <Head>
         <meta name='viewport' content='width=device-width, initial-scale=1' />
         <meta name='keywords' content={keywords} />
         <meta name='description' content={description} />
         <meta charSet='utf-8' />
         <link rel='icon' href='/favicon.ico' />
         <title>{title}</title>
      </Head>
   )
}

Meta.defaultProps = {
    title: "Web Dev News",
    keywords: "web development, web dev, web dev news, web dev articles, web dev blogs, web dev tutorials",
    description: "Keep up with the latest web development news and articles"
}

export default Meta
