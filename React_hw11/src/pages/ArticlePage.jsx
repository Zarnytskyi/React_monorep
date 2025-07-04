import { useParams, useNavigate, useLocation } from "react-router-dom";
const ArticlePage = () => {
  const dbArtickles = {
    1:{ title: 'First article', content:'Some Content of page', },
    2:{ title: 'Second article', content:'Some Content of page', },
  };
  const { id } = useParams();
  const article = dbArtickles[id];
  const navigate = useNavigate();
  const location = useLocation();

  if(!article) return <h2>404 Not Found</h2>
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <p>Current Route: {location.pathname}</p>
      <button onClick={()=> navigate('/articles')}>Back to Article cataloge</button>
    </div>
  )
}

export default ArticlePage