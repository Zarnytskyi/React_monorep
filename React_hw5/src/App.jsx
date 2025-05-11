import Header from './components/Header'
import MainContent from './components/MainContent'
import style from './styles/App.module.css'

function App() {

  return (
    <div className={style.body}>
      <Header className={style.header}/>
      <MainContent className={style.main}/>
    </div>
  )
}

export default App
