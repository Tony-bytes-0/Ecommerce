import Swal from "sweetalert2";

export const getSesionData = (key) => {
  const listString = localStorage.getItem(key);
  return listString ? JSON.parse(listString) : '';
}

export const saveSesionData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  return undefined
}

export const setNewSession = (user, token ) => {
  //const tokenList = getSesionDataToken('sesionToken');
  //const userList = getSesionDataUser('sesionUser');

  localStorage.setItem('sesionToken', JSON.stringify(token))
  localStorage.setItem('sesionUser', JSON.stringify(user))

  }

  export const expireSesion = () => {
    console.log('expirar sesion')
    localStorage.setItem('sesionToken', '')
    localStorage.setItem('sesionUser', '')
  }