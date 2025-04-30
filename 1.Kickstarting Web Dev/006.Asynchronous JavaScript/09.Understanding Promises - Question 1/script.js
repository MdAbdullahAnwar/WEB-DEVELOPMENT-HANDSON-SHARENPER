// Write your code at relevant places in the code below:
function bookSearchPromise() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bookSearch = Math.random();
            if (bookSearch > 0.5) {
                resolve("Book found");
            }
            else {
                reject("Book not found");
            }
        }, 3000);
    });
}

bookSearchPromise()
    .then((result)=> {
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })

// Don't touch the code below:
module.exports = bookSearchPromise;