import { FETCH_ALL, CREATE, DELETE, UPDATE } from "../constants/constantTypes";

const initialState = {};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, initialState: action?.data };

    case CREATE:
      return { ...state, initialState: [...state.initialState, action?.data] };

    case DELETE:
      return {
        ...state,
        initialState: state.initialState.filter(
          (item) => item.tableData.id !== action?.data
        ),
      };

    case UPDATE:
      return {
        ...state,
        initialState: state.initialState.map((item) =>
          item._id === action?.data._id ? action?.data : item
        ),
      };

    default:
      return state;
      break;
  }
};

export default AdminReducer;
