import { Form, Input, Button } from 'antd'
import { useState } from 'react'

function Contact() {
  const [data, setData] = useState(null)

  const onFinish = (values) => {
    setData(values)
  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>Форма обратной связи</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="name" label="Имя" rules={[{ required: true, message: 'Введите имя' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Описание">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>

      {data && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd' }}>
          <h3>Отправленные данные:</h3>
          <p><strong>Имя:</strong> {data.name}</p>
          <p><strong>Описание:</strong> {data.description}</p>
        </div>
      )}
    </div>
  )
}

export default Contact
