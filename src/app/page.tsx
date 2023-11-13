import Image from 'next/image'
import styles from './page.module.css'
import BasicGrid from '@/components/BasicGrid'
import PhotoGrid from '@/components/PhotoGrid'

export default function Home() {
  return (
    <main className={styles.main}>
      <BasicGrid />
      <PhotoGrid />
    </main>
  )
}
