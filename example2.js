"use strict";
/* class Person {
  name: string;
  age: number;

  public constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p1: Person = new Person("Mark", 35);
console.log(p1);
*/
/*
class Person {
  public constructor(private _name: string, private age: number) {}

  get name() {
    
    console.log("get");
    return this._name + "Cho";
  }

  // set name(n: string) {
  //   console.log("set");
  //   this._name = n;
  // }
}

const p1: Person = new Person("Mark", 35);
console.log(p1.name); //get 을 하는 함수 getter
p1.name = "MH"; //set 을 하는 함수 setter
console.log(p1.name);*/
/*
// readonly 된 경우 초기 값 설정 하는 부분에서만 바꿀 수 있다! 1번 부분 또는 constructor와 같은 2번 부분
class Person {
  public readonly name: string = "Mark"; // 1
  private readonly country: string;

  public constructor(private _name: string, private age: number) { // 2
    this.country = "Korea";
  }

  hello(){
    this.country = "China";
  }
}

const p1: Person = new Person("Mark", 35);
console.log(p1.name); //get 을 하는 함수 getter
p1.name = "MH"; //set 을 하는 함수 setter
console.log(p1.name);
*/
// class => object
// {mark: 'male', jade: 'male'}
// {chloe: 'female', alex: 'male', anna: 'female'}
/*
class Students {
  // [index:string]: string;
  [index:string]: 'male' | 'female';

  mark: 'male' = 'male';
}

const a = new Students();

a.mark = "male";
a.jade = "male";

console.log(a);

const b = new Students();

b.chloe = "female";
b.alex = "male";
b.anna = "female";

console.log(b);*/
/*
class Person {
  private static CITY = "Seoul";
  public static hello() {
    console.log("안녕하세요", Person.CITY);
  }
}

const p1 = new Person();
// p1.hello();

const p2 = new Person();

Person.hello();
*/
/*
class Person {
  private static CITY = "Seoul";
  public hello() {
    console.log("안녕하세요", Person.CITY);
  }
  public change() {
    Person.CITY = "LA";
  }
}

const p1 = new Person();
p1.hello();

const p2 = new Person();
p2.hello();
p1.change();
p2.hello();*/
/*
class ClassName {
  private static instance: ClassName | null = null;
  public static getInstance(): ClassName {
    // ClassName으로 부터 만든 object 가 있으면 그것을 리턴
    // ClassName으로 부터 만든 object 가 없으면, 만들어서 리턴
    if (ClassName.instance === null) {
     ClassName.instance = new ClassName();
    }

    return ClassName.instance;
  }


  private constructor() {}
}

const a = ClassName.getInstance();
const b = ClassName.getInstance();

console.log( a === b);*/
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
    }
    printName() {
        console.log(this._name, this._age);
    }
}
// const p = new Parent("Mark", 35);
// p.print();
class Child extends Parent {
    constructor(age) {
        super('Mark Jr.', age);
        this.gender = "male";
        this.printName();
    }
}
const c = new Child(1);
c.print();
