import Image from 'next/image'
import headerStyles from '../styles/header.module.css'
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
                    <Link href="/posts/recipes"><a className={headerStyles.a}>Recipes</a></Link>
                    <Link href="/posts/articles"><a className={headerStyles.a}>Articles</a></Link>
                    <Link href="/posts/podcasts"><a className={headerStyles.a}>Podcasts</a></Link>
                </div>
                <div className={headerStyles.imageWrap}>
                    <Link href="/">
                        <a>
                            <Image
                                className={headerStyles.image}
                                src="/images/gvslogo.svg"
                                height={102}
                                width={440}
                            ></Image>
                        </a>
                    </Link>
                </div>
                <div className={headerStyles.navTwo}>
                    <Link href="/posts/magazines"><a className={headerStyles.a}>Magazines</a></Link>
                    <Link href="/posts/events"><a className={headerStyles.a}>Events</a></Link>
                    <Link href="/posts/creators"><a className={headerStyles.a}>Creators</a></Link>
                    <Link href="/posts/brands"><a className={headerStyles.a}>Brands</a></Link>
                </div>
            </div>

    </>
    )
}


 