//Redux Toolkit Query

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// from "@reduxjs/toolkit/query/react" <-- yhn "/react" provides hooks for react
// means hum jo bhi API request banaye ge usy as a hook use karen ge

const BASE_URL = "http://localhost:3000/";
export interface Post {
    title: string;
    body: string;
    id: number;
}


export const myAPI = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  /* endpoints: (builder) => {
    return { // direct return
      getPosts: builder.query({
        query: () => "posts", // yhn hum ne endpoint ka name "getPosts" rakha hai
      }),
    };
  }, */
  tagTypes:["Post"],

  endpoints:(builder)=>({   // return karna zaroori hai either () or return keyword
            getPosts:builder.query<Post[],string>({ //localhost:3000/posts
                query:()=> "posts",
                providesTags:["Post"] //jab bhi getPosts call hoga to ye cache me store ho jaye ga
            }),
/*             getPost:builder.query({ //localhost:3000/posts/1
                query:(id)=>`posts/${id}`
            }), */
            createPost:builder.mutation<Post,Post>({
                query:(post)=>({
                    url:"posts",
                    method:"POST",
                    body:post
                }),
                invalidatesTags:["Post"] //after update the post it will invalidate the cache and refetch the data
            }),
            updatePost:builder.mutation({
                query:(post)=>({
                    url:`posts/${post.id}`,
                    method:"PUT",
                    body:post
                }),
                invalidatesTags:["Post"] //after update the post it will invalidate the cache and refetch the data
            }),
            deletePost:builder.mutation<void, number>({
                query:(id:number)=>({
                    url:`posts/${id}`,
                    method:"DELETE"
                }),
                invalidatesTags:["Post"] //after update the post it will invalidate the cache and refetch the data
            })
    })
});

// export const { getPosts } = myAPI.endpoints;
//both same but as we used above /react so now we can use hooks
// export const { useGetPostsQuery, useGetPostQuery, useCreatePostMutation, useUpdatePostMutation, useDeletePostMutation } = myAPI
export const { useGetPostsQuery, useCreatePostMutation, useDeletePostMutation, useUpdatePostMutation } = myAPI;