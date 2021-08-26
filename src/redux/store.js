import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { pokemonReducer } from "./pokemonReducer";

export const store = createStore(pokemonReducer, applyMiddleware(thunk))
