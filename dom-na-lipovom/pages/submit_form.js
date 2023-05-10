import Link from 'next/link'
import React from 'react'

const submit_form = () => {

  const submitForm = () => {

  }

  return (
    <div className='container-form'>
      <div className='cottage-form'>
        <h1>Аренда гостевых домов</h1>
        <form>
          <input placeholder="Введите имя" type='text'></input>
          <input placeholder="Номер телефона" type='text'></input>
          <input placeholder="Желаемая дата" type='date'></input>
          <select>
            <option>Выберите дом</option>
            <option>Дом Светлый</option>
            <option>Дом Темный</option>
            <option>Дом Малый</option>
            <option>Дом Прованс</option>
            <option>Дом Красный</option>
          </select>
          <div className='links'>
            <button className="form" onClick={() => submitForm}>Оставить заявку</button>
            <Link href='/'><button className='home'>Вернуться на главную</button></Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default submit_form