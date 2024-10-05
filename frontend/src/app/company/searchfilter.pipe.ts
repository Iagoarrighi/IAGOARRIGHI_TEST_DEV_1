import { Pipe, PipeTransform } from '@angular/core';
import { Company } from '../Company';

@Pipe({
  name: 'searchfilter',
  standalone: true
})
export class SearchfilterPipe implements PipeTransform {

  transform(Company: Company [], searchValue: string): Company[] {

    if(!Company || !searchValue){
      return Company;
    }
    return Company.filter(company => 
      company.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      company.segment.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
  }

}
