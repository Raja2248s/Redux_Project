import axios from "axios";
import {
  ADD_USER,
  DELETE_USER,
  FAIL_REQUEST,
  GET_USER_LIST,
  GET_USER_OBJ,
  MAKE_REQUEST,
  UPDATE_USER,
} from "./ActionType";

export const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};
export const failRequest = (err) => {
  return {
    type: FAIL_REQUEST,
    payload: err,
  };
};
export const getUserList = (data) => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};
export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};
export const addUser = () => {
  return {
    type: ADD_USER,
  };
};
export const updateUser = () => {
  return {
    type: UPDATE_USER,
  };
};
export const getUserObj = (data) => {
  return {
    type: GET_USER_OBJ,
    payload: data,
  };
};

export const FetchUserList = () => {
  return (dispatch) => {
    dispatch(makeRequest());
    // setTimeout(()=>{
    axios
      .get("http://localhost:3000/user")
      .then((res) => {
        const userlist = res.data;
        dispatch(getUserList(userlist));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
    // },2000)
  };
};

export const RemoveUser = (code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    // setTimeout(()=>{
    axios
      .delete(`http://localhost:3000/user/${code}`)
      .then((res) => {
        dispatch(deleteUser());
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
    // },2000)
  };
};

export const AddUser = (data) => {
  return (dispatch) => {
    dispatch(makeRequest());
    // setTimeout(()=>{
    axios
      .post("http://localhost:3000/user", data)
      .then((res) => {
        dispatch(addUser());
        console.log("SUcessfully add");
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
    // },2000)
  };
};

export const UpdateUser = (data, code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    // setTimeout(()=>{
    axios
      .put(`http://localhost:3000/user/${code}`, data)
      .then((res) => {
        dispatch(updateUser());
        console.log("SUcessfully updated");
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
    // },2000)
  };
};

export const FetchUserObj = (code) => {
  return (dispatch) => {
    dispatch(makeRequest());
    // setTimeout(()=>{
    axios
      .get(`http://localhost:3000/user/${code}`)
      .then((res) => {
        const userlist = res.data;
        dispatch(getUserObj(userlist));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
    // },2000)
  };
};
