import { applyMiddleware, legacy_createStore,combineReducers} from "redux"

import thunk from "redux-thunk"
import {reducer as getrecipesreducer} from "../GetRecipes/Reducer"
import {reducer as getsinglereducer} from "../GetSinglePage/Reducer"
const rootreducers=combineReducers({getrecipesreducer,getsinglereducer})

export const store=legacy_createStore(rootreducers,applyMiddleware(thunk))