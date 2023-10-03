"use strict";
class RobotClass {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}
const robotInstance = new RobotClass(1, "Robô1");
console.log(robotInstance.id); // 1
console.log(robotInstance.nome); // "Robô1"
