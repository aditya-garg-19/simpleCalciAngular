import { Component } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

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
  countAdd=0;
  countSub =0;
  countMulti = 0;
  countDevide = 0;

    valuePass(num1,num2,operation) {
      if(num2 == undefined && operation == undefined)
      {
      this.result = num1 + this.result*10;
      }       
          
       if(operation == "add")
      {
        this.result = num1 + num2;
      }
       if(operation == "minus")
      {
        this.result = num1 - num2;
      }
      if(operation == "multiply")
      {
        this.result = num1 * num2;
      }
      if(operation == "devide")
      {
        this.result = num1 / num2;
      }
    }
    
    add(){
      this.countAdd++;
      this.num2 = this.result;
      
      console.log(this.countAdd);
      if(this.countAdd > 1)
      {
        this.num1 = this.num1 + this.result;
      }
     else if(this.operation == 'minus')
      {
          this.num1 = this.num1 - this.result;
      }
      else if(this.operation == 'multiply')
      {
          this.num1 = this.num1 * this.result;
      }
      else if(this.operation == 'devide')
      {
          this.num1 = this.num1 / this.result;
      }
      else
      {
      this.num1 = this.result;
      
      }
      this.operation = "add"
      this.result = 0;
    }

    minus(){
      this.countSub++;
      this.num2 = this.result;
      
      console.log(this.countSub);
      if(this.countSub > 1)
      {
        this.num1 = this.num1 - this.result;
      }
      else if(this.operation == 'add')
      {
          this.num1 = this.num1 + this.result;
      }
      else if(this.operation == 'multiply')
      {
          this.num1 = this.num1 * this.result;
      }
      else if(this.operation == 'devide')
      {
          this.num1 = this.num1 / this.result;
      }
      else
      {
      this.num1 = this.result;
      
      }
      this.operation = "minus";
      this.result = 0;
    }


    multiply(){
      this.countMulti++;
      this.num2 = this.result;
      
      console.log(this.countMulti);
      if(this.countMulti > 1)
      {
        this.num1 = this.num1 - this.result;
      }
      else if(this.operation == 'add')
      {
          this.num1 = this.num1 + this.result;
      }
      else if(this.operation == 'minus')
      {
          this.num1 = this.num1 - this.result;
      }
      else if(this.operation == 'devide')
      {
          this.num1 = this.num1 / this.result;
      }
      else
      {
      this.num1 = this.result;
      
      }
      this.operation = "multiply";
      this.result = 0;
    }


    devide(){
      this.countDevide++;
      this.num2 = this.result;
      
      console.log(this.countDevide);
      if(this.countDevide > 1)
      {
        this.num1 = this.num1 - this.result;
      }
      else if(this.operation == 'add')
      {
          this.num1 = this.num1 + this.result;
      }
      else if(this.operation == 'minus')
      {
          this.num1 = this.num1 - this.result;
      }
      else if(this.operation == 'multiply')
      {
          this.num1 = this.num1 * this.result;
      }
      else
      {
      this.num1 = this.result;
      
      }
      this.operation = "devide";
      this.result = 0;
    }


    equals(){
      this.countSub = 0;
      this.countAdd = 0;
      this.countMulti = 0;
      this.countDevide = 0;
      
      this.num2 = this.result
      this.valuePass(this.num1,this.num2, this.operation);
      this.operation = '';
    }

    clear(){
   this.result = 0;
 }
    
}
