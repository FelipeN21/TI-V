import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  exportToCsv(data: number[], value: number[], unidade: string, nome: string) {
    let csv = 'Tempo;' + unidade + '\n';
    for (
      let i = 0;
      i < (data.length < value.length ? data.length : value.length);
      i++
    ) {
      csv += data[i] + ';' + value[i] + '\n';
    }
    const blob = new Blob([csv], { type: 'text/csv' });
    FileSaver.saveAs(blob, 'historico' + nome + '.csv');
  }
}
