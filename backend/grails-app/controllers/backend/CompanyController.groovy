package backend

import grails.converters.JSON


class CompanyController {

    CompanyService companyService

    def index() { 
        render companyService.getCompanies() as JSON
    }
}
