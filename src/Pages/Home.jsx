
import { useEffect, useState } from "react"
import Card from "../Components/Card"


const Home = () => {

    const [store, setStore]   = useState([])


    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then(result=> setStore(result))
    }, [])

console.log(store);
   
  return (
    <>
          {
              store.map(pd => <Card />)
          }
    </>
  );
}

export default Home