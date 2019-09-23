const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
    //get a list of all accounts
    accounts = await web3.eth.getAccounts();
        
    //Use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ from: accounts[0], gas: '1000000' })
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
         
    });
})



// class Car {
//     park() {
//         return 'stopped';
//     }

//     drive() {
//         return 'vroom';
//     }
// }

// let car;

// beforeEach(() => {
//   car = new Car();
// }) 
    

// describe('Car', () => {
//     it('Can park', () => {
//         assert.equal(car.park(), 'stopped');
//     });

//     it('can drive', () => {
//         assert.equal(car.drive(), 'vroom');
//     })
// });

//  describe("1:string"), (2:arrowFunction) => {
//     3: instance of function to test
//     4: it("4: string"), (5:arrowFunction) => {
//         6: assert.equal(7:functionto.test(), '8:what function should return')
//     }
// }