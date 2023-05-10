import Head from "next/head";
import Link from "next/link";
import '../styles/Nav.module.css'
import { useState } from "react";

export function MainLayout({ children, title = 'Next course' }) {
  const [menu, setMenu] = useState(false)

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
        <div className="links" onClick={() => setMenu(true)}>
          <div>меню</div>
          <div className='img'></div>
        </div>
        <Link href='/' legacyBehavior><a className='logo'>Дом на Липовом</a></Link>
        <div className='contacts'>
          <div className='img'></div>
          <div>{`8 (999) 548-98-88`}</div>
        </div>
        {/* <Link legacyBehavior href={'/about'}><a>About</a></Link>
        <Link legacyBehavior href={'/posts'}><a>Posts</a></Link> */}
      </nav>
      <main>
        <div className={menu ? 'menu vis' : 'menu hid'}>
          <div className="content">
            <div className="logo">
              <div>Дом на Липовом</div>
              <div className="close" onClick={() => setMenu(false)}></div>
            </div>
            <div className="stripe"></div>
            <Link legacyBehavior href={'/cottage/1'}><a>Дом Светлый</a></Link>
            <Link legacyBehavior href={'/cottage/2'}><a>Дом Темный</a></Link>
            <Link legacyBehavior href={'/cottage/3'}><a>Дом Малый</a></Link>
            <Link legacyBehavior href={'/cottage/4'}><a>Дом Прованс</a></Link>
            <Link legacyBehavior href={'/cottage/5'}><a>Дом Красный</a></Link>
          </div>
        </div>
        {children}
      </main>
      <footer>
        <div>Контакты</div>
        <div className='network'>
          <div>Мы в социальных сетях</div>
          <div className='links'>
            <Link href='https://vk.com/dom_na_lipovom'><div className="vk"></div></Link>
            <Link href='https://instagram.com/dom_na_lipovom?igshid=NTc4MTIwNjQ2YQ=='><div className="inst"></div></Link>
          </div>
        </div>
      </footer>
    </>
  )
}