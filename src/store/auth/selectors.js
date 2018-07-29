export function isAuthenticated(state) {
  return state.auth.user !== undefined;
}

export function currentUserEmail(state) {
  const { user } = state.auth;
  return user ? user.email : undefined;
}
