package backend

import grails.gorm.transactions.Transactional

@Transactional
class CompanyService {

    def getCompanies() {
        return Company.list()
    }
}
