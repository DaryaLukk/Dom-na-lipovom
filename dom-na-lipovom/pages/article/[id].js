import Head from "next/head";
import ComeBack from "@/components/ComeBack";
import { blogDB } from "@/db_fake/database";


export default function Post({ article }) {

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>{article.title} | Дом на Липовом</title>
        <meta name='description' content={article.description} />
        <meta name='keywords' content={article.keywords} />
        <link rel="icon" href="/pictures/ico.ico" type="image/x-icon"></link>
        <link rel="shortcut icon" href="/pictures/ico.ico" type="image/jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://domnalipovom.ru/article/${article.id}`} />
        <meta property="og:title" content={`${article.title} | Дом на Липовом`} />
        <meta property="og:description" content={article.description}/>
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
      <div className="article-container">
        <article className="main-article">
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/99344852" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
          <div className="comeback-links">
            <ComeBack />
            <ComeBack path={'/blog'} title={'наш блог'} />
          </div>
          <section>
            <h1>{article.title}</h1>
            <p>{article.date}</p>
            {article.mainImg && <img src={article.mainImg} alt="" className="mainImg"/>}
          </section>
          <section>
            <div className="common-text" dangerouslySetInnerHTML={
              { __html: article.mainText }
              }
            />
          </section>
        </article>
      </div>
    </>
  )
}

Post.getInitialProps = async (ctx) => {
  const res = blogDB
  
  const article = res.find((article) => article.id == ctx.query.id)
  
  return {
    article
  }
}