import Header from '../../components/header'
import Head from 'next/head'
import Eventcards from '../../components/eventCards'
import eventsStyles from '../../styles/eventsPage.module.css'
import Herocard from "../../components/heroCard"
import indexStyles from "../../styles/Home.module.css"

export default function eventsPage() {
    return (
        <>
            <Head>
                <title>Events</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <Header></Header>
            <div className={eventsStyles.container}>
                <div className={indexStyles.mainGrid}>
                    <div className={indexStyles.mainFlex}>
                        <Herocard
                            title="Meet Ming Tsai 🗓️"
                            titleTwo="MAY 15, 2021 | 5:30 PM CST"
                            parOne="Get a front row seat to this virtual meeting with world famous chef and restaurateur, Ming Tsai."
                            imageSource="/images/meetming.jpeg"
                            imageWidth="710"
                            imageHeight="473"
                            buttonText="Register"

                        ></Herocard>
                        <div className={indexStyles.cardDeck}>
                            <Eventcards></Eventcards>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}