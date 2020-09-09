export const initialState = {
    basket: [
        {
            id:"123131",
            title: "La nueva laptop del Mercado",
            price: 255,
            rating: 4,
            image: "https://th.bing.com/th/id/OIP.6aj2sI-2sJ7yt_I14_u1PgHaGH?w=247&h=203&c=7&o=5&pid=1.7"
        },
          {
            id:"300",
            title: "La nueva laptop del Mercado",
            price: 255,
            rating: 4,
            image: "https://th.bing.com/th/id/OIP.6aj2sI-2sJ7yt_I14_u1PgHaGH?w=247&h=203&c=7&o=5&pid=1.7"
        }
    ],
    subtotal: 0,
    user: null
};

    const reducer = (state=initialState, action) =>{
        switch(action.type){
            case 'ADD_TO_BASKET':
                return {
                    ...state,
                    basket: [...state.basket, action.payload],
                    subtotal: state.subtotal + action.payload.price

                }
                case 'ACTUALIZAR_SUBTOTAL':
                 let newSubtotal;
                return{
                    ...state,
                    subtotal: state.basket.map(st=>(
                           newSubtotal = state.subtotal + st.price
                        ))
                }
                
            case 'REMOVE_FROM_BASKET':
                return{
                   ...state,
                    basket: [...state.basket.filter(p =>(p.id !== action.id))],

                }  
             default:
                 return state;
        }
    }
    export default reducer;