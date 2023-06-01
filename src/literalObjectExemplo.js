const user2 = {
    nome: "Mariana",
    email: "email@com",
    nascimento: "2021/01/01",
    role: "admin",
    ativo: "true",
    exibirInfos: function () {
        console.log(this.nome, this.email);
    },
};

const user = {
    nome: "Juliana",
    email: "email@com",
    nascimento: "2021/01/01",
    role: "admin",
    ativo: "true",
    exibirInfos: function () {
        console.log(this.nome, this.email);
    },
    executaFuncao: function (externalFunction) {
        externalFunction.apply(user, [this.nome, this.email]);
    },
};

// user.exibirInfos()
// const exibir = user.exibirInfos
// exibir()
const exibir = function () {
    console.log(this.nome);
};

// atrelar função a um contexto usando bind
const exibirNome = exibir.bind(user);
exibirNome();

// atrelar função a um contexto usando call
exibir.call(user);
// o método de um objeto pode ser executado em um objeto externo - bruxaria do JS
user.exibirInfos.call(user2);

// atrelar função a um contexto usando apply
function exibeMensagem(nome, email) {
    console.log("bruxaria do apply", nome, email)
}
user.executaFuncao(exibeMensagem)