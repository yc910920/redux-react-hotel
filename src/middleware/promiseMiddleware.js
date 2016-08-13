    /* jshint ignore:start */

export default function promiseMiddleware() {
  return next => action => {
    const { promise, type } = action;

    if (!promise) return next(action);

    const SUCCESS = type;

    const REQUEST = type + '_REQUEST';
    const FAILURE = type + '_FAILURE';

    next({  type: REQUEST });

    return promise
      .then(res => {
        next({  res, type: SUCCESS });

        return true;
      })
      .catch(error => {
        next({ error, type: FAILURE });
        console.log(error);

        return false;
      });
  };
}
