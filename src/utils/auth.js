export function login(user) {
    if (user && user.token && user.token.length > 0) {
        localStorage.setItem('user', JSON.stringify(user));
    }
}

export function logout() {
    localStorage.removeItem('user');
    window.location = window.location;
}

export function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export function isLogin() {
    let user = getUser();
    return (user && user.token && user.token.length > 0);
}