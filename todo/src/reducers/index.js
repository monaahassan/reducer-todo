 
  export const initialState = { 
      todo:[{
        title: "todo 1",
        id: 0, 
        completed: true,
      },{
        title: "todo 2",
        id: 1, 
        completed: false,
      },{
        title: "todo 3",
        id: 2, 
        completed: false,
      },]

  } 

  const reducer = (state, action) => {
    switch(action.type) {
        case("ADD_TODO"):
        const newTodo = { 
            id: state.todos.length, 
            completed: false,
            title: action.payload
        };
        return ({...state, todos:[...state.todos, newTodo]});
        case("TOGGLE_COMPLETED"):
        return({...state, todos:state.todos.map(todo=>{
            if (todo.id === action.payload) {
                return({...todo, completed: !todo.completed});
            } else {
                return(todo);
            }
        })});
        case("CLEAR_COMPLETED"):
        return {
            ...state,
            todos: state.todos.filter( todo=> {
                return(!todo.completed);
            })

        }
        default:
            return state; 
    }
  }
  export default reducer;