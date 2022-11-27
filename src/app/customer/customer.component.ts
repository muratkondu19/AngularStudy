import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
    //nesne kullanılabilmesi için import edilmesi gerekir.
    customers: Customer[] = []
    selectedCustomer: Customer;

    //ngOnInit uygulamanın load eventidir.
    ngOnInit() {
        this.customers = [{
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                age: 18,
            },
            {
                id: 2,
                firstName: 'Jane',
                lastName: 'Doe',
                age: 19,
            }, {
                id: 3,
                firstName: 'John',
                lastName: 'Doe',
                age: 20,
            }
        ]
    }

    //Event Binding
    selectCustomer(customer: Customer) {
        // alert(customer.firstName)
        this.selectedCustomer = customer;
        //gönderilen customer değerini this.selectedCustomer'a atama
    }
}