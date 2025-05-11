import style from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={style.header_container}>
        <img className={style.img} src='../../g10.png' alt='img'/>
    </div>
  )
}

export default Header