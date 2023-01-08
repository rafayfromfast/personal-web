import { useContext } from "react";
import { ScrollValueContext, SetScrollValueContext } from "../components";
import { useLocalStorage } from "./localStorage";

export type ScrollValue = string;

export function useScrollValue() {
  return useLocalStorage<ScrollValue>("scrollValue", "#home");
}

export function useScrollValueContext() {
  return useContext(ScrollValueContext);
}

export function useSetScrollValueContext() {
  return useContext(SetScrollValueContext);
}
