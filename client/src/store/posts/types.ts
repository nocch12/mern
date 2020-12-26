export interface IPostBeforeStore {
  _id?: string;
  creator: string;
  title: string;
  message: string;
  tags: string;
  selectedFile: string;
}

export interface IPost {
  _id: string;
  creator: string;
  title: string;
  message: string;
  tags: string[];
  selectedFile: string;
  createdAt: string;
  likeCount: number;
}

export type State = IPost[];

export type DefaultPosts = IPost[];
