import { login, logout } from "../../actions/auth";

test("should generate login action object", () => {
  const uid = "abc234";
  const action = login(uid);
  expect(action).toEqual({
    type: "LOGIN",
    uid
  });
});

test("", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT"
  });
});
