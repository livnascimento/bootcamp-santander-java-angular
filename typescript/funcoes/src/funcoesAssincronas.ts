async function detalharUsuario(id: number): Promise<Object | null> {
    const usuario: Object | null = await new Promise((resolve) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nome: 'Usuário de Exemplo' });
            } else {
                resolve(null); 
            }
        }, 1000);
    });

    return usuario;
}

const detalharUsuarioArrow = async (id: number): Promise<Object | null> => {
    const usuario: Object | null = await new Promise((resolve) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nome: 'Usuário de Exemplo' });
            } else {
                resolve(null); 
            }
        }, 1000);
    });

    return usuario;
}