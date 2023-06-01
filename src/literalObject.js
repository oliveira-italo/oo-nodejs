const user = {
    nome: "Juliana",
    email: "email@com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: "true",
    exibirInfos: function () {
        console.log(this.nome, this.email);
    },
};

const admin = {
    nome: "Mariana",
    email: "m@com",
    nascimento: "2021/01/01",
    role: "admin",
    ativo: "true",
    criarCurso() {
        console.log("curso criado");
    },
};

// (objeto que herdará propriedades, objeto mãe)
Object.setPrototypeOf(admin, user)
admin.criarCurso(); // método próprio
admin.exibirInfos(); // método herdado