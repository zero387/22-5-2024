class Person{

   private name:string;
    constructor(name:string){
        this.name = name;
    }
    //nơi khai báo các phương thức cho lớp person
    sayHello(){
        console.log("Hello " + `${this.name}`);
    }
    setName(name:string){
        this.name = name;
        console.log('setName ' + `${this.name}`);
    }
}

//khởi tạo đối tượng từ lớp person
let person1 = new Person("Huy");
console.log(person1);
person1.sayHello();
person1.setName('hoang');

// bai 1 
class Vehicle {
    name:string;
    year:number;
    company:string;

    constructor(name:string, year:number, company:string){
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
let Vehicle1 = new Vehicle('Vehicle1',2000,'Vehicle');
let Vehicle2 = new Vehicle('Vehicle2',2000,'Vehicle');

console.log(Vehicle1);
console.log(Vehicle2);

//bai 2
class Student {
    id:number;
    age:number;
    email:string;

    constructor(id:number, age:number, email:string){
        this.id = id;
        this.age = age;
        this.email = email;
    }
    getInfo(){
        console.log(`id: ${this.id}, age: ${this.age}, email: ${this.email}`);
    }
}

let listStudent:Student[] = [];

listStudent.push(new Student(1,20,'email'));
listStudent.push(new Student(2,20,'email'));
listStudent.push(new Student(3,20,'email'));

for (let i = 0; i < listStudent.length; i++) {
    listStudent[i].getInfo();
}

//bai 3

class Employee {
    name:string;
    company:string;
    phone:number;

    constructor(name:string, company:string, phone:number){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printlnfo(){
        console.log(`name: ${this.name}, company: ${this.company}, phone: ${this.phone}`);
    }
}

let employee1 = new Employee('hoang', 'kiem xoa', 9793292321)
employee1.printlnfo()

//bai 4
class Vehicle4 {
    public name:string;
    protected year:number;
    private company:string;
    readonly id:number;

    constructor(name:string, year:number, company:string, id:number){
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }

    public getInfo(){
        console.log(`name: ${this.name}, year: ${this.year}, company: ${this.company}, id: ${this.id}`);
    }
}

let Vehicle41 = new Vehicle4('Vehicle41',2000,'Vehicle4',1);
Vehicle41.getInfo()


// bai 5

class Department {
    public id : number;
    private name:string;
    private employee:string;

    constructor(id:number, name:string, employee:string){
        this.id = id;
        this.name = name;
        this.employee = employee;
    }

    describe(){
        console.log(`${this.id},${this.employee}`)
    }
}
let Department1 = new Department(1, 'Department','employee')
Department1.describe()

//bai 6
class Song {
    public id : number;
    private name : string;
    private length : number;

    constructor(id:number, name:string, length:number){
        this.id = id;
        this.name = name;
        this.length = length;
    }
    setName(name:string){
        this.name = name;
        console.log(`${this.name}`);
        
    }
    setLength(length:number){
        this.length = length;
        console.log(`${this.length}`);
    }

}

let Song1 = new Song(1, 'Song1', 100);

Song1.setName('Song1');

Song1.setLength(100);

/* //bai 7
class Book {
    private title: string;
    private author: string;
    private quantity: number;
    private id: number;

    constructor(title: string, author: string, quantity: number = 1, id: number) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
        this.id = id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public increaseQuantity(): void {
        this.quantity++;
    }

    public getId(): number {
        return this.id;
    }
}

class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        const existingBook = this.books.find(b => b.getTitle() === book.getTitle() && b.getAuthor() === book.getAuthor());
        if (existingBook) {
            existingBook.increaseQuantity();
        } else {
            this.books.push(book);
        }
    }

    public editBook(bookId: number, newTitle: string, newAuthor: string, newQuantity: number): void {
        const bookIndex = this.books.findIndex(book => book.getId() === bookId);
        if (bookIndex !== -1) {
            const editedBook = this.books[bookIndex];
            editedBook.title = newTitle;
            editedBook.author = newAuthor;
            editedBook.quantity = newQuantity;
            console.log(`Book with ID ${bookId} has been updated.`);
        } else {
            console.log(`Book with ID ${bookId} does not exist in the library.`);
        }
    }

    public searchBookByName(name: string): void {
        const foundBooks: Book[] = [];
        this.books.forEach(book => {
            if (book.getTitle().toLowerCase().includes(name.toLowerCase())) {
                foundBooks.push(book);
            }
        });

        if (foundBooks.length > 0) {
            console.log(`Books found with name '${name}':`);
            foundBooks.forEach((book, index) => {
                console.log(`${index + 1}. Title: ${book.getTitle()}, Author: ${book.getAuthor()}, Quantity: ${book.getQuantity()}`);
            });
        } else {
            console.log(`No books found with name '${name}'.`);
        }
    }

    public listBooks(): void {
        console.log("List of books:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. Title: ${book.getTitle()}, Author: ${book.getAuthor()}, Quantity: ${book.getQuantity()}`);
        });
    }
}

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1, 1);
const book2 = new Book("1984", "George Orwell", 1, 2);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 3, 3);
const book4 = new Book("The Catcher in the Rye", "J.D. Salinger", 4, 4);
const book5 = new Book("Moby Dick", "Herman Melville", 5, 5);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.addBook(book1);

library.listBooks();

library.searchBookByName("1984"); */

//bai 8

class Circle{
    private radius:number;

    constructor(radius:number){
        this.radius = radius;
    }

    public calculateArea():number{
        return Math.PI * this.radius * this.radius;
    }
    public calculatePerimeter():number{
        return 2 * Math.PI * this.radius;
    }
}

let circle1 = new Circle(10);
console.log(circle1.calculateArea());

console.log(circle1.calculatePerimeter());

//bai 9

class Rectangle{
    private width:number;
    private height:number;

    constructor(width:number, height:number){
        this.width = width;
        this.height = height;
    }

    public calculateArea2():number{
        return this.width * this.height;
    }
    public calculatePerimeter2():number{
        return 2 * (this.width + this.height);
    }
}
const myRectangle = new Rectangle(4, 6);
console.log(myRectangle.calculateArea2());
console.log(myRectangle.calculatePerimeter2());




// confirm bai 8 
class Book {
    title: string;
    author: string;
    quantity:number;

    constructor(title:string, author:string, quantity:number = 1){
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }

    public getTitle():string{
        return this.title;
    }

}

class Library {
    books: Book[] = [];

    public addBook(book: Book):void{
        let checkAddBook = this.books.findIndex(b => b.title === book.getTitle());
        if (checkAddBook !== -1) {
           this.books[checkAddBook].quantity += 1
        }else {
            this.books.push(book);
        }
    }

    listBooks(){
        this.books.forEach((books, index)=>{
            console.log(`${books.title} , ${books.author},${books.quantity}`);
        })
    }
}

const book1 = new Book("To Kill a Mockingbird", "Harper Lee");
const book2 = new Book("1984", "George Orwell");

const Library1 = new Library();

Library1.addBook(book1);
Library1.addBook(book2);
Library1.addBook(book1);
Library1.addBook(book1);
Library1.listBooks();