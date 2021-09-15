export const todoReducer = (todo = [], action) => {

  console.log(action.type)
  switch (action.type) {
    case "TODO_ITEM_REQUEST":
      return {
        loading: true,
      };

    case "TODO_ITEM_SUCCESS":
      return {
        loading: false,
        todo: action.payload,
      };

    case "NEW_ITEM_REQUEST":
      return {
        loading: true,
      };

    case "NEW_ITEM_ADDED":
      return {
        loading: false,
        todo: action.payload,
      };

    case "ITEM_EDIT_REQUEST":
      return {
        loading: true,
      };

    case "ITEM_EDIT_SUCCESS":
      return {
        loading: false,
        todo: action.payload,
      };

    case "ITEM_DELETE_REQUEST":
      return {
        loading: true,
      };

    case "ITEM_DELETE_SUCCESS":
      return {
        loading: false,
        todo: action.payload,
      };

    default:
      return todo;
  }
};
