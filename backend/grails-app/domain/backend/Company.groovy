package backend

class Company {

    String name
    String segment

    static constraints = {
        name blank: false, nullable: false
        segment blank: false, nullable: false
    }
}
