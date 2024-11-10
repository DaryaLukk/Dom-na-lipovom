import { MainLayout } from "@/components/MainLayout";
import { useEffect, useState } from "react";
import Cottages from "../components/Cottages";
import forthArrow from '../public/pictures/arrows/forth.png';
import backArrow from '../public/pictures/arrows/back.png';
import { descsDB, imagesDB } from "@/db_fake/database";

const Home = () => {
  const [page, setPage] = useState(1)

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [date, setDate] = useState('')
  const [cottage, setCottage] = useState('')

  const [error, setError] = useState(false)
  const [modal, setModal] = useState(false)
  const [status, setStatus] = useState(false)

  const [descs, setDescs] = useState([]);
  const [images, setImages] = useState([]);

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

  // useEffect(() => {
  //   const id = setTimeout(forth, 5000)
  //   return () => {
  //     clearTimeout(id)
  //   }
  // }, [page])

  useEffect(() => {
    setDescs(descsDB)
    setImages(imagesDB)
  }, [])

  const submitForm = async (e) => {
    e.preventDefault()
    try {
      if (name && number && date && cottage !== '' && cottage !== 'Выберите дом') {
        setModal(true)
        const res = await fetch('https://dom-na-lipovom-back.onrender.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            number,
            date,
            cottage
          })
        })
        const data = await res.json()
        reset()
        setStatus(true)
      } else {
        setError(true)
      }
    } catch (e) {
      setModal(false)
      reset()
      alert(`Произошла ошибка :( ${e}`)
    }
  }

  const reset = () => {
    setError(false);
    setName('');
    setNumber('');
    setDate('');
    setCottage('');
  }

  return (
    <MainLayout>
      <div className="main-container">
        <div className='main-img'>
          <div 
            onClick={forth} 
            className='forth'
            style={{background: `url(${forthArrow.src}) no-repeat`}}
          />
          <div 
            onClick={back} 
            className='back'
            style={{background: `url(${backArrow.src}) no-repeat`}}
          />
          <div className='main-form'>
            <h1>Аренда гостевых домов в Тюмени</h1>
            <form onSubmit={submitForm} action='/' method='POST'>
              <input placeholder="Введите имя" value={name} onChange={(e) => setName(e.target.value)}></input>
              <input placeholder="Номер телефона" value={number} onChange={(e) => setNumber(e.target.value)}></input>
              <input value={date} type='date' onChange={(e) => setDate(e.target.value)}></input>
              <select value={cottage} onChange={(e) => setCottage(e.target.value)}>
                <option>Выберите дом</option>
                <option>Дом Светлый</option>
                <option>Дом Темный</option>
                <option>Дом Прованс</option>
              </select>
              <button className="form">Оставить заявку</button>
            </form>
            <div className={error ? 'error_visible' : 'error_hidden'}>Заполните все поля!</div>
          </div>
          {modal && <div className='container_status'>
            <div className='status'>
              <h2>Заявка</h2>
              <div>
                <div>{name} {number}</div>
                <div>{cottage} {date}</div>
                {status && <div>Заявка отправлена!</div>}
              </div>
              {!status && <div className='wait'></div>}
              {status && <div className='closeModal' onClick={() => setModal(false)}>закрыть</div>}
            </div>
          </div>}
          <div className="slider">
            {images.map((img, i) =>
              img.id == page &&
              (<img src={img.img} alt='' key={i} />)
            )}
          </div>
        </div>
        <article className="odds-container">
          <h2>Наши преимущества</h2>
          <div className='odds'>
            {descs.map((el, i) =>
              <div className="odd" key={i}>
                <img src={el.img} alt=''></img>
                <p>{el.desc}</p>
              </div>
            )}
          </div>
        </article>
        <article className="cottages-container">
          <h2>Наши дома</h2>
          <Cottages />
        </article>
      </div>
    </MainLayout>
  )
};

export default Home;
