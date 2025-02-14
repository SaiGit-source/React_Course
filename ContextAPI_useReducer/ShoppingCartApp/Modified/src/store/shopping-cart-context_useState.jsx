import { createContext, useReducer } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateItemQuantity: () => {}
});

// we dont want to re-create this function whenever the component function executes
function shoppingCartReducer(state, action) {
  return state;
}

/* we manage state in context file as well: another approach */
export default function CartContextProvider({children}){

      const [ shoppingCartState, shoppingCartDispatch ] = useReducer(shoppingCartReducer, 
        {
          items: []
        }
      )
      
      const [shoppingCart, setShoppingCart] = useState({
        items: [],
      });
    
      function handleAddItemToCart(id) {
        shoppingCartDispatch({})
        
        setShoppingCart((prevShoppingCart) => {
          const updatedItems = [...prevShoppingCart.items];
    
          const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === id
          );
          const existingCartItem = updatedItems[existingCartItemIndex];
    
          if (existingCartItem) {
            const updatedItem = {
              ...existingCartItem,
              quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
          } else {
            const product = DUMMY_PRODUCTS.find((product) => product.id === id);
            updatedItems.push({
              id: id,
              name: product.title,
              price: product.price,
              quantity: 1,
            });
          }
    
          return {
            items: updatedItems,
          };
        });
      }
    
      function handleUpdateCartItemQuantity(productId, amount) {
        setShoppingCart((prevShoppingCart) => {
          const updatedItems = [...prevShoppingCart.items];
          const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === productId
          );
    
          const updatedItem = {
            ...updatedItems[updatedItemIndex],
          };
    
          updatedItem.quantity += amount;
    
          if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
          } else {
            updatedItems[updatedItemIndex] = updatedItem;
          }
    
          return {
            items: updatedItems,
          };
        });
      }
    
      const ctxValue = {
        //items : shoppingCart.items, // we are making the state variable and update cart function available to components that require them 
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity
      }; // this object is the value of context

      return <CartContextProvider value={ctxValue}>
        {children}
      </CartContextProvider>
}
 
// Another approach to bring all the values from App.jsx into this export function

