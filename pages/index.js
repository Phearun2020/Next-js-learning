import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import NavBar from '../components/navBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>A home page is a webpage that serves as the starting point of website. It is the default webpage that loads when you visit a web address that only contains a domain name. For example, visiting https://techterms.com will display the Tech Terms home page. The home page is located in the root directory of a website.</p>
      <Link href="/food">
        <a className={styles.btn}>See lsit of food</a>
      </Link>
    </div>
  )
}
