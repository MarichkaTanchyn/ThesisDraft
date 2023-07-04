const validateRequest = require('../middleware/validateRequest');
// const {Company, Customer, Person} = require('../models');
const Customer = require("../models/customer");
const Person = require("../models/person")

exports.getCompanyCustomers = [validateRequest(['CompanyId'],[]),  async (req, res, next) => {
    try {
        const Customers = await Customer.findAll({
            include: [{
                model: Person, required: true, where: {
                    CompanyId: req.params.CompanyId
                }
            }]
        })

        res.status(200).send(Customers)

    } catch (err) {
        next(err);
    }

}]

exports.addCustomer = [validateRequest(['CompanyId', ],[]), async (req, res, next) => {
    try {
        const customer = await Customer.create({
            name: req.body.name,
            description: req.body.description,
            companyNumber: req.body.companyNumber,
            country: req.body.country,
            city: req.body.city,
            street: req.body.street,
            postalCode: req.body.postalCode,
            nip: req.body.nip,
            CompanyId: req.params.CompanyId,
            Person: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                middleName: req.body.middleName,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
                CompanyId: req.params.CompanyId
            }
        }, {
            include: [Person]
        })
        res.status(200).send(customer)

    } catch (err) {
        next(err);
    }
}]