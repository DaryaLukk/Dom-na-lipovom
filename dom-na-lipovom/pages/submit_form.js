import Link from 'next/link'
import React, { useState } from 'react'
import TelegramBot from 'node-telegram-bot-api'

export default function submit_form() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [date, setDate] = useState('')
  const [cottage, setCottage] = useState('')

  const submitForm = async (e) => {
    e.preventDefault()
  }

  return (
    <div className='container-form'>
      <div className='cottage-form'>
        <h1>Аренда гостевых домов</h1>
        <form onSubmit={submitForm}>
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