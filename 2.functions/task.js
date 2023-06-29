function getArrayParams(...arr) {
	/*
	  let min = Infinity;
	  let max = -Infinity;
	  let avg = arr[0];

	  for (let i = 1; i < arr.length; i++) {
	    if (max > arr[i]) {
	      min = arr[i];
	    } else if (max < arr[i]) {
	      max = arr[i];
	    }
	    avg += arr[i];
	  }
	  avg = Number((avg / arr.length).toFixed(2));

	  return { min: min, max: max, avg: avg };
	*/

	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let avg = arr.reduce(function(sum, current) {
		return sum + current;
	});
	avg = +(avg / arr.length).toFixed(2);

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (!isNaN(...arr)) {
		return arr.reduce(function(sum, current) {
			return sum + current;
		})
	} else {
		return 0;
	}
}

function differenceMaxMinWorker(...arr) {
	if (!isNaN(...arr)) {
		return (Math.max(...arr) - Math.min(...arr));
	} else {
		return 0;
	}
}

function differenceEvenOddWorker(...arr) {
	if (!isNaN(...arr)) {
		let sumEvenElement = 0;
		let sumOddElement = 0;

		for (let i = 0; i < arr.length; i++) {
			if ((arr[i] % 2) === 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i];
			}
		}

		return (sumEvenElement - sumOddElement);
	} else {
		return 0;
	}
}

function averageEvenElementsWorker(...arr) {
	if (!isNaN(...arr)) {
		let sumEvenElement = 0;
		let countEvenElement = 0;

		for (let i = 0; i < arr.length; i++) {
			if ((arr[i] % 2) === 0) {
				sumEvenElement += arr[i];
				countEvenElement++;
			}
		}

		return (sumEvenElement / countEvenElement);
	} else {
		return 0;
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		if (func(...arrOfArr[i]) > maxWorkerResult) {
			maxWorkerResult = func(...arrOfArr[i]);
		}
	}
	return maxWorkerResult;
}