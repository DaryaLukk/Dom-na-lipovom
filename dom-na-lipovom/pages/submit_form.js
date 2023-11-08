import Link from 'next/link';
import React, { useState } from 'react';
import img from '../public/pictures/carousel4.jpeg';

export default function Submit_form() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [date, setDate] = useState('')
  const [cottage, setCottage] = useState('')

  const [error, setError] = useState(false)
  const [modal, setModal] = useState(false)
  const [status, setStatus] = useState(false)

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
        const data = await res.json();
        reset();
        setStatus(true)
      } else {
        setError(true)
      }
    }
    catch (e) {
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
    <div 
      className='container-form'
      // style={{backgroundSize: '100vw 100vh', backgroundPosition: 'center', background: `url(${img.src}) no-repeat`}}
    >
      <img src={img.src} alt='' />
      <div className='cottage-form'>
        <h1>Аренда гостевых домов</h1>
        <form onSubmit={submitForm} action='/' method='POST'>
          <input placeholder="Введите имя" value={name} type='text' onChange={(e) => setName(e.target.value)}></input>
          <input placeholder="Номер телефона" value={number} type='text' onChange={(e) => setNumber(e.target.value)}></input>
          <input placeholder="Желаемая дата" value={date} type='date' onChange={(e) => setDate(e.target.value)}></input>
          <select value={cottage} onChange={(e) => setCottage(e.target.value)}>
            <option>Выберите дом</option>
            <option>Дом Светлый</option>
            <option>Дом Темный</option>
            <option>Дом Малый</option>
            <option>Дом Прованс</option>
          </select>
          <button className="form" type='submit'>Оставить заявку</button>
          <Link href='/' legacyBehavior><button className='home'>Вернуться на главную</button></Link>
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
          {status && <Link href='/' legacyBehavior><a>вернуться на главную</a></Link>}
        </div>
      </div>}
    </div>
  )
}