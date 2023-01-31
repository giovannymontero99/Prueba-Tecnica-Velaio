import { useEffect, useState } from "react";
import './Admin.css';


const Admin = () => {

    const [news, setNews] = useState([]);
    const [weather, setWheater] = useState({});
    const [ count, setCount ] = useState(true);
    const [ countApi, setCountApi ] = useState(0);
 
    const getData = async () => {

        try {
            const res = await fetch('https://newsapi.org/v2/everything?q=Apple&from=2023-01-31&sortBy=popularity&apiKey=05b29ee82c07451f9fac1e487b38ffcb');
            const resJson = await res.json();
            const data = await fetch('http://api.weatherapi.com/v1/current.json?key=3436846f092b4b8db9f195537233101 &q=3.431413,-76.5050583&aqi=no');
            const dataJson = await data.json();
            if( res.ok === false|| data.ok === false ) throw new Error(`statusFromNews: ${res.status}, statusFromWeather: ${data.status}`);
            setCountApi(resJson.articles.length);
            setNews(resJson.articles);
            setWheater(dataJson);
        } catch (err) {
            return console.error(err);
        }  
    }



    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <div className={count ? "apiCount" : "apiCount apiCount-active"} onClick={e=> setCount(!count)}>
                ⚙️
                {count ? null : <div>peticiones de la API REST de Noticias: {countApi}</div>}
            </div>
            <header className="admin-header" >
                
                <div className='header-logo'>
                    <h1>PortalNoticias</h1>
                    <p>El mejor lugar para estar actualizado 📰</p>
                </div>
                <div>
                    <h2>El Tiempo</h2>
                    { 
                        weather.location === undefined
                            ? <div>Cargando...</div>
                            :     <>
                                    <div>{weather.location.name}, {weather.location.country}:</div>
                                    <div>{weather.current.temp_c} °C, {weather.current.condition.text}</div>
                                    <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
                                </>
                    }
                </div>
            </header>
            <div className="target-container">
                {news.map( (article,id) => {
                    return (
                        <div className="target" key={id} onClick={e => window.open(article.url, '_blank')}>
                            <div className="target-title">
                                {article.title}
                            </div>
                            <img src={article.urlToImage} alt="" className="target-img" />
                            <div className="target-description">
                                {article.description}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Admin;