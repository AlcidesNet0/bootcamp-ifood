// Ativando o popover

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// Criação da classe Hero com o seu construtor
class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;

        // Estrutura de decisão para definir qual arma o herói irá usar de acordo com o seu tipo

        if(type === "guerreiro") {
            this.attack = "uma espada";
        } else if(type === "mago") {
            this.attack = "magia";
        } else if(type === "monge") {
            this.attack = "artes marciais";
        } else if(type === "ninja") {
            this.attack = "shuriken";
        }
    }

    atacar() {
        return `O ${this.type} atacou usando ${this.attack}`;
    }
}

// Instanciação dos objetos da classe

const warrior = new Hero("Duncan, o Temido", 25, "guerreiro");
const wizard = new Hero("Gandalf, o Cinzento", 25, "mago");
const monk = new Hero("Buda, o Sábio", 25, "monge");
const ninja_ = new Hero("Xin Zhao, o Ágil ", 25, "ninja");


// Adicionando os objetos em um array para fins de percorrê-los no loop

const heroList = [warrior, wizard, monk, ninja_];

// Capturando os popovers utilizados para que possam ser modificados

const guerreiro = bootstrap.Popover.getOrCreateInstance('#warrior');
const mago = bootstrap.Popover.getOrCreateInstance('#wizard');
const monge = bootstrap.Popover.getOrCreateInstance('#monk');
const ninja = bootstrap.Popover.getOrCreateInstance('#ninja');

// Adicionando os objetos em um array para fins de percorrê-los no loop

const heroPopoverList = [guerreiro, mago, monge, ninja];


// Criação de um loop 'for' para percorrer todos os popovers e adicionar seus conteúdos com as informações de todos os objetos;

for(let i = 0; i < heroList.length; i++) {
    heroPopoverList[i].setContent({
        '.popover-header': heroList[i].name,
        '.popover-body': heroList[i].atacar()
    })
}