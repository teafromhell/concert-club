import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IComments } from "../../types/data";
import axios from "axios";

interface ICommentSlice {
  comments: IComments[];
  error: string | null;
  loading: boolean;
}

interface IPostComment {
  name: string;
  email: string;
  body: string;
  postId: number;
  id: string;
}

const initialState: ICommentSlice = {
  comments: [],
  error: null,
  loading: false,
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

export const postComment = createAsyncThunk<
  IPostComment,
  IPostComment,
  { rejectValue: string }
>(
  "comments/postComment",

  async function ({ ...post }, { rejectWithValue }) {
    const send = {
      name: post.name,
      email: post.email,
      body: post.body,
      postId: post.postId,
      id: post.id,
    };
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/comments",
      send
    );
    if (!response) {
      rejectWithValue("Error");
    } else {
      console.log("posting data", response);
    }
    return response.data;
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
        state.loading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading = false;
      })
      .addCase(postComment.pending, (state) => {
        state.error = null;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      });
  },
});

export default commentSlice.reducer;
