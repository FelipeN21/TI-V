import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  exportToCsv(data: number[], value: number[], unidade: string, nome: string) {
    let compactedData = this.compactData(data, 'data');
    let compactedValues = this.compactData(value, 'value');

    let csv = 'Tempo;' + unidade + '\n';
    for (
      let i = 0;
      i <
      (compactedData.length < compactedValues.length
        ? compactedData.length
        : compactedValues.length);
      i++
    ) {
      csv += compactedData[i] + ';' + compactedValues[i] + '\n';
    }
    const blob = new Blob([csv], { type: 'text/csv' });
    FileSaver.saveAs(blob, 'historico' + nome + '.csv');
  }

  compactData(array: number[], type: 'data' | 'value'): number[] {
    let compactableSizes = [30, 100, 1000, 10000];
    let newArray: number[] = [];

    if (array.length > compactableSizes[3]) {
      if (type === 'value') {
        for (let i = 0; i < array.length; i = i + 500) {
          let avg = 0;
          for (let j = 0; j < 500; j++) {
            avg += array[i + j];
          }
          newArray.push(Math.floor(avg / 500));
        }
      } else {
        let i;
        for (i = 0; i < array.length - 500; i = i + 500) {
          newArray.push(i + 500);
        }
      }
    } else if (array.length > compactableSizes[2]) {
      if (type === 'value') {
        for (let i = 0; i < array.length; i = i + 100) {
          let avg = 0;
          for (let j = 0; j < 100; j++) {
            avg += array[i + j];
          }
          newArray.push(Math.floor(avg / 100));
        }
      } else {
        for (let i = 0; i < array.length - 100; i = i + 100) {
          newArray.push(i + 100);
        }
      }
    } else if (array.length > compactableSizes[1]) {
      if (type === 'value') {
        for (let i = 0; i < array.length; i = i + 10) {
          let avg = 0;
          for (let j = 0; j < 10; j++) {
            avg += array[i + j];
          }
          newArray.push(Math.floor(avg / 10));
        }
      } else {
        let i;
        for (i = 0; i < array.length - 10; i = i + 10) {
          newArray.push(i + 10);
        }
      }
    } else if (array.length > compactableSizes[0]) {
      if (type === 'value') {
        for (let i = 0; i < array.length; i = i + 5) {
          let avg = 0;
          for (let j = 0; j < 5; j++) {
            avg += array[i + j];
          }
          newArray.push(Math.floor(avg / 5));
        }
      } else {
        for (let i = 0; i < array.length - 5; i = i + 5) {
          newArray.push(i + 5);
        }
      }
    } else {
      return array;
    }
    return newArray;
  }
}
