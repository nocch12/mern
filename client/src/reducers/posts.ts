const reducer = (posts = [], action: any) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return posts;
    default:
      return posts as never;
  }
};

export default reducer;