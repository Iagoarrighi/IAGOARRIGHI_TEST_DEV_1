import { Component } from '@angular/core';
import { CompanyService } from './services/company.service';
import { Company } from './Company';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  candidate = 'Iago Arrighi Diogo';

  companies: Company[];
  searchValue: string;
  
  
  constructor(private companyService: CompanyService){}
  ngOnInit() {
        
  }
  listComp(){
    this.companyService.getCompanies().subscribe((res:Company[]) =>{
      this.companies= res})
    
  }
}
