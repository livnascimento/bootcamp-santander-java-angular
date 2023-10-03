interface Robot {
    id: number;
    nome: string;
}

class RobotClass implements Robot {
    id: number;
    nome: string;

    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
    }
}

const robotInstance = new RobotClass(1, "Robô1");
console.log(robotInstance.id); // 1
console.log(robotInstance.nome); // "Robô1"