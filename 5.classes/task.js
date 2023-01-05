//Задача №1. Печатное издание
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
      return;
    } else if (newState > 100) {
      this._state = 100;
      return;
    }
    this._state = newState;
  }

  get state () {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor (name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor (name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor (name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Задача №2. Библиотека

class Library {
  constructor (name, books) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30 ) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let result = this.books.find((findBook) => findBook[type] === value);
    if (result === undefined) {
      return null;
    } else {
      return result;
    }
  }

  giveBookByName(bookName) {
    let result = this.books.find((findBook) => findBook['name'] === bookName);
    if (result === undefined) {
      return null;
    } else {
      let index = this.books.findIndex((findBook) => (findBook === result));
      this.books.splice(index, 1);
      return result;
    }
  }
}

//Задача №3. Журнал успеваемости
class Student {
  marks ={};

  constructor (name) {
    this.name = name;
  }

  addMark (mark, subject) {
    if (mark < 1 || mark > 5) {
      console.log ("Ошибка, оценка должна быть числом от 1 до 5");
      return;
    } else if (this.marks[subject] === undefined) {
      this.marks[subject] = [];
      this.marks[subject].push(mark);
    } else {
      this.marks[subject].push(mark);
    }
  }

  getAverageBySubject(subject) {
    if (this.marks[subject] === undefined) {
      return console.log(`Предмета ${subject} нет`);
    } else if (this.marks[subject] != undefined || this.marks[subject].length > 0) {
      let sum = this.marks[subject].reduce((a, subjectMark) => a += subjectMark);
      return sum / this.marks[subject].length;
    }
  }

  getAverage () {
    let sum = 0;
    let length = 0
    for (let key in this.marks) {
      sum += this.marks[key].reduce((a, subjectMark) => a +=subjectMark);
      length += this.marks[key].length;
    }
    return sum / length;
  }

  exclude (reason){
    delete this.marks;
    this.excluded = reason;
    console.log(reason);
  }
}