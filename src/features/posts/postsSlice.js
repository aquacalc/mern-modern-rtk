import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things. (Anch'io!)",
    // date: sub(new Date(), { minutes: 10 }).toISOString(),
    // reactions: {
    //     thumbsUp: 0,
    //     wow: 0,
    //     heart: 0,
    //     rocket: 0,
    //     coffee: 0
    // }
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
    // date: sub(new Date(), { minutes: 5 }).toISOString(),
    // reactions: {
    //     thumbsUp: 0,
    //     wow: 0,
    //     heart: 0,
    //     rocket: 0,
    //     coffee: 0
    // }
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

// see: (~25:45) https://www.youtube.com/watch?v=NqzdVN2tyvQ
export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;