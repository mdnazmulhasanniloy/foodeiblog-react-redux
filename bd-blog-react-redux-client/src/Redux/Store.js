import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";  
import logger from "redux-logger";
// import cartCounter from "./Middleware/CartCountor";
import thunk from "redux-thunk"; 
import rootReducer from "./Reducer/RootReducer";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

// export default store;
