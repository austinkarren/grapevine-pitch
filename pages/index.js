import Head from 'next/head'
import Image from 'next/image'
import indexStyles from '../styles/Home.module.css'
import Header from '../components/header'
import Eventcards from '../components/eventCards'
import Herocard from '../components/heroCard'

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Grapevine Village</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Header></Header>
      {/* BODY CONTAINER */}
      <div className={indexStyles.container}>
        <div className={indexStyles.mainGrid}>
          <div className={indexStyles.mainFlex}>
          {/* HERO SECTION WITH IMAGE AND TEXT */}
              <Herocard
                title="MEET MINGSBINGS"
                parOne="Ming Tsai is a chef, restaurateur, cookbook author, James Beard award winner, Emmy Award winner, and host of the longest-running cooking show on PBS, now in its 17th season."
                parTwo="As a culinary and cultural pioneer of East meets West cuisine, he’s led the way for a creative, thoughtful, and delicious blending of flavors, temperatures, and textures while trailblazing a path for generations."
                imageSource="/images/veggies.png"
                imageHeight="576"
                imageWidth="710"
              ></Herocard>
            <div className={indexStyles.cardDeck}>
              <Eventcards></Eventcards>          
            </div>  
          </div>
        </div>
          {/* BOTTOM CARD DECK */}
        <div className={indexStyles.lowerGrid}>
          <div className={indexStyles.lowerFlex}>
              <div className={indexStyles.lowerCard}>
                <div className={indexStyles.bPicContainer}>
                  <Image
                    className={indexStyles.bottomPicOne}
                    src="/images/chef.png"
                    height={195}
                    width={176}
                  ></Image>
                </div>  
                <div className={indexStyles.bTextContainer}>
                  <p className={indexStyles.p}><span className={indexStyles.eventP}>ARTICLES</span> | 8 MIN READ</p>
                  <h1 className={indexStyles.h1}>CHEF ON A MISSION</h1>
                  <button className={indexStyles.button}>READ ARTICLE</button>
                </div>            
              </div>     
              <div className={indexStyles.lowerCard}>
                <div className={indexStyles.bPicContainer}>
                  <Image
                    className={indexStyles.bottomPicTwo}
                    src="/images/bings.png"
                    height={174}
                    width={164}
                  ></Image>
                </div>  
                <div className={indexStyles.bTextContainer}>
                <p className={indexStyles.p}><span className={indexStyles.eventP}>ARTICLES</span> | 3 MIN READ</p>
                  <h1 className={indexStyles.h1}>LEARN BASIC BING PREP</h1>
                  <button className={indexStyles.button}>READ ARTICLE</button>
                </div>            
              </div>     
              <div className={indexStyles.lowerCard}>
                <div className={indexStyles.bPicContainer}>
                  <Image
                    className={indexStyles.bottomPicThree}
                    src="/images/knives.png"
                    height={191}
                    width={167}
                  ></Image>
                </div>  
                <div className={indexStyles.bTextContainer}>
                  <p className={indexStyles.p}><span className={indexStyles.eventP}>ARTICLES</span> | 6 MIN READ</p>
                  <h1 className={indexStyles.h1}>HIGH QUALITY TRADITION</h1>
                  <button className={indexStyles.button}>READ ARTICLE</button>
                </div>            
              </div>     
          </div>
        </div>
      </div>
    </>
  )
}


