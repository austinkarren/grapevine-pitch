import Image from 'next/image'
import navStyles from './nav.module.css'
import Link from 'next/link'

export default function Navbar () {
    return (
        <>
            <div className={navStyles.navbar}>
                <div className={navStyles.navOne}>
                    <a className={navStyles.a} href="#home">Shops</a>
                    <a className={navStyles.a} href="#news">Recipes</a>
                    <a className={navStyles.a} href="#home">Articles</a>
                    <a className={navStyles.a} href="#news">Podcasts</a>
                    </div>
                <div>
                    <Image
                        src="/images/gv.svg"
                        height={102}
                        width={440}
                        ></Image>
                </div>
                <div className={navStyles.navTwo}>
                    <a className={navStyles.a} href="#home">Magazines</a>
                    <a className={navStyles.a} href="#news">Events</a>
                    <a className={navStyles.a} href="#home">Creators</a>
                    <a className={navStyles.a} href="#news">Brands</a>
                </div>
            </div>

    </>
    )
}


