import Link from 'next/link';
import React, { useState } from 'react';

export default function submit_form() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [date, setDate] = useState('')
  const [cottage, setCottage] = useState('')

  const [error, setError] = useState(false)
  const [modal, setModal] = useState(false)
  const [status, setStatus] = useState(false)

  const submitForm = async (e) => {
    e.preventDefault()
    if (name && number && date && cottage !== '') {
      setModal(true)
      const res =  await fetch('http://localhost:8000', {
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
      if(data.status) {
      setStatus(true)
      }
    } else {
      setError(true)
    }
  }

  return (
    <div className='container-form'>
      <div className='cottage-form'>
        <h1>Аренда гостевых домов</h1>
        <form onSubmit={submitForm}  action='/' method='POST'>
          <input placeholder="Введите имя" type='text' onChange={(e) => setName(e.target.value)}></input>
          <input placeholder="Номер телефона" type='text' onChange={(e) => setNumber(e.target.value)}></input>
          <input placeholder="Желаемая дата" type='date' onChange={(e) => setDate(e.target.value)}></input>
          <select onChange={(e) => setCottage(e.target.value)}>
            <option>Выберите дом</option>
            <option>Дом Светлый</option>
            <option>Дом Темный</option>
            <option>Дом Малый</option>
            <option>Дом Прованс</option>
            <option>Дом Красный</option>
          </select>
          <div className='links'>
            <button className="form" type='submit'>Оставить заявку</button>
            <Link href='/'><button className='home'>Вернуться на главную</button></Link>
          </div>
        </form>
        <div className={error? 'error_visible' : 'error_hidden'}>Заполните все поля!</div>
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
          {status && <Link href='/' legacyBehavior><a className='home'>вернуться на главную</a></Link>}   
        </div>
      </div>}
    </div>
  )
}