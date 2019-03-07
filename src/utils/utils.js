export const setLocal = (name,data) => {
    const jsonData = JSON.stringify(data);
    window.localStorage.setItem(name,jsonData);
};

export const getLocal  = name =>{
    return JSON.parse(window.localStorage.getItem(name));
};

export const removeLocal = name =>{
    window.localStorage.removeItem('userinfo');
};
