import { MainLayout } from "@/components/MainLayout";
import { useState } from "react";
import Cottages from "../components/Cottages";

export default function Home({ imgs, cottages }) {
  const [page, setPage] = useState(1)

  const forth = () => {
    if (page < 3) {
      setPage((prev) => prev + 1)
    }
    else setPage(1)
  }

  const back = () => {
    if (page <= 1) {
      setPage(3)
    } else {
      setPage((prev => prev - 1))
    }
  }

  return (
    <MainLayout>
      <div className="main-container">
        <div className='main-img'>
          <div onClick={forth} className='forth'></div>
          <div onClick={back} className='back'></div>
          <div className='main-form'>
            <h1>Аренда гостевых домов</h1>
            <form>
              <input placeholder="Введите имя"></input>
              <input placeholder="Введите номер"></input>
              <input placeholder="Желаемая дата"></input>
              <select>
                <option>Выберите дом</option>
                <option>Дом Светлый</option>
                <option>Дом Темный</option>
                <option>Дом Малый</option>
                <option>Дом Прованс</option>
                <option>Дом Красный</option>
              </select>
              <button>Оставить заявку</button>
            </form>
          </div>
          <div className="slider">
            {imgs.map((img) =>
              img.id == page &&
              (<img src={img.img} alt='' />)
            )}
          </div>
        </div>
        <div className="cottages-container">
          <h1>Наши дома</h1>
          <Cottages cottages={cottages} />
        </div>
      </div>
    </MainLayout>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:4200/main-imgs')
  const imgs = await res.json()

  const res1 = await fetch('http://localhost:4200/cottages')
  const cottages = await res1.json()

  return {
    imgs, cottages
  }
}

