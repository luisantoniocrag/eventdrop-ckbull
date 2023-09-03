import config from '../config'

export const userLogged = () => {
    let user;
    if (typeof window !== "undefined") {
        user = localStorage.getItem(config.localstorage.user);
    }
    return !!user;
}

export const setJwtUserToLocalstorage = (token: string) => {
    if (typeof window !== "undefined") {
        return localStorage.setItem(config.localstorage.user,token)
    }
    return;
}

export const cleanUser = () => {
    if (typeof window !== "undefined") return window.localStorage.clear();
    return;
}
