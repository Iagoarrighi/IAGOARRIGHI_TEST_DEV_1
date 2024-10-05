package backend

class BootStrap {

    CompanyService companyService

    def init = { servletContext ->

        Company.withTransaction {
            new Company(name: 'Petrobras', segment: 'Energy').save(flush: true) 
            new Company(name: 'Pfizer', segment: 'Pharmaceuticals').save(flush: true) 
            new Company(name: 'Adidas', segment: 'Retail').save(flush: true) 
        }
    }
    def destroy = {
    }
}
