import { useEffect, useState } from "react";
import Card from "../Components/Card";

const Products = () => {

  const [store, setStore] = useState([])
  
  useEffect(() =>{
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((result) => setStore(result));
  
    }, [])
  
  console.log(store);

  return (
    <>
      
        <div className="flex flex-wrap gap-4 justify-center">
          {store?.products?.map((pd) => (
            <Card key={pd.id} info={pd} />
          ))}
        </div>
      </>
  
  );
};

export default Products;
