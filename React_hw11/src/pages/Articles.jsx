import {NavLink} from 'react-router-dom'

const Articles = () => {
    const dbArtickles = [
  { id:1, title: 'First article',},
  { id:2, title: 'Second article',},
]
  return (
    <div>
      <h1>Article Catalog</h1>
      {dbArtickles.map(article =>(
        <li key ={article.id}>
          <NavLink to={`/articles/${article.id}`}>{article.title}</NavLink>
        </li>
      ))}
    </div>
  )
}

export default Articles