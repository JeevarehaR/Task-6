class Uber{
    constructor(customer_name,display_name,distance,product_id,high_estimate,low_estimate,duration,estimate,currency_code){
        this.customer_name  = customer_name;
        this.display_name = display_name;
        this.distance = distance;
        this.product_id = product_id;
        this.high_estimate = high_estimate;
        this.low_estimate = low_estimate;
        this.duration = duration;
        this.estimate = estimate;
        this.currency_code = currency_code;
    }
    getUber(){
        let data = `
        Customer Name : ${this.customer_name},
        Display Name : ${this.display_name},
        Distance : ${this.distance},
        Product id : ${this.product_id},
        High estimate : ${this.high_estimate},
        Low estimate : ${this.low_estimate},
        Duration : ${this.duration},
        Estimate : ${this.estimate},
        Currency code : ${this.currency_code}
        ` 
        return data;
    }
    getCost(){
        let data = `Total Uber Charges for ${this.customer_name} : Rs.${this.distance * ((this.low_estimate + this.high_estimate) / 2)} for ${this.distance} km`;
        return data;
    }
}

let ride1 = new Uber("Robert","POOL",6.17,"26546650-e557-4a7b-86e7-6a3942445247",15,13,1080,"$13-15","USD");
let ride2 = new Uber("Kristen","uberX",6.17,"a1111c8c-c720-46c3-8534-2fcdd730040d",17,13,1120,"$13-17","USD");
let ride3 = new Uber("Jacob","SUV",6.17,"8920cb5e-51a4-4fa4-acdf-dd86c5e18ae0",63,50,1080,"$50-63","USD");
console.log(ride1.getUber());
console.log(ride1.getCost());
console.log(ride2.getUber());
console.log(ride2.getCost());
console.log(ride3.getUber());
console.log(ride3.getCost());