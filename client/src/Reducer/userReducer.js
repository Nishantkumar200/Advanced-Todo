export const UserReducer = (fetchedData = [], action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { loading: true };

    case "LOGIN_SUCCESS":
      return { loading: false, fetchedData: action.payload };

      default: return fetchedData;
  }
};
