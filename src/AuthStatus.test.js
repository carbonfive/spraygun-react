import React from "react";
import { shallow } from "enzyme";
import { AuthStatus } from "./AuthStatus";

describe("AuthStatus", () => {
  let props;
  let mockLogin;
  let mockLogout;

  beforeEach(() => {
    mockLogin = jest.fn();
    mockLogout = jest.fn();
    props = { login: mockLogin, logout: mockLogout };
  });

  function subject() {
    return shallow(<AuthStatus {...props} />);
  }

  describe("when isAuthenticated is true", () => {
    beforeEach(() => {
      props.isAuthenticated = true;
      props.email = "user@example.com";
    });

    it("renders the email", () => {
      expect(subject()).toIncludeText("user@example.com");
    });

    it("invokes logout function when clicked", () => {
      subject()
        .find("button")
        .simulate("click");
      expect(mockLogout).toHaveBeenCalled();
    });
  });

  describe("when isAuthenticated is false", () => {
    beforeEach(() => {
      props.isAuthenticated = false;
    });

    it("invokes login function when clicked", () => {
      subject()
        .find("button")
        .simulate("click");
      expect(mockLogin).toHaveBeenCalled();
    });
  });
});
