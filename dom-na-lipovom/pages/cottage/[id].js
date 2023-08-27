import { MainLayout } from "@/components/MainLayout"
import cottageStore from "@/components/store/cottageStore"
import Link from "next/link"
import { useState } from "react"


export default function Post({ cottage }) {
  const [page, setPage] = useState(0)

  const forth = () => {
    if (page < cottage.imgs.length - 1) {
      setPage((prev) => prev + 1)
    }
    else setPage(0)
  }

  const back = () => {
    if (page <= 0) {
      setPage(cottage.imgs.length - 1)
    } else {
      setPage((prev => prev - 1))
    }
  }

  const choosePage = (i) => {
    setPage(i)
  }

  return (
    <MainLayout>
      <>
        <div className="block"></div>
        <div className='cottage one'>
          {cottage.imgs.split('\n').map((img, i) =>
            i === 0 && <div key={i}><img src={`.${img}`} /></div>
          )}
          <div className='about'>
            <h2>Дом {cottage.name}</h2>
            <ul className="desc">
              {cottage.description.split('\n').map((desc, i) =>
                <li key={i}>{desc}</li>
              )}
            </ul>
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
            <div className='price'>
              <div><b>Прайс:</b></div>
              {cottage.price.split('\n').map((price, i) =>
                i !== 0 && <div key={i}>{price}</div>
              )}
            </div>
            <div className='check'>
              <div><b>Заезд:</b> {cottage.checkIn}</div>
              <div><b>Выезд:</b> {cottage.checkOut}</div>
            </div>
            <div className="add">
              <div><b>Дополнительная информация:</b></div>
              {cottage.add.split('\n').map((add, i) =>
                <div key={i}>{add}</div>
              )}
            </div>
            <div className='address'>
              <div><b>Адрес:</b> {cottage.address}</div>
            </div>
          </div>
        </div>
        <div className='galery-container'>
          <h1>Галерея</h1>
          <div className='galery-img'>
            <div onClick={forth} className='forth'></div>
            <div onClick={back} className='back'></div>
            <div className="slider max-img">
              {cottage.imgs.split('\n').map((img, i) =>
                i == page &&
                <img src={`.${img}`} alt='' key={i} />
              )}
            </div>
          </div>
          <div className='min-img'>
            {cottage.imgs.split('\n').map((img, i) =>
              <div key={i} onClick={() => choosePage(i)}><img src={`.${img}`} alt='' /></div>
            )}
          </div>
          <div className='links'>
            <Link href='/submit_form'><button className='form'>Оставить заявку</button></Link>
            <Link href='/'><button className='home'>Вернуться на главную</button></Link>
          </div>
        </div>
      </>
    </MainLayout>
  )
}

Post.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:8000/cottages')
  const resNew = res.json();
  console.log(resNew)

  const cottage = resNew.find((cottage) => cottage.id == ctx.query.id)

  return {
    cottage
  }
}