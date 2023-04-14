import { MainLayout } from "@/components/MainLayout"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"


export default function Post({ cottage }) {
  const router = useRouter()
  const [page, setPage] = useState(0)

  const forth = () => {
    if (page < 11) {
      setPage((prev) => prev + 1)
    }
    else setPage(1)
  }

  const back = () => {
    if (page <= 1) {
      setPage(11)
    } else {
      setPage((prev => prev - 1))
    }
  }

  return (
    <MainLayout>
      <>
        <div className='cottage one'>
          {cottage.imgs.map((img, i) =>
            i === 0 && <div><img src={`.${img}`} /></div>
          )}
          <div className='about'>
            <h2>Дом {cottage.name}</h2>
            <ul className="desc">
              {cottage.description.map((desc) =>
                <li>{desc}</li>
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
              {cottage.price.map((price, i) =>
                i !== 0 && <div>{price}</div>
              )}
            </div>
            <div className='check'>
              <div><b>Заезд:</b> {cottage.check.in}</div>
              <div><b>Выезд:</b> {cottage.check.out}</div>
            </div>
            <div className="add">
              <div><b>Дополнительная информация:</b></div>
              {cottage.add.map((add) =>
                <div>{add}</div>
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
            <div className="slider">
              {cottage.imgs.map((img, i) =>
                i == page &&
                <img src={`.${img}`} alt='' />
              )}
            </div>
          </div>
          <div className='links'>
            <button className='form'>Оставить заявку</button>
          </div>
        </div>
      </>
    </MainLayout>
  )
}

Post.getInitialProps = async (ctx) => {
  const res = await fetch(`http://localhost:4200/cottages/${ctx.query.id}`)
  const cottage = await res.json()

  return {
    cottage
  }
}