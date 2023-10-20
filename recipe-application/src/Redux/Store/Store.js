import { applyMiddleware, legacy_createStore,combineReducers} from "redux"

import thunk from "redux-thunk"

const rootreducers=combineReducers({})

export const store=legacy_createStore(rootreducers,applyMiddleware(thunk))