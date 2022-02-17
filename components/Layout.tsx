import styles from '../styles/Layout.module.css'
import Header from './Header'
import Nav from './Nav'
import Meta from './Meta'

function Layout({ children }: any) {
   return (
     <>
     <Meta />
      <Nav />
      <div className={styles.container}>
         <main className={styles.main}>
           <Header />
            {children}
         </main>
      </div>
      </>
   )
}

export default Layout
