// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou poder desconhecido';
      }
      return `O ${this.tipo} atacou usando ${ataque}`;
    }
  }
  
  const heroiMago = new Heroi('Merlin', 100, 'mago');
  console.log(heroiMago.atacar());
  
  const heroiGuerreiro = new Heroi('Arthur', 35, 'guerreiro');
  console.log(heroiGuerreiro.atacar()); 
  
  const heroiMonge = new Heroi('Lee', 50, 'monge');
  console.log(heroiMonge.atacar()); 
  
  const heroiNinja = new Heroi('Hattori', 28, 'ninja');
  console.log(heroiNinja.atacar()); 
  
  const heroiDesconhecido = new Heroi('Desconhecido', 1000, 'desconhecido');
  console.log(heroiDesconhecido.atacar()); 
  