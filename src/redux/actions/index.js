import { NEXT, PREVIOUS, SET_USER } from "../constants";

export const next = () => ({
  type: NEXT
});

export const previous = () => ({
  type: PREVIOUS
});

export const set_user = () => ({
  type: SET_USER
});
