/**
 * Created by lerayne on 17.01.17.
 */

export default function promiseMiddleware({getState, dispatch}) {
    return next => action => {
        if (!action.promise) {
            return next(action)
        } else {
            const {type, promise, ...rest} = action

            // passing action to the next MW right away, we want reducers to register the
            // promise-producing action synchronously when it's fired (for example for loading
            // indication)
            next(action)

            // dispatch of this action returns promise (returned promise's "then" will be fired
            // after this "then"). Used widely, for example to pass promise to "initialize" method,
            // which is then used in server rendering
            return promise.then(
                result => {
                    // dispatching with "next". Dispatching with "dispatch" is also possible. In
                    // that case the action will be passed to every middleware. Can be useful if
                    // this MW changed so that it could return another promises or thunks, but
                    // before that happens - "dispatch" would be redundant, cause now it only
                    // returns plain actions
                    next({
                        ...rest,
                        payload: result,
                        type: type + '_SUCCESS'
                    })

                    // I dont remember if this actually does something, need to check
                    return true
                },
                error => {
                    console.error(error)
                    next({
                        ...rest,
                        payload: error,
                        type: type + '_FAILURE'
                    })

                    return false
                }
            )
        }
    }
}