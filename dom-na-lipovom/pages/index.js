import { MainLayout } from "@/components/MainLayout";
import { useEffect, useState } from "react";
import Cottages from "../components/Cottages";
import cottageStore from "@/components/store/cottageStore";

const Home = () => {
  const [page, setPage] = useState(1)
  const [error, setError] = useState(false)

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

  useEffect(() => {
    const id = setTimeout(forth, 5000)
    return () => {
      clearTimeout(id)
    }
  }, [page])

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
              <input placeholder="Номер телефона"></input>
              <input placeholder="Желаемая дата"></input>
              <select>
                <option>Выберите дом</option>
                <option>Дом Светлый</option>
                <option>Дом Темный</option>
                <option>Дом Малый</option>
                <option>Дом Прованс</option>
                <option>Дом Красный</option>
              </select>
              <button className="form">Оставить заявку</button>
            </form>
            <div className={error ? 'error_visible' : 'error_hidden'}>Заполните все поля!</div>
          </div>
          <div className="slider">
            {cottageStore.mainImgs.map((img, i) =>
              img.id == page &&
              (<img src={img.img} alt='' key={i} />)
            )}
          </div>
        </div>
        <div className="cottages-container">
          <h1>Наши дома</h1>
          <Cottages />
        </div>
      </div>
    </MainLayout>
  )
};

export default Home;
