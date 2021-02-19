import Head from 'next/head'

export default function DefaultLayout(props) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <meta name='description' content={props.description}/>
      </Head>
      {props.children}
    </main>
  )
}

