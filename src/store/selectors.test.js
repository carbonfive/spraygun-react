import { currentUserEmail, isAuthenticated } from "./selectors";

let store;

beforeEach(() => {
  store = { auth: {} };
});

describe("isAuthenticated", () => {
  describe("when store contains a user", () => {
    beforeEach(() => {
      store.auth.user = { email: "user@example.com" };
    });

    it("returns true", () => {
      expect(isAuthenticated(store)).toEqual(true);
    });
  });

  describe("when store does not contain a user", () => {
    it("returns false", () => {
      expect(isAuthenticated(store)).toEqual(false);
    });
  });
});

describe("currentUserEmail", () => {
  describe("when store contains a user", () => {
    const user = { email: "user@example.com" };
    beforeEach(() => {
      store.auth.user = user;
    });

    it("returns the user's email", () => {
      expect(currentUserEmail(store)).toEqual("user@example.com");
    });
  });

  describe("when store does not contain a user", () => {
    it("returns undefined", () => {
      expect(currentUserEmail(store)).toBeUndefined();
    });
  });
});
