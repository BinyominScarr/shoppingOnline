import { Injectable } from '@angular/core';

@Injectable()
export class IdValidationService {

  weightArray = [];
  result = 0;
  finalResult: boolean;

  idValidator(id) {

    id = String(id).trim();

    id = id.length < 9 ? ('00000000' + id).slice(- 9) : id;

    for (let i = 0; i < 9; i++) {

      i % 2 === 0 ? this.weightArray[i] = id[i] * 1 : this.weightArray[i] = id[i] * 2;

    }

    for (let i = 0; i < this.weightArray.length; i++) {

      if (this.weightArray[i] > 9) {

        const numOne = String(this.weightArray[i])[0];
        const numTwo = String(this.weightArray[i])[1];

        this.weightArray[i] = Number(numOne) + Number(numTwo);

      }

      this.result += this.weightArray[i];

    }

    this.finalResult = (this.result % 10 === 0) ? true : false;

    return this.result;

  }

}
