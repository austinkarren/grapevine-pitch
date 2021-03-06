import Head from 'next/head'
import Header from '../../components/header'

export default function articlesPage() {
    return (
        <>
            <Head>
                <title>Articles</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <Header></Header>
        </>
    )

}