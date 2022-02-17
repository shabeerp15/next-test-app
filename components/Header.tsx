import styles from '../styles/Header.module.css'

function Header() {
    
  return (
    <div>
        <h1 className={styles.title}>
            <span>Web Dev</span> News
        </h1>
        <p className={styles.description}>keep up with the latest web development news</p>
    </div>
  )
}

export default Header