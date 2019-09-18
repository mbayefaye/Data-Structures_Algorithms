class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `your full name is:${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) return "you are expelled";
    return `${this.firstName} ${this.lastName} has been late ${this.tardies}`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  average() {
    let sum = this.scores.reduce((a, b) => {
      return a + b;
    });
    return sum / this.scores.length;
  }
}

let mbaye = new Student("mbaye", "faye", 23);
console.log(mbaye.markLate());
console.log(mbaye.markLate());
console.log(mbaye.addScore(12));
console.log(mbaye.addScore(13));
console.log(mbaye.average());
