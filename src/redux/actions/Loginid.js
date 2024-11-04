import axios from 'axios';
import api from '../../Utils/api';

export const Loginid = (userid, pas) => async (dispatch, getState) => {
  // console.log('loginiddddddd---------->', userid, pas);
  // console.log('hittttttttttttt', userid, pas);

  return new Promise((resolve, reject) => {
    // axios.post(`${api.protocol}${api.url}${api.Login}?UserId=${data.userid}&Password=${data.password}`,
    axios
      .post(`${api.protocol}${api.url}${api.login}`, {
        EMP_ID: userid,
        PASSWORD: pas,
      })
      .then(response => {
        // dispatch({ type: "SET_MODAL", payload: { show: false } })

        console.log('heloooooooo login---------->');
        if (response.status == 200) {
          resolve('success');
          dispatch({type: 'LOGINDATA', payload: response.data});
        } else {
          resolve(404);
          dispatch({type: 'LOGINDATA', payload: []});
        }
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

export const logout = () => (dispatch, getState) => {
  dispatch({type: 'LOGINDATA', payload: null});
};
