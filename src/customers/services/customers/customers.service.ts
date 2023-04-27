import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'rasheed@gmail.com',
      name: 'Rasheed',
    },
    {
      id: 2,
      email: 'dammy@gmail.com',
      name: 'Dammy',
    },
    {
      id: 3,
      email: 'basit@gmail.com',
      name: 'Basit',
    },
    {
      id: 4,
      email: 'sheriff@gmail.com',
      name: 'Sheriff',
    },
    {
      id: 5,
      email: 'mubarak@gmail.com',
      name: 'Mubarak',
    },
    {
      id: 6,
      email: 'samia@gmail.com',
      name: 'Samia',
    },
    {
      id: 7,
      email: 'sukurah@gmail.com',
      name: 'Shukurah',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }

  getCustomers() {
    return this.customers;
  }
}
