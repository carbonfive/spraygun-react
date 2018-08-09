import { is, path, pathSatisfies } from "ramda";

export const isAuthenticated = pathSatisfies(is(Object), ["auth", "user"]);
export const currentUserEmail = path(["auth", "user", "email"]);
