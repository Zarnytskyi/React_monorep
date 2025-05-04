import React, {useState} from 'react'
import style from '../style/Answer.module.css'

const Answer = ({updatePoints}) => {
    const [userAnswer, setUserAnswer]= useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        updatePoints(userAnswer)
        setUserAnswer('')
    }
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Введите ответ"
      />
      <button className={style.btn} type="submit">Проверить</button>
    </form>
  )
}

export default Answer