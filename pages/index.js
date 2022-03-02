import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import NavBar from '../components/navBar'
import styles from '../styles/Home.module.css'

export default function Home() {
    return ( 
        <>
            <Head>
                <title>Panda Page | Home</title>
                <meta name="keywords" content="panda"/>
            </Head>
            <div>
                <h1 className={styles.title}>Homepage</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
                <Link href="/customers/lists">
                <a className={styles.btn}>See Panda Listing</a>
                </Link>
            </div>
        </>
    )
}