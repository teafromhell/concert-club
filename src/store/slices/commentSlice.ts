import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IComments } from "../../types/data";
import axios from "axios";

interface ICommentSlice {
  comments: IComments[];
  error: string | null;
}

const initialState: ICommentSlice = {
  comments: [],
  error: null,
};

export const fetchComments = createAsyncThunk<
  IComments[],
  undefined,
  { rejectValue: string }
>(
  "comments/fetchcomments",

  async function (_, { rejectWithValue }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    if (!response) {
      rejectWithValue("Error");
    }
    const data = await response.data;
    return data;
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  },
});

export default commentSlice.reducer;
