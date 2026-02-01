export const myItemsPromise =(email)=>{
    return fetch(`http://localhost:3000/lost-found/?email=${email}`)
    .then(res => res.json())
}