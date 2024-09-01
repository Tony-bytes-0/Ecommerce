export const regexs = {
    //email: /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9.-]+\.)+com$/,
    //password: /^(?=.*[A-Z])(?=.*\d).{9,}$/,
    email: /^([a-zA-Z0-9._%+-]{1,50})@(?:(?:[a-zA-Z0-9.-]+\.)?[a-zA-Z]{2,})$/,
    password: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    ///^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/ // password regex antiguo
    fullName: /^.{1,50}$/,
    postalCode: /^.{1,10}$/,
    phone: /^\d{1,20}$/,
    country: /^.{1,20}$/,
    onlyNumbers: /^\d*$/,
    floatNumber: /^[0-9]*(?:[.,][0-9]*)?$/,
    onlyChar: /^[A-Za-z]+$/,
  };