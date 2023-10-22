function printEvenNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

function printEvenNumbersWithDelay() {
    let start = 1;
    let end = 100;
    let batchSize = 10;

    function printBatch() {
        printEvenNumbers(start, start + batchSize - 1);
        start += batchSize;

        if (start <= end) {
            setTimeout(printBatch, 5000);
        }
    }

    printBatch();
}

printEvenNumbersWithDelay();
