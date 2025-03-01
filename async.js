
const myLoader = () => {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            resolve(0.3)
        }
        else {
            reject(0.7)
        }
    })
}

myLoader()
    .then(data => console.log('resolved data', data))
    .catch(err => console.log('rejected with value', err))

fetch()
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))


async function loadData() {
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
}


const taskLoader = async () => {
    const res = await res.json();
    const data = await res;
    console.log(data);
}
taskLoader();
loadData()