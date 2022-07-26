class Person{
    constructor(name,height,color,city){
        this.name = name;
        this.height = height;
        this.color = color;
        this.city = city;
    }
    getPerson(){
        let data = `
        Name : ${this.name}
        Height :${this.height}
        Color : ${this.color} 
        City : ${this.city}
        `
        return data;
    }
    getdance(){
        let data = `${this.name} likes to dance!`;
        return data;
    }
    getjump(){
        let data = `${this.name} likes to jump!`;
        return data;
    }
    setcall(){
        let data = `${this.name} calls you Senorita!`;
        return data;
    }
    seteat(){
        let data = `${this.name} gives you Watermelon sugar!`;
        return data;
    }
}
let shawn = new Person("Shawn Mendes",1.72,"fair","texas");
let harry = new Person("Harry Styles",1.69,"Pinkish white","New York");
console.log(shawn.getPerson());
console.log(shawn.getdance());
console.log(shawn.setcall());
console.log(harry.getPerson());
console.log(harry.getjump());
console.log(harry.seteat());
