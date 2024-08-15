import { createContext, useContext, useState } from "react"

//create Context
const CartContext = createContext({
    products: [],
    addToCart: () => {},
})

export const CartContextProvider = ({children}) => {
    const [products,setProducts] = useState([]);

   

    const addToCart = (cart) =>{
        setProducts((prevState)=>[...prevState, cart])
    }

    return <CartContext.Provider value={{products,setProducts,addToCart}}>
      {children}
    </CartContext.Provider>
  
} 

export const useCartContext = () =>{
    const context = useContext(CartContext);
    return context;

}