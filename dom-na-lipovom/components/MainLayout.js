import Head from "next/head";
import Link from "next/link";
import '../styles/Nav.module.css'

export function MainLayout({ children, title = 'Next course' }) {
  return (
    <>
      <Head>
        <title>{title} | Next course</title>
        <meta name='keywords' context='next,javascript,rext' />
        <meta name='description' context='next,javascript,rext' />
        <meta charSet='utf-8' />
      </Head>
      <nav>
        {/* <Link legacyBehavior href={'/'}><a>Меню</a></Link> */}
        <div className="links">
          <div>меню</div>
          <div className='img'></div>
        </div>
        <div className='logo'>Дом на Липовом</div>
        <div className='contacts'>
          <div className='img'></div>
          <div>{`8(999)999-99-99`}</div>
        </div>
        {/* <Link legacyBehavior href={'/about'}><a>About</a></Link>
        <Link legacyBehavior href={'/posts'}><a>Posts</a></Link> */}
      </nav>
      <main>
        {children}
      </main>
      <footer>
        <div>Контакты</div>
        <div>Мы в социальных сетях</div>
      </footer>
    </>
  )
}