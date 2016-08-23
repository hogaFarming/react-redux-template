export const INCREMENT = 'INCREMENT';
export function increment() {
  return {
    type: INCREMENT
  };
}

export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export function incrementAsync() {
  return function(dispatch) {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}
