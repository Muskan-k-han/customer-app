import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allcustomer',
  templateUrl: './allcustomer.component.html',
  styleUrls: ['./allcustomer.component.css']
})
export class AllcustomerComponent implements OnInit {

  customers:Customer[];

  constructor(private service:CustomerService) {
    let observable:Observable<Customer[]>=service.getAllCustomer();
    observable.subscribe( customerArg=>{
      this.customers=customerArg;
    });
   }

  ngOnInit(): void {
  }

  deleteCustomer(customerId:Number){
    let observable=this.service.deleteCustomer(customerId);
    observable.subscribe(result=>{this.deleteId(customerId);
    });
  }

  deleteId(customerId:Number):void{
    for(let i=0;i<this.customers.length;i++){
      let user=this.customers[i];
      if(user.userId===customerId){
        this.customers.splice(i,1);
      }
    }
  }


