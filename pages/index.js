import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Alert from '../components/alert'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/post'

export async function getStaticProps() {
  const allPostsData  = getSortedPostsData()
  return {
    props: {
      allPostsData 
    }
  }
}


export default function Home({ allPostsData  }) {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>

      <section className={ utilStyles.headingMd }>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you'll be bulding a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a> .)
        </p>

        <Alert type="success">this alert success content.</Alert>
        <Alert type="error">this alert error content.</Alert>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={ utilStyles.headingLg }>Blog</h2>
        <ul className={ utilStyles.list }>
          {
            allPostsData .map( ({ id, date, title }) => (
              <li className={ utilStyles.listItem } key={ id }>
                <Link href={`/posts/${id}`}>
                  <a>{ title }</a>
                </Link>
                <br />
                <small className={ utilStyles.lightText }>
                  <Date dateString={ date } />
                </small>
              </li>
            ))
          }
        </ul>
      </section>

      <section>
        <h2>API 実装</h2>
        <p>Hello</p>
        <p><a href="http://localhost:3000/api/hello">http://localhost:3000/api/hello</a></p>
      </section>

    </Layout>
  )
}
