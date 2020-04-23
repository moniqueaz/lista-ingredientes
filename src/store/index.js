import { createStore } from "redux";

import rootReducer from "./modules/rootRedulcer";

const store = createStore(rootReducer);

export default store;
