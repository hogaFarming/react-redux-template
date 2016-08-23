import { INCREMENT } from '../actions/counter';

function counter(state = 0, action) {
  switch (action.type) {
  case INCREMENT:
    return state + 111;
  default:
    return state;
  }
}

export default counter;
