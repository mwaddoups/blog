import Head from 'next/head'

export default function DefaultLayout(props) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <meta name='description' content={props.description}/>
      </Head>
      <div className="md:container md:mx-auto p-4">
        {props.children}
      </div>
    </main>
  )
}

