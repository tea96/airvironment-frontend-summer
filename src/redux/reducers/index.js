import { combineReducers } from "redux";
import averageValues from "./averageValueReducer";

const rootReducer = combineReducers({ averageValues });

export default rootReducer;
