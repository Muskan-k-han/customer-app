import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customer:Customer;

  addCustomer(form:any){
    let data=form.value;
    let name=data.name;
    
    this.customer=new Customer(-1,name);
    let successFun = (customerArg: Customer) => {
      this.customer = customerArg;
    };

    let errFun = err => {
      console.log("err in addusercomponent " + err.message);
    }

    let observable: Observable<Customer> = this.service.addCustomer(this.customer);
    observable.subscribe(successFun, errFun);
  }
  
  getDate (arrivalMillis:number ){
    let date = new Date(arrivalMillis);
    return date;
  }

}


}
