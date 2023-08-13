import { inject, register } from "./EasyDI"

abstract class Animal {
    abstract makeSound(): void
}

class Cat extends Animal {
    
    makeSound(): void {
        console.log("Meow")
    }

}

class Dog extends Animal {
    
    makeSound(): void {
        console.log("Wouf")
    }

}

register("cat", () => new Cat())
register("dog", () => new Dog())

const cat: Animal = inject("cat")
const dog: Animal = inject("dog")

cat.makeSound()
dog.makeSound()