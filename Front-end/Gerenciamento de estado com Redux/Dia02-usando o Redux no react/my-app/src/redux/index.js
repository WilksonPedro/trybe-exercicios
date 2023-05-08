import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import counterReducer from "./reducers/counterReducer";

// criando a store onde ficara armazenado o estado global da aplicação importando o createStore
const store = createStore(counterReducer, composeWithDevTools());
// criar o reducer que é o reponsavel por escrever o estado global

export default store;