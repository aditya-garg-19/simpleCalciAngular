import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wayTest-app';

  data : {
    'one' :1,
    'two' : 2,
    'three': 3,
    'four' : 4,
    'five' : 5,
    'six' : 6,
    'seven' : 7,
    'eight' : 8,
    'nine' : 9
  }
  
  result = 0 ;
  num1;
  num2;
  operation;

    valuePass(num1,num2,operation) {
      this.result = num1;
      if(operation == "add")
      {
        this.result = num1 + num2;
      }
    }
    
    add(){
      this.num1 = this.result;
      this.operation = "add";
    }

    equals(){
      this.num2 = this.result
      this.valuePass(this.num1,this.num2, this.operation)
    }

    clear(){
   this.result = 0;
 }
    
}
