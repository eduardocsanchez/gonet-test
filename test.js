
const salesOrderss = [{

  'id': 'S1',

  'created': '2020-01-02',

  'quantity': 6

}, {

  'id': 'S2',

  'created': '2020-11-05',

  'quantity': 2

}, {

  'id': 'S3',

  'created': '2019-12-04',

  'quantity': 3

}, {

  'id': 'S4',

  'created': '2020-01-20',

  'quantity': 2

}, {

  'id': 'S5',

  'created': '2019-12-15',

  'quantity': 9

}];


//This is test suite
describe("Is an array Objects", function () {
  it("test", function () {
    expect(array).toContain(jasmine.objectContaining(salesOrderss));
    //expect(array).toEqual(salesOrderss.arrayContaining(["id", "created", "quantity"]));
  });
});


describe("jasmine.objectContaining", function () {
  var obj;

  beforeEach(function () {
    obj = {
      id: 'S1',

      created: '2020-01-02',

      quantity: 6
    };
  });

  it("matches objects with the expect key/value pairs", function () {
    expect(obj).toEqual(jasmine.objectContaining({
      id: "S1",
      created: "2020-01-02",
      quantity: 6
    }));
 
  });
});

var obj = [];
describe("is an empy object", function () {
  it("test for empty object", function () {
    expect(obj.length).toBe(0);
  });
});

describe("is not an empy object", function () {
  it("test for not empty object", function () {
    expect(salesOrderss.length).toBeGreaterThan(0);
  });
});