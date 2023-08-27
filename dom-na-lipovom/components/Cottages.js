import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Cottages = () => {
  const [cottages, setCottages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/cottages')
      .then((res) => res.json())
      .then((json) => setCottages(json))
  }, [])

  return (
    <div className='cottages'>
      {cottages.map((cottage) =>
        <>
          <div className='stripe'></div>
          <div className='cottage'>
            {cottage.imgs.split('\n').map((img, i) =>
              i === 0 && <div className='img' key={i}><img src={img} /></div>
            )}
            <div className='about'>
              <h2>Дом {cottage.name}</h2>
              {cottage.description.split('\n').map((desc, i) =>
                i === 0 && <div className='desc' key={i}>{desc}</div>
              )}
              <div className='info'>
                <div className='sq'>
                  <div className='img'></div>
                  <div>{cottage.sq}</div>
                </div>
                <div className='count'>
                  <div className='img'></div>
                  <div>× {cottage.count}</div>
                </div>
                <div className='sleeper'>
                  <div className='img'></div>
                  <div>× {cottage.sleeper}</div>
                </div>
              </div>
              <div className='address'>
                <div>Адрес: {cottage.address}</div>
              </div>
              {cottage.price.split('\n').map((price, i) =>
                i === 0 && <div className='price' key={i}>Цена от {price}</div>
              )}
              <div className='links'>
                <Link href='/submit_form'><button className='form'>Оставить заявку</button></Link>
                <Link className='next-link' href={`/cottage/[id]`} as={`/cottage/${cottage.id}`}><button className='cottage'>Подробнее о доме</button></Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
};

export default Cottages;
