// change task1 and task2 function and return promise from them

function task1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('Task 1 completed');
        }, 2000);
    }) 
}

function task2() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('Task 2 completed');
        }, 1000);
    })
   
}

function allTasksCompleted() {
    return new Promise(function (resolve, reject) {

        resolve('All tasks completed');
     
    });
}

task1().then((result) => {
    console.log(result);

    task2().then((result) => {
        console.log(result);

        allTasksCompleted().then((result) => {
            console.log(result);
        });
        
    });

})

// resolve the above callback hell issue with promises