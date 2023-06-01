function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function () {
        return `${this.nome}, ${this.email}`;
    };
}

//new
const novoUser = new User("Juliana", "j@j.com");
console.log(novoUser.exibirInfos());

//Object.create

function Admin(role) {
    User.call(this, "Ademir", "a@a.com"); // chama o construtor da classe mãe, equivale ao 'super' do java
    this.role = role || "estudante";
}

Admin.prototype = Object.create(User.prototype); // seta a herança de protótipo, NÃO FAZER ISSO NA VIDA REAL, não setar prototype manualmente
const novoAdmin = new Admin("admin");
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.role);

//

const user = {
    init: function (nome, email) {
        this.nome = nome;
        this.email = email;
    },
    exibirInfos: function () {
        return this.nome;
    },
};

const novoUsuario = Object.create(user);
novoUsuario.init("Claudiomir", "c@c.com")
console.log(novoUsuario.exibirInfos());
console.log(user.isPrototypeOf(novoUsuario));

