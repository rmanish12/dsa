function countDown(num) {
    if(num<=0) {
        console.log("All done!!");
        return;
    }

    console.log(num);
    countDown(--num);
};

countDown(5);

function countDownWithoutRecursion(num) {
    for(let i=num; i>0; i--) {
        console.log(i);
    }
    console.log("All done!!")
}

countDownWithoutRecursion(5);