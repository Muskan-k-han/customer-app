import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getbyname',
  templateUrl: './getbyname.component.html',
  styleUrls: ['./getbyname.component.css']
})
export class GetbynameComponent implements OnInit {

  customer:Customer;

  constructor(private route:ActivatedRoute, private service:CustomerService) { 
    let observable=route.paramMap;
    observable.subscribe((params:ParamMap)=>{
      let codeVal:string=params.get("customerName");
      let idNum:number=Number(codeVal);
        console.log("id available is "+idNum);
        this.getCustomerByName(name);
  })
  }

  getCustomeerByName(customername:Name){
    let observable:Observable<Customer>=this.service.getCustomer(customerName);
  observable.subscribe( customerArg=>{this.customer=customerArg});
  }

  getbyename(form:any){
    let data=form.value;
    let customerId=data.customerId;
    this.getCustomerByName(customerName);
  }


  }



