import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPost = createAsyncThunk('posts/fetchPost',
    async () =>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data
    })


const postSlice = createSlice({
    name : 'posts',
    initialState:{
        allPosts : [],
        currentPage : 1,
        removedId : [],
    },

    reducers:{
        removePost : (state, action)=>{
            state.removedId.push((action.payload));
        },
        setPage: (state, action)=>{
            state.currentPage = action.payload
        }

    },

    extraReducers: builder => {
        builder.addCase(fetchPost.fulfilled , (state, action) =>{
            state.allPosts = action.payload;
        })
    }
})


export const {removePost, setPage} = postSlice.actions
export default postSlice.reducer