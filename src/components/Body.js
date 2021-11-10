import { useEffect, useState } from 'react'
import axios from 'axios'

function Body() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => {

            setData(response.data.meals[0])
            console.log(response.data.meals[0])
        })
        .catch((error) => {
            console.error("Error fetching data: ",error)
            setError(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) return "Loading..."
    if (error) return "Error!"

    return (
        <div>
            <div className="container">
                <div className="img-container">
                    <img src={data.strMealThumb} alt="" /> 
                </div>
                <div className="desc-container">
                    <h2>{data.strMeal}</h2>
                    <h4>Ingredients</h4>
                    <ul>
                        <li>{data.strMeasure1} {data.strIngredient1}</li>
                        <li>{data.strMeasure2} {data.strIngredient2}</li>
                        <li>{data.strMeasure3} {data.strIngredient3}</li>
                        <li>{data.strMeasure4} {data.strIngredient4}</li>
                        <li>{data.strMeasure5} {data.strIngredient5}</li>
                        <li>{data.strMeasure6} {data.strIngredient6}</li>
                        <li>{data.strMeasure7} {data.strIngredient7}</li>
                        <li>{data.strMeasure8} {data.strIngredient8}</li>
                    </ul>
                    <p className="truncate">{data.strInstructions}</p>
                </div>
            </div>
            
            
                   
        </div>
    )
}

export default Body
