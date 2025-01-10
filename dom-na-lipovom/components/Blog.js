import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { blogDB } from '@/db_fake/database';
import ComeBack from './ComeBack';

const Blog = ({isComeBackShow = false}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(blogDB.slice(-2))
  }, [])

  return (
    <>
      {isComeBackShow && <ComeBack />}
      <div className='blog'>
        {articles.map((article, i) =>
          <>
            <section className='article' key={i}>
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