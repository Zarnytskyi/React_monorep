import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Добро пожаловать!</h1>
      <Button type="primary" onClick={() => navigate('/contact')}>
        Перейти на страницу Контактов
      </Button>
    </div>
  )
}

export default Home
