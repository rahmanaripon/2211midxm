import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductDetails = () => {

    const { id } = useParams()
    
    const [prod, setProd] = useState({})
    
    
    useEffect = (() => {
        fetch(`https://dummyjson.com/products/$(id)`)
          .then((res) => res.json())
          .then((result) => setProd(result))
    },[])

  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails