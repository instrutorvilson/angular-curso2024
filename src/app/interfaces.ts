interface TProduto {
    id?: Number
    descricao: string,
    preco?: Number ,
    estoque?: Number
}

interface TCliente {
    id: Number
    nome: string
}

export  { TProduto, TCliente }