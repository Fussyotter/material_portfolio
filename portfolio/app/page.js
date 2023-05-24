import Image from 'next/image'
import styles from './page.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello World</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  )
  
}
