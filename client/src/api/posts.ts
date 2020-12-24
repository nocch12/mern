import axios from "axios";
import {DefaultPosts} from '../reducers/posts'

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get<DefaultPosts>(url);
