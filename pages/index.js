import Head from 'next/head'
import Image from 'next/image'
import globalStyles from '../styles/Home.module.css'
import Header from '../components/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Grapevine Village</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Header></Header>
      {/* BODY CONTAINER */}
      <div className={globalStyles.container}>
        <div className={globalStyles.mainGrid}>
          <div className={globalStyles.mainFlex}>
          {/* HERO SECTION WITH IMAGE AND TEXT */}
          <div className={globalStyles.heroText}>
            <div className={globalStyles.heroHeading}>
              <h1>MEET MINGSBINGS <br></br>CHEF MING TSAI</h1>
            </div>
            <div className={globalStyles.heroBody}>
              <p>Ming Tsai is a chef, restaurateur, cookbook author, James Beard award winner, Emmy Award winner, and host of the longest-running cooking show on PBS, now in its 17th season. </p>
              <p>As a culinary and cultural pioneer of East meets West cuisine, he’s led the way for a creative, thoughtful, and delicious blending of flavors, temperatures, and textures while trailblazing a path for generations.
              </p>
            </div>   
          </div>
          <div className={globalStyles.heroImage}>
            <Image
              src="/images/veggies.png"
              height={542}
              width= {668}
            ></Image>
          </div>
          {/* SIDE CARD DECK */}
          <div className={globalStyles.cardDeck}>
            <div className={globalStyles.cardOne}>
              <div className={globalStyles.textContainer}>
                <p>EVENTS | MAY 05 2021</p>
                <h1 className={globalStyles.h1}>LEARN BASIC BING PREP</h1>
                <button className={globalStyles.button}>REGISTER</button>
              </div>
              <div >
                <Image
                  className={globalStyles.logoPic}
                  src="/images/mingslogo.svg"
                  height={180}
                  width={126}
                ></Image>
              </div>  
            </div>
            <div className={globalStyles.cardOne}>
              <div className={globalStyles.textContainer}>
                <p>EVENTS | MAY 05 2021</p>
                <h1 className={globalStyles.h1}>LEARN BASIC BING PREP</h1>
                <button className={globalStyles.button}>REGISTER</button>
              </div>
              <div className={globalStyles.picContainerTwo}>
                <Image
                  className={globalStyles.chefPic}
                  src="/images/chef.png"
                  height={180}
                  width={170}
                ></Image>
              </div>  
            </div>
            <div className={globalStyles.cardOne}>
              <div className={globalStyles.textContainer}>
                <p>EVENTS | MAY 05 2021</p>
                <h1 className={globalStyles.h1}>LEARN BASIC BING PREP</h1>
                <button className={globalStyles.button}>REGISTER</button>
              </div>
              <div className={globalStyles.picContainerThree}>
                <Image
                  className={globalStyles.chefPic}
                  src="/images/sandwich.png"
                  height={140}
                  width={126}
                ></Image>
              </div>  
            </div>
          </div>
          </div>
          {/* BOTTOM CARD DECK */}
          <div className={globalStyles.footer}>
            <div className={globalStyles.bottomDeck}>
              <div className={globalStyles.bottomCardOne}>
                <div className={globalStyles.picContainer}>
                  <img
                    className={globalStyles.bottomPicOne}
                    src="/images/ming.png"
                    height={253}
                    width={228}
                  ></img>
                </div>  
                <div className={globalStyles.textContainer}>
                  <p>EVENTS | MAY 05 2021</p>
                  <h1 className={globalStyles.h1}>LEARN BASIC BING PREP</h1>
                  <button className={globalStyles.button}>REGISTER</button>
                </div>
              </div>
              <div className={globalStyles.bottomCardTwo}>
                <div className={globalStyles.picContainer}>
                  <img
                    className={globalStyles.bottomPicTwo}
                    src="/images/bings.png"
                    height={174}
                    width={164}
                  ></img>
                </div>  
                <div className={globalStyles.textContainer}>
                    <p>EVENTS | MAY 05 2021</p>
                    <h1 className={globalStyles.h1}>LEARN BASIC BING PREP</h1>
                    <button className={globalStyles.button}>REGISTER</button>
                </div>
              </div>
              <div className={globalStyles.bottomCardThree}>
                <div className={globalStyles.picContainer}>
                    <img
                      className={globalStyles.bottomPicThree}
                      src="/images/knives.png"
                      height={191}
                      width={167}
                    ></img>
                </div>  
                <div className={globalStyles.textContainer}>
                    <p>EVENTS | MAY 05 2021</p>
                    <h1 className={globalStyles.h1}>LEARN BASIC BING PREP</h1>
                    <button className={globalStyles.button}>REGISTER</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
