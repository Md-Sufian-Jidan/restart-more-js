const myLoader = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random();
        if (success <= 0.5) {
            resolve(success);
        }
        else {
            reject(success);
        }
    });
};

myLoader()
     .then(data => console.log('resolved data', data))
    .catch(err => console.log('rejected with value', err));

fetch('')
.then(res => res.json)
.then(data => console.log(data))
.catch(err => console.error(err));



async function loadData() {
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
}

const taskLoader = async() => {
    const res = await res.json();
    const data = await res;
    console.log(data);
}
taskLoader();
loadData()