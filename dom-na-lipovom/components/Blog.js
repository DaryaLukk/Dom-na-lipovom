import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { blogDB } from '@/db_fake/database';
import ComeBack from './ComeBack';

const Blog = ({isComeBackShow = false}) => {
  const router = useRouter();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(blogDB)
  }, [])

  return (
    <>
      {isComeBackShow && <ComeBack />}
      <div className='blog'>
        {articles.map((article, i) =>
          <>
            <section className='article' key={i} onClick={() => router.push(`/article/${article.id}`)}>
              <img src={article.mainImg} alt='' />
              <div className='text'>
                <h3>{article.title}</h3>
                <p>{article.mainText.slice(3)}</p>
                <Link className='next-link' href={`/article/[id]`} as={`/article/${article.id}`} legacyBehavior><a>Подробнее</a></Link>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  )
};

export default Blog;