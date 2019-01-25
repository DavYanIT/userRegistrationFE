export default (state = {user: null, login: null, registrated: 'asdad'}, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {...state, user: action.payload.data};
      case 'REGISTER':
        return {...state, registrated: action.payload.data}
    }
    return state;
  }