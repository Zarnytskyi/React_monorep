import React,{useState} from 'react'
import Answer from './Answer'
import style from '../style/MathQuiz.module.css'

const getRandomNum = () => Math.floor(Math.random(1)*100)
const MathQuiz = () => {
    const [a, setA]=useState(getRandomNum());
    const [b, setB]=useState(getRandomNum());
    const [points, setPoints]=useState(0);

    const updatePoints = (userAnswer) => {
        const correctAnswer = a+b ;
        if (Number(userAnswer)=== correctAnswer){
            setPoints(points => points+1)
        }else{
            setPoints(points => points-1)
        }
        setA(getRandomNum());
        setB(getRandomNum());
    }
  return (
<div className={style.con}>
      <h2 className={style.ask}>Сколько будет {a} + {b}?</h2>
      <p className={style.score}>Ваш счёт: {points}</p>
      <Answer updatePoints={updatePoints} />
    </div>
  )
}

export default MathQuiz