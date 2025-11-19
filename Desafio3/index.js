class name {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    ataque(nome, idade, tipo){
        this.ataque
        switch(this.tipo){
            case "mago":
                this.ataque = "magia"
            case "guerreiro":
                this.ataque = "espada"
            case "monge":
                this.ataque = "artes marciais"
            case "ninja":
                this.ataque = "shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}
const guerreiro = new name("Luis", 17, "ninja")
guerreiro.ataque()