import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
    <h1>First Post</h1>
    <h2>
      <img src="/images/profile.jpg" alter="Your Name"></img><br/>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </h2>
    </>
  ) 
}