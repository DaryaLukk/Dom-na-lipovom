import Head from "next/head";
import { YMaps, Map, Placemark, FullscreenControl, ZoomControl } from '@pbe/react-yandex-maps';
import { useState } from "react";
import Link from "next/link";
import contact from '../public/pictures/contact.png';
import contactHover from '../public/pictures/contact-hover.png';
import menuImg from '../public/pictures/menu/menu.png';
import menuImgHover from '../public/pictures/menu/menu-hover.png';
import vk from '../public/pictures/footer/vk.png';
import inst from '../public/pictures/footer/inst.png';
import close from '../public/pictures/menu/close.png';

export function MainLayout({ children }) {
  const [menu, setMenu] = useState(false);

  const [hoverContact, setHoverContact] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(false);

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>Дом на Липовом | Посуточная аренда гостевых домов в Тюмени</title>
        <meta name='description' content='Посуточная аренда гостевых домов в Тюмени на Липовом озере. Панорамные окна, кухня с современной техникой, баня и терраса. Близость к городу, аквапарку и горячим источникам.' />
        <meta name='keywords' content='аренда, дом, коттедж, тюмень, посуточно, баня, сауна' />
        <link rel="icon" href="/pictures/ico.ico" type="image/x-icon"></link>
        <link rel="shortcut icon" href="/pictures/ico.ico" type="image/jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://domnalipovom.ru" />
        <meta property="og:title" content="Дом на Липовом | Посуточная аренда гостевых домов в Тюмени" />
        <meta property="og:description" content="Посуточная аренда гостевых домов в Тюмени на Липовом озере. Панорамные окна, кухня с современной техникой, баня и терраса. Близость к городу, аквапарку и горячим источникам.'"/>
        <meta property="og:image" content="/pictures/carousel2.jpeg" />
        {/* Скрипт Яндекс.Метрики */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
             (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(99344852, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true
              });
            `,
          }}
        />
      </Head>
      <nav>
        <div 
          className="links" 
          onClick={() => setMenu(true)}
          onMouseOver={() => setHoverMenu(true)}
          onMouseOut={() => setHoverMenu(false)}
        >
          <div className="text">меню</div>
          <div 
            className='img'
            style={{background: hoverMenu ? `url(${menuImgHover.src}) no-repeat` : `url(${menuImg.src}) no-repeat`}}
          />
        </div>
        <Link href='/' legacyBehavior><a className='logo'>Дом на Липовом</a></Link>
        <div 
          className='contacts'
          onMouseOver={() => setHoverContact(true)}
          onMouseOut={() => setHoverContact(false)}
        >
          <Link href='tel:+79995489888' legacyBehavior >
            <a 
              className='img' 
              style={{background: hoverContact ? `url(${contactHover.src}) no-repeat` : `url(${contact.src}) no-repeat`}}
            />
          </Link>
          <Link href='tel:+79995489888' legacyBehavior ><a className='phone'>{`8 (912) 078-88-58`}</a></Link>
        </div>
      </nav>
      <main>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/99344852" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
        <div className={menu ? 'menu vis' : 'menu hid'}>
          <div className="content">
            <div className="logo">
              <div>Дом на Липовом</div>
              <div 
                className="close" 
                onClick={() => setMenu(false)}
                style={{background: `url(${close.src}) no-repeat`}}
              />
            </div>
            <div className="stripe"></div>
            <Link legacyBehavior href={'/cottage/1'}><a onClick={() => setMenu(false)}>Дом Светлый</a></Link>
            <Link legacyBehavior href={'/cottage/2'}><a onClick={() => setMenu(false)}>Дом Темный</a></Link>
            <Link legacyBehavior href={'/cottage/3'}><a onClick={() => setMenu(false)}>Дом Прованс</a></Link>
            <Link legacyBehavior href={'/blog'}><a onClick={() => setMenu(false)}>Блог</a></Link>
          </div>
        </div>
        {children}
      </main>
      <footer>
        <div className="data">
          <div>Контакты:</div>
          <div>Тюмень, улица Николая Егорова</div>
          <div>8 (912) 078-88-58</div>
        </div>
        <div className='map'>
          <YMaps>
            <Map defaultState={{ center: [57.229583, 65.5933383], zoom: 17 }} width={'420px'} height={'280px'}>
              <Placemark geometry={[57.229583, 65.5933383]} />
              <FullscreenControl options={{ float: 'left' }} />
              <ZoomControl options={{ float: 'left' }} />
            </Map>
          </YMaps>
        </div>
        <div className='network'>
          <div>Мы в социальных сетях</div>
          <div className='links'>
            <Link target="_blank" href='https://vk.com/dom_na_lipovom'>
              <div 
                className="vk"
                style={{background: `url(${vk.src}) no-repeat`}}
              />
            </Link>
            <Link target="_blank" href='https://instagram.com/dom_na_lipovom?igshid=NTc4MTIwNjQ2YQ=='>
              <div 
                className="inst"
                style={{background: `url(${inst.src}) no-repeat`}}
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}