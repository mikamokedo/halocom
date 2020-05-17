import db from '../../listUser.json';
let tempdt = localStorage.getItem("listUser") ? JSON.parse(localStorage.getItem("listUser")) : db
const InitialState = {
    list : tempdt,
    authi : false,
    userName : "" 
};
const listUser = (state = InitialState, action) => {
    switch (action.type) {
        case "SIGUP_SUCCESS":
            let temp = [...state.list];
            temp.push(action.payload);
            localStorage.setItem("listUser",JSON.stringify(temp));
            return {...state,list : temp,authi : true,userName : action.payload.user};
        case "LOGIN_SUCCESS":
            return {...state,authi : true,userName : action.payload};
        default:
            return state
    }
}
export default listUser;