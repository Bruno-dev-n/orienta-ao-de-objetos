function Maquina(modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;
}

Maquina.prototype.displayInfo = function() {
    console.log(`Modelo: ${this.modelo}, Ano: ${this.ano}`);
};

function Notebook(modelo, ano, processador) {
    Maquina.call(this, modelo, ano);
    this.processador = processador;
}

Notebook.prototype = Object.create(Maquina.prototype);
Notebook.prototype.constructor = Notebook;

Notebook.prototype.displayInfo = function() {
    Maquina.prototype.displayInfo.call(this);
    console.log(`Processador: ${this.processador}`);
};

function Smartphone(modelo, ano, memoria) {
    Maquina.call(this, modelo, ano);
    this.memoria = memoria;
}

Smartphone.prototype = Object.create(Maquina.prototype);
Smartphone.prototype.constructor = Smartphone;

Smartphone.prototype.displayInfo = function() {
    Maquina.prototype.displayInfo.call(this);
    console.log(`Memória: ${this.memoria}`);
};

const notebook1 = new Notebook('Samsung Galaxy Book', 2020, 'Intel i7');
const smartphone1 = new Smartphone('Samsung Galaxy S21', 2021, '128GB');
const notebook2 = new Notebook('Samsung Galaxy Book Pro', 2019, 'Intel i5');

notebook1.displayInfo();
smartphone1.displayInfo();
notebook2.displayInfo();

