import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { Layout, Menu } from 'antd'

const { Header, Content } = Layout

function App() {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home">
            <Link to="/">Главная</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">Контакты</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Content>
    </Layout>
  )
}

export default App
