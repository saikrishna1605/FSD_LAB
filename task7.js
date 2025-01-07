const car = {
    make: "Generic",
    model: "GenericModel",
    year: 2000,
    getDetails: function() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
};
const electricCar = Object.create(car);
electricCar.batteryCapacity = "75 kWh";
electricCar.getBatteryInfo = function() {
    return `Battery Capacity: ${this.batteryCapacity}`;
};
const myElectricCar = Object.create(electricCar);
myElectricCar.make = "Volkswagen";
myElectricCar.model = "Virtus";
myElectricCar.year = 2021;
myElectricCar.batteryCapacity = "120 kWh";
console.log(myElectricCar.getDetails());
console.log(myElectricCar.getBatteryInfo());