export default class User {
    #nome;
    #sobrenome;
    #email;
    #nascimento;
    #role;
    #ativo;
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante";
        this.#ativo = ativo;
    }

    get role() {
        return this.#role;
    }

    get nome() {
        return this.#nome;
    }

    get sobrenome() {
        return this.#sobrenome;
    }

    set nome(nomeInteiro) {
        if (nomeInteiro === "") {
            throw new Error("nome inválido");
        }
        let [nome, ...sobrenome] = nomeInteiro.split(" ");
        sobrenome = sobrenome.join(" ");
        this.#nome = nome;
        this.#sobrenome = sobrenome;
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}`;
    }
}
