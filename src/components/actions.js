export  function addTodo(todo){
    return {type :"ADD",payload:todo}
}
export  function editTodo(todo){
    return {type :"EDIT",payload:todo}
}
export  function deleteTodo(id){
    return {type :"DELETE",payload:id}
}