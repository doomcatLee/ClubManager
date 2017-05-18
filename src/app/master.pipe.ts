import {Pipe, PipeTransform} from '@angular/core';
import { Team } from './team.model';

@Pipe({
  name: "masterPipe",
  pure: false
})


export class MasterPipe implements PipeTransform {

  transform(input: Team[]) {
    var output: Team[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].name === "SKT T1") {
        output.push(input[i]);
      }
    }
    return output;
  }


}
