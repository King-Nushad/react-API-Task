import { useState } from "react";

const Dropdown = () => {

    const [selectedProduct, setSelectedProduct] = useState ([]);

    const productList = ["All", "Men", "Jewelery", "Electronics", "Women"]

    const handleSelection = (event) => {
        setSelectedProduct (event.target.value);
    }



    return (

        <>

            <select value={selectedProduct} onChange={handleSelection}>

                <option value={""}>All</option>
                <option value={"men wear"}>Men Wear</option>
                <option value={"jewelery"}>Jewelery</option>
                <option value={"electronics"}>Electronics</option>
                <option value={"women"}>Women</option>
            </select>

                {productList.map ((product) => {
                    <option value={product} key={product}> {product}</option>
                    
                })}


           
        
        </>
    )
}

export default Dropdown