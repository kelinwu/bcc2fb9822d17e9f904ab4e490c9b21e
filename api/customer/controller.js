const customersRepo = require('../../lib/customersRepository'),
      util = require('util');
     //stateRepo = require('../../lib/s')

//seeding data
exports.seedDataBase = () => {
    customersRepo.seeder();
}

exports.getAll = (req, res) => {

    customersRepo.getAllCustomers((err, data) => {
            if (err) {
                console.log(' errror: ' + util.inspect(err));
                return res.json(null);
            } else {
                console.log("*****get all customers");
                res.json(data);
            }
        });
};

exports.getOne = (req, res) =>{
    const id = req.params.id;
    customersRepo.getOneCustomer(id, (err, customer) => {
        if(err) {
            console.log('error: ' + util.inspect(err));
            return res.json(null);
        } else {
            console.log("***get customer by id:" + id);
            res.json(customer);
        }
    })
}