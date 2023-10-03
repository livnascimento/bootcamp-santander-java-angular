// superclasse
class Animal {
    constructor(public nome: string, public idade: number) { }

    emitirSom() {
        console.log("Um som genérico de animal.");
    }
}

// subclasse
class Cachorro extends Animal {
    constructor(nome: string, idade: number, public raca: string) {
        super(nome, idade);
    }

    emitirSom() { // exemplo de sobrescrita (override)
        console.log("Latindo... Woof! Woof!");
    }

    mostrarRaca() {
        console.log(`Sou um cachorro da raça ${this.raca}.`);
    }
}

// exemplo de uso
const meuCachorro = new Cachorro("Rex", 3, "Labrador");
console.log(`Nome: ${meuCachorro.nome}`);
console.log(`Idade: ${meuCachorro.idade}`);
meuCachorro.emitirSom(); // chama o método sobrescrito
meuCachorro.mostrarRaca(); 
