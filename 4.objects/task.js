class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subjectName) {
		if (mark > 1 && mark < 6 && !isNaN(mark)) {
			if (!this.marks.hasOwnProperty(subjectName)) {
				this.marks[subjectName] = [mark];       
			} else {
				this.marks[subjectName].push(mark);
			}
		}
	}

	getAverageBySubject(subjectName) {
		if (this.marks.hasOwnProperty(subjectName) && typeof subjectName === 'string') {
			return (this.marks[subjectName].reduce((acc, mark) => acc + mark) / this.marks[subjectName].length);
		} else {
			return 0;
		}
	}

	getAverage() {
		let allSubject = Object.keys(this.marks);
		let sumAverageBySubject = [];
		for (let i = 0; i < allSubject.length; i++) {
			sumAverageBySubject.push(this.getAverageBySubject(allSubject[i]));
		}
		return (sumAverageBySubject.reduce((acc, mark) => acc + mark) / allSubject.length);
	}
}