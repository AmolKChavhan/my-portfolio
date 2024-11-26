import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("theme") || "light";

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === "light" ? "dark" : "light";

      localStorage.setItem("theme", newTheme);

      return newTheme;
    },
  },
});

export const { toggleTheme } = theme.actions;
export default theme.reducer;
