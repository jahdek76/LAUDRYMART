import { faker } from '@faker-js/faker';

// Generate 50 sample customers
export const customers = Array.from({ length: 50 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  address: faker.location.streetAddress(),
  totalOrders: faker.number.int({ min: 1, max: 100 }),
  totalSpent: faker.number.float({ min: 10, max: 1000, fractionDigits: 2 }),
}));

// Generate 50 sample orders
export const orders = Array.from({ length: 50 }, () => ({
  id: faker.string.uuid(),
  customerId: faker.helpers.arrayElement(customers).id,
  date: faker.date.recent(),
  status: faker.helpers.arrayElement(['Pending', 'Processing', 'Completed', 'Cancelled']),
  items: faker.number.int({ min: 1, max: 10 }),
  total: faker.number.float({ min: 5, max: 200, fractionDigits: 2 }),
}));

// Generate 50 sample machines
export const machines = Array.from({ length: 50 }, () => ({
  id: faker.string.uuid(),
  name: `${faker.helpers.arrayElement(['Washer', 'Dryer'])} ${faker.number.int({ min: 1, max: 20 })}`,
  status: faker.helpers.arrayElement(['Running', 'Idle', 'Maintenance']),
  efficiency: faker.number.float({ min: 70, max: 100, fractionDigits: 1 }),
  lastMaintenance: faker.date.past(),
}));

// Generate 50 sample inventory items
export const inventory = Array.from({ length: 50 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  category: faker.helpers.arrayElement(['Detergent', 'Fabric Softener', 'Bleach', 'Hangers', 'Bags']),
  quantity: faker.number.int({ min: 0, max: 1000 }),
  reorderPoint: faker.number.int({ min: 10, max: 100 }),
  unitPrice: faker.number.float({ min: 1, max: 50, fractionDigits: 2 }),
}));

// Generate 50 sample staff members
export const staff = Array.from({ length: 50 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  position: faker.helpers.arrayElement(['Manager', 'Operator', 'Cleaner', 'Customer Service']),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  hireDate: faker.date.past(),
}));

// Generate 50 sample financial transactions
export const finances = Array.from({ length: 50 }, () => ({
  id: faker.string.uuid(),
  date: faker.date.recent(),
  type: faker.helpers.arrayElement(['Income', 'Expense']),
  category: faker.helpers.arrayElement(['Sales', 'Supplies', 'Maintenance', 'Salary', 'Utilities']),
  amount: faker.number.float({ min: 10, max: 5000, fractionDigits: 2 }),
  description: faker.lorem.sentence(),
}));