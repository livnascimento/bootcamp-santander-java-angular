// tipos primitivos
let ligado: boolean = true;
let nome: string = "Lâmpada";
let watts: number = 6;

// tipos especiais
let marca: undefined;
let economica: null

// tipos abrangentes
let descricao: any = "Lâmpada de led";
function ligarLampada():void {
    if (!ligado) ligado = true;
}