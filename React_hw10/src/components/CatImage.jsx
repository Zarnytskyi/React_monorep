import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from './CatImage.module.css'

const CatImage = () => {
const [catImage, setCatImage] = useState('');
const [loading, setLoading] = useState(false);

    const fetchData = async () =>{
        try{
            setLoading(true);
            const response = await axios.get('https://api.thecatapi.com/v1/images/search');
            setCatImage(response.data[0].url)
        }catch(error){
            console.error('Error', error);
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
return (
    <div className={styles.container}>
      <h1 className={styles.title}>Случайная кошка: </h1>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <img className={styles.image} src={catImage} alt="Random Cat" />
      )}
      <button className={styles.button} onClick={fetchData}>
        Показать другую кошку
      </button>
    </div>
  )
}

export default CatImage