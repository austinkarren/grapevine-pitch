import Image from 'next/image'
import cardStyles from './eventCards.module.css'

export default function Cards () {
    return (
        <>
        <div className={cardStyles.cardDeck}>
            {/* CARD 1 */}
            <div className={cardStyles.card}>
                <div className={cardStyles.textContainer}>
                    <p className={cardStyles.p}><span className={cardStyles.eventP}>EVENTS</span> | MAY 05 2021</p>
                    <h1 className={cardStyles.h1}>LEARN BASIC BING PREP</h1>
                    <button className={cardStyles.button}>REGISTER</button>
                </div>
                <div className={cardStyles.tPicContainer}>
                    <Image
                    className={cardStyles.tPic}
                    src="/images/mingslogo.svg"
                    height={170}
                    width={206}
                    ></Image>
                </div>  
            </div>
            {/* CARD 2 */}
            <div className={cardStyles.card}>
                <div className={cardStyles.textContainer}>
                    <p className={cardStyles.p}><span className={cardStyles.eventP}>EVENTS</span> | MAY 12 2021</p>
                    <h1 className={cardStyles.h1}>COOKING WITH <br></br>CHEF MING</h1>
                    <button className={cardStyles.button}>REGISTER</button>
                </div>
                <div className={cardStyles.tPicContainer}>
                    <Image
                    className={cardStyles.tPic}
                    src="/images/chef.png"
                    height={195}
                    width={176}
                ></Image>
                </div>  
            </div>
            {/* CARD 3 */}
            <div className={cardStyles.card}>
                <div className={cardStyles.textContainer}>
                    <p className={cardStyles.p}><span className={cardStyles.eventP}>EVENTS</span> | MAY 19 2021</p>
                    <h1 className={cardStyles.h1}>COOKING WITH<br></br> OUR FOUNDERS</h1>
                    <button className={cardStyles.button}>REGISTER</button>
                </div>
                <div className={cardStyles.tPicContainer}>
                    <Image
                    className={cardStyles.tPic}
                    src="/images/sandwich.png"
                    height={210}
                    width={254}
                    ></Image>
                </div>  
            </div>
        </div>
        </>
    )
}

