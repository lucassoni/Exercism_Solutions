//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  #grades = {};
  roster() {
    return JSON.parse(JSON.stringify(this.#grades));
  }

  add(name, grade) {
    let k = Object.keys(this.#grades);
    for (const key of k) {
      if (this.#grades[key]) {
        let index = this.#grades[key].indexOf(name);
        if (index != -1) {
          this.#grades[key].splice(index, 1);
          break;
        }
      }
    }
    
    if (this.#grades[grade] === undefined) {
      this.#grades[grade] = [name];
    }
    else {
      this.#grades[grade].push(name);
      this.#grades[grade].sort();
    }
    
  }

  grade(grade) {
    return this.#grades[grade] ? [...this.#grades[grade]] : []
  }
}
