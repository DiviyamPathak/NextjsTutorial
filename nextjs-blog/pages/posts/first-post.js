import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../Components/layout"
export default function Firstpost() {
    return (
        <Layout>
        <Head>
            <title>First Post</title>

        </Head>
        <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
        <h1>Heloo </h1>
        <h3>
            this is learnig page
        </h3>
        <p>use this to go to <Link href="/">Home Page</Link> </p>
        <img src="/images/profilepic.jpeg" alt="Diviyam" />

        </Layout>
    )
}