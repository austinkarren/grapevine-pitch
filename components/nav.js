import Image from 'next/image'
import styles from './nav.module.css'


export default function Navbar () {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navOne}>
                    <a className={styles.a} href="#home">Shops</a>
                    <a className={styles.a} href="#news">Recipes</a>
                    <a className={styles.a} href="#home">Articles</a>
                    <a className={styles.a} href="#news">Podcasts</a>
                    </div>
                <div>
                    <Image
                        src="/images/gv.svg"
                        height={102}
                        width={440}
                        ></Image>
                </div>
                <div className={styles.navTwo}>
                    <a className={styles.a} href="#home">Magazines</a>
                    <a className={styles.a} href="#news">Events</a>
                    <a className={styles.a} href="#home">Creators</a>
                    <a className={styles.a} href="#news">Brands</a>
                </div>
            </div>

    </>
    )
}


