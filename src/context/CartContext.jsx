import { createContext, useContext, useState } from "react"

const CartContext = createContext({
    products: [],
    addToCart: () => {},
})

export const CartContextProvider = ({children}) => {
    const [products,setProducts] = useState([]);

   

    const addToCart = (cart) =>{
        setProducts((prevState)=>[...prevState, cart])
    }

    return <CartContext.Provider value={{products,addToCart}}>
      {children}
    </CartContext.Provider>
  
} 

export const useCartContrext = () =>{
    const context = useContext(CartContext);
    return context;

}