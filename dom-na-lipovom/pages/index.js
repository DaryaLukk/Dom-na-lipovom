import { MainLayout } from "@/components/MainLayout";
import { useEffect, useState } from "react";
import Cottages from "../components/Cottages";
import cottageStore from "@/components/store/cottageStore";
import Link from "next/link";

const Home = () => {
  const [page, setPage] = useState(1)

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [date, setDate] = useState('')
  const [cottage, setCottage] = useState('')

  const [error, setError] = useState(false)
  const [modal, setModal] = useState(false)
  const [status, setStatus] = useState(false)

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

  const submitForm = async (e) => {
    e.preventDefault()
    if (name && number && date && cottage !== '' && cottage !== 'Выберите дом') {
      setModal(true)
      const res = await fetch('http://localhost:8000', {
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
      const data = await res.json();
      if (data.status) {
        reset();
        setStatus(true);
      }
    } else {
      setError(true);
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
          <div onClick={forth} className='forth'></div>
          <div onClick={back} className='back'></div>
          <div className='main-form'>
            <h1>Аренда гостевых домов</h1>
            <form onSubmit={submitForm} action='/' method='POST'>
              <input placeholder="Введите имя" onChange={(e) => setName(e.target.value)}></input>
              <input placeholder="Номер телефона" onChange={(e) => setNumber(e.target.value)}></input>
              <input placeholder="Желаемая дата" type='date' onChange={(e) => setDate(e.target.value)}></input>
              <select onChange={(e) => setCottage(e.target.value)}>
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
