import {Pipe, PipeTransform} from '@angular/core';
import { Team } from './team.model';

@Pipe({
  name: "masterPipe",
  pure: false
})


export class MasterPipe implements PipeTransform {

  transform(input: Team[], filterByMaster) {
    if (input) {
      var output: Team[] = [];
      if (filterByMaster === "all") {
        for (var i = 0; i < input.length; i++) {
          output.push(input[i]);
        }
        return output;
      } else if (filterByMaster === "highGamesWon") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].tCount > 15) {
            output.push(input[i]);
          }
        }
        return output;
      } else if (filterByMaster === "lowGamesWon") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].tCount < 10) {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    }
  }

}
