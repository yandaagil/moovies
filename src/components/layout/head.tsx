import Head from "next/head"

const Title = ({ title }: { title: string | undefined }) => {
  return (
    <Head>
      <title>{`${title} / Moovies`}</title>
      <meta name="description" content="Portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/y-icon.png" />
    </Head>
  )
}

export default Title