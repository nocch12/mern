import axios from "axios";
import { IPost, IPostBeforeStore } from "../reducers/posts";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get<IPost[]>(url);

export const createPost = (newPost: IPostBeforeStore) => {
  return axios.post<IPost>(url, newPost);
}

export const updatePost = (id: string, updatedPost: IPostBeforeStore) => {
  return axios.patch<IPost>(`${url}/${id}`, updatedPost);
}
