// const json = JSON.stringify(car)
// const parsed = JSON.parse(json)

const listGroup = document.querySelector('#listGroup')
const filterInput = document.querySelector('#filterInput')
let USERS = []

filterInput.addEventListener('input', (event) => {
    const valueInput = event.target.value.toLowerCase()
    const filteredUsers = USERS.filter((user) => 
        user.name.toLowerCase().includes(valueInput)
    )
    getRender(filteredUsers)
})

async function getStart(){
    listGroup.innerHTML = "Loading..."
    try {
        const getResponse = await fetch('https://jsonplaceholder.typicode.com/users')
        const getData = await getResponse.json()
        setTimeout(() => {
            USERS = getData
            getRender(getData) 
        }, 2000);
        // console.log(getData);
    } catch (err){
        listGroup.innerHTML = err.message
        listGroup.style.color = 'red'
    }
}

function getRender(users = []){
    if (users.length === 0){
        listGroup.innerHTML = 'No matched users !'
        listGroup.style.color = 'yellow' 
    } else {
        const outHtml = users.map(toHtml)
        listGroup.innerHTML = outHtml.join('')
    }    
}

function toHtml (user){
    return `
        <li class="list-group-item">${user.name}</li>
    ` 
}
getStart()






// * Теория  Promise

// const delay = (time = 1000) => {
//     const newPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([1, 2, 3])
//             // reject('Error in delay')
//         }, time)
//     })
//     return newPromise
// }

// delay(2500)
//     .then((data) => {
//         console.log('Timeout', data);
//         return data.map((x) => x ** 2)
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log('Finally');
//     })

// const getData = () => new Promise((resolve) => resolve([1, 2, 3]))
// console.log(getData());

// getData().then((array) => {
//     console.log(array)
// })
// async function asyncExample(){
//     try {
//         await delay(3000)
//         const dataGet = await getData()
//         console.log(dataGet);
//     } catch (err){
//         console.log(err);
//     } 
//     finally {
//         console.log('Finally');
//     }
// }
// asyncExample()