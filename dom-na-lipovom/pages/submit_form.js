import Link from 'next/link';
import React, { useState } from 'react';

export default function submit_form() {
  const [name, setName] = useState('Hello')
  const [number, setNumber] = useState('its')
  const [date, setDate] = useState('me')
  const [cottage, setCottage] = useState('free')

  const submitForm = async (e) => {
    e.preventDefault()
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
    console.log(data)
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
      </div>
    </div>
  )
}