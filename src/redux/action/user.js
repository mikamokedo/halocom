export const sigup_success = (user) =>{

    return {
        type : "SIGUP_SUCCESS",
        payload : user
    }


}
export const login_success = (user) =>{

    return {
        type : "LOGIN_SUCCESS",
        payload: user

    }
}