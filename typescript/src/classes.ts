class formaCanelada {
    saborMassa: string;
    saborRecheio: string;
    peso?: number;

    constructor(saborMassa: string, saborRecheio: string, peso: number) {
        this.saborMassa = saborMassa,
        this.saborRecheio = saborRecheio,
        this.peso = peso
    }
}

const boloChocolate = new formaCanelada("Chocolate", "Beijinho", 1.1);

console.log(boloChocolate);