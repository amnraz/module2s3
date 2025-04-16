function createCar(make, model, year,) {
    return {
        make: make,
        model: model,
        year: year,
        describeCar:function(){
            console.log(`This car is a ${year} ${make} ${model}`)
        }

    }
}
createCar()
const car1 = createCar("Toyota", "Camry", 2022);
car1.describeCar();
// Output: This car is a 2022 Toyota Camry.
let car2 = createCar("Renault","kwid",2016 )
car2.describeCar()