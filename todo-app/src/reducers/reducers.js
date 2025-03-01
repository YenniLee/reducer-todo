export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false, 
        id: 3892987589
    },
    {
        item: 'Practice JS Challenges', 
        completed: false, 
        id: 1823043242
    }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case('ADD_TODO'):
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ]
    case('TOGGLE_COMPLETED'):
      return (  
        state.map( (todo) =>{
          if( todo.id === action.payload ) {
            return { ...todo, completed: !todo.completed }
          }
          return todo;
        })
      )
    case('CLEAR_COMPLETED'):
      return (
        state.filter( todo => !todo.completed )
      )
    default: 
      return state;
  }
};