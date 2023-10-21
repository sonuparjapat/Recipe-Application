import { applyMiddleware, legacy_createStore,combineReducers} from "redux"

import thunk from "redux-thunk"
import {reducer as getrecipesreducer} from "../GetRecipes/Reducer"
import {reducer as getsinglereducer} from "../GetSinglePage/Reducer"
import {reducer as getfavreducer} from "../GetFavourates/Reducer"
import {reducer as addtofavreducer} from "../AddTtofav/Reducer"
import {reducer as deletefavreducer} from "../DeleteFav/Reducer"
import {reducer as loginreducer} from "../Authentication/Login/Reducer"
import {reducer as registerreducer} from "../Authentication/Signup/Reducer"
const rootreducers=combineReducers({getrecipesreducer,getsinglereducer,getfavreducer,addtofavreducer,deletefavreducer,loginreducer,registerreducer})

export const store=legacy_createStore(rootreducers,applyMiddleware(thunk))