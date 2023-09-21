import { createStore  } from "redux";

const intialState = {
  todos: [{id :1, title:"home work"}],
  nextId: 2,
};

const todoReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD":
        const newTodo = {id :state.nextId, title : action.payload.title}
      return {...state, todos : [...state.todos,newTodo] ,nextId : state.nextId+1 };
      break;
    case "DELETE":
      return {...state, todos:state.todos.filter(
        (todo)=> todo.id !==action.payload.id)};
      break;
    case "EDIT":
      return {...state, 
        todos:state.todos.map((todo)=>todo.id === action.payload.id ? {...todo,title:action.payload.title}: todo)};
      break;
    default:
      return state;
  }
};

const store = createStore (todoReducer);

export default store;