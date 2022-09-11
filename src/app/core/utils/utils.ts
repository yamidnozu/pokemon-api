// export function setLocalStorage(name: string, value: any) {
//     localStorage.setItem(name, value);
// }

// export function getLocalStorage<T>(name: string): any {
//     return localStorage.getItem(name) as T;
// }

export function setObjectLocalStorage(name: string, value: any) {
    localStorage.setItem(name, JSON.stringify(value));
}

export function getObjectLocalStorage<T>(name: string): any {
    const value = localStorage.getItem(name);
    if (!value) throw 'Objeto no encontrado';
    return JSON.parse(value) as T;
}
