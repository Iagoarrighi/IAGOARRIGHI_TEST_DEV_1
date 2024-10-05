import { Component, OnInit} from "@angular/core";
import { CompanyService } from "../services/company.service";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Company } from "../Company";
import { SearchfilterPipe } from "./searchfilter.pipe";


@Component({
  selector: "app-company",
  standalone: true,
  imports: [CommonModule, FormsModule, SearchfilterPipe] ,
  templateUrl: "./company.component.html",
  styleUrl: "./company.component.scss",
  providers: [CompanyService]
})
export class CompanyComponent {
  companies: Company[] = [];
  filterText: string = '';

  constructor(private companyService: CompanyService) {}

  // ngOnInit() {
  //   this.fetchCompanies();
  // }

  fetchCompanies() {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
      console.log("companies:",this.companies);
      // this.filterCompanies();
      // console.log(this.filteredCompanies);
    }, (error) => {
      console.log(error);
    });
  }

  

  // filterCompanies() {
  //   this.filteredCompanies = this.companies.filter(company => {
  //     const searchText = this.filterText.toLowerCase();
  //     return company.name.toLowerCase().includes(searchText) || company.address.toLowerCase().includes(searchText);
  //   });
  // }
}