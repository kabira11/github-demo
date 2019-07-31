const initialState = {
    users: {}
  }
  export default function(state = initialState, action){
    switch(action.type){
        case 'USER_LIST' :
        return {
            ...state,
            users: action.payload
          };
        default:
            return state; 
    }
}



