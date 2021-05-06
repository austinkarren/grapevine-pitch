import Image from 'next/image'
import headerStyles from './header.module.css'
import Link from 'next/link'

export default function Navbar () {
    return (
        <>
            <div className={headerStyles.topBar}>
                <div className={headerStyles.topBarCentered}>
                    <h2 className={headerStyles.h2}>40% SALE ON SELECT <a href="https://www.grapevineshops.com/collections/epicurean-shop">FEATURED FOOD ITEMS*</a></h2>
                </div>  
            </div>

            <div className={headerStyles.navbar}>
                <div className={headerStyles.navOne}>
                    <a className={headerStyles.a} href="#home">Shops</a>
                    <a className={headerStyles.a} href="#news">Recipes</a>
                    <a className={headerStyles.a} href="#home">Articles</a>
                    <a className={headerStyles.a} href="#news">Podcasts</a>
                    </div>
                <div>
                    <Image
                        src="/images/gv.svg"
                        height={102}
                        width={440}
                        ></Image>
                </div>
                <div className={headerStyles.navTwo}>
                    <a className={headerStyles.a} href="#home">Magazines</a>
                    <a className={headerStyles.a} href="#news">Events</a>
                    <a className={headerStyles.a} href="#home">Creators</a>
                    <a className={headerStyles.a} href="#news">Brands</a>
                </div>
            </div>

    </>
    )
}


 