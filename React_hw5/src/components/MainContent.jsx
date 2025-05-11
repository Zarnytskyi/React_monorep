import style from '../styles/MainContent.module.css'

const MainContent = () => {
  return (
    <div className={style.body}>
        <h3 className={style.title}>LIFE IS WASTED ON THE LIVING</h3>
        <p>Sign in</p><p>with</p>
        <div className={style.btn_container}>
            <button className={style.btn_apple}></button>
            <button className={style.btn_google}></button>
            <button className={style.btn_twitter}></button>
        </div>
    </div>
  )
}

export default MainContent