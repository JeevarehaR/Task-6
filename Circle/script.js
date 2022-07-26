class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        let data = `Radius : ${this.radius};`
        return data;
    }
    setRadius(){
        let data = `Radius : ${this.radius = 3.0};`
        return data;
    }
    getColor(){
        let data = `Color : ${this.color};`
        return data;
    }
    setColor(){
        let data = `Color : ${this.color = "blue"};`
        return data;
    }
    toString(){
        let data = `Circle[radius = ${this.radius}, color = ${this.color}]`;
        return data;
    }
    getArea(){
        let data = `Area : ${(Math.PI * this.radius * this.radius).toFixed(3)} sq. units.`;
        return data;
    }
    getCircumference(){
        let data = `Circumference : ${(2 * Math.PI * this.radius).toFixed(2)} units.`;
        return data;
    }
}
let circle = new Circle(1.0,"red");
console.log(circle.getRadius());
console.log(circle.setRadius());
console.log(circle.getColor());
console.log(circle.setColor());
console.log(circle.toString());
console.log(circle.getArea());
console.log(circle.getCircumference());


