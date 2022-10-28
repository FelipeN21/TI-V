import { Planta } from './planta.model';

export class Plantas {
  static MANJERICAO: Planta = {
    nome: 'Manjericão',
    luminosidade: 0,
    umidade: 0,
    temperatura: 0,
  };

  static SUCULENTA: Planta = {
    nome: 'Suculenta',
    luminosidade: 0,
    umidade: 0,
    temperatura: 0,
  };

  static CACTO: Planta = {
    nome: 'Cacto',
    luminosidade: 0,
    umidade: 0,
    temperatura: 0,
  };

  static ORQUIDEA: Planta = {
    nome: 'Orquídea',
    luminosidade: 0,
    umidade: 0,
    temperatura: 0,
  };

  static ALFACE: Planta = {
    nome: 'Alface',
    luminosidade: 0,
    umidade: 0,
    temperatura: 0,
  };

  static PLANTAS: Planta[] = [
    this.MANJERICAO,
    this.SUCULENTA,
    this.CACTO,
    this.ORQUIDEA,
    this.ALFACE,
  ];
}
