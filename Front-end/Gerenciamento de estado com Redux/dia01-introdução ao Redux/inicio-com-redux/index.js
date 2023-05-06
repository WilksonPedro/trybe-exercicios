import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";

const INITIAL_STATE = {count: 0};

const reducer = (state = INITIAL_STATE, action) => {
    return state;
}

const store = createStore(reducer);

const incrementeButton = document.querySelector("button");
incrementeButton.addEventListener("click", () => {
    console.log("click");
})