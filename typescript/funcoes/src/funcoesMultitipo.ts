function concatenar(a: string | number, b: string | number): string {
  return `${a}${b}`;
}

const resultadoConcatenacao: string = concatenar('Hello', 123);