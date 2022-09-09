import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "signin",
  initialState:{
    users: [{ emailAdress: "demo@minimals.cc", password: "demo1234" },],
    checkLog: false,
  },
  reducers: {
    checkLogIn: (state, action) => {
      const checkUser = state.users.find(
        (user) =>user.emailAdress === action.payload.emailAdress 
      );
      if (
       checkUser && checkUser.password === action.payload.password
      )
       state.checkLog = true
    },
  },
});
