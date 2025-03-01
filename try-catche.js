function checkAge() {
    const ageField = document.getElementById('age');
    const ageText = ageField.Value;
    const errorTag = document.getElementById('error')

    try {
        const age = parseInt(ageText);
        if (isNaN(age)) {
            throw "Please enter a age";
            // console.log()
            // console.log('age not find', age, ageText);
        }
        else if (age < 18) {
            throw "bacha kaccha not allowed";
        }
        else if (age < 18) {
            throw "bacha kaccha not allowed";
        }
    } catch (err) {
        console.log('Error : ', err)

    }
    finally {
        console.log('All done inside try catch')
    }
    console.log(11111);
}


async function f() {
    let result = 'first!';
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
    });
    result = await promise;
    console.log(result);
}
f();