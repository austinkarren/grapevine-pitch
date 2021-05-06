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
                    <Link href="https://www.grapevineshops.com/"><a className={headerStyles.a} >Shops</a></Link>
                    <Link href="pages/posts/recipes"><a className={headerStyles.a} href="#news">Recipes</a></Link>
                    <a className={headerStyles.a} href="#home">Articles</a>
                    <a className={headerStyles.a} href="#news">Podcasts</a>
                </div>
                <div className={headerStyles.imageWrap}>
                    <Image
                        className={headerStyles.image}
                        src="/images/gvslogo.svg"
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


 