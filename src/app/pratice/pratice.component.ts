import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pratice',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  templateUrl: './pratice.component.html',
  styleUrl: './pratice.component.css',
})
export class PraticeComponent{
  //   <!-- two way data binding -->
  //  <!-- Q.1 Create a form where a user can input their name, and it gets displayed in real-time below the form using two-way data binding. -->

  // userData :any = [];

  // name :any = "";contact
  // }

  // <!-- Q.1 end -->

  // <!-- Q.2 Create a toggle button that shows or hides a paragraph of text using ng-show or ng-hide. -->

  // showText : boolean = true;

  // isVisible(){
  //   this.showText = !this.showText
  // }

  // <!-- Q.2 end -->

  // <!-- Q.3 Use ng-class to change the background color of a div based on the user’s input. For example, the div should turn green if the user enters a positive number and red if they enter a negative number. -->
  // currentColor:string ="black";

  // userInput : number = 0;

  // changeColor(){
  //     if(this.userInput === 0){
  //       alert("Please Enter Positive OR Negative Number !")
  //     }
  //     else if(this.userInput >= 1){
  //       this.currentColor = "green";
  //     }
  //     else{
  //       this.currentColor = "red";
  //     }
  // }

  //  <!-- Q.3 end -->

  // <!-- Q.4 Build a simple calculator using AngularJS where users can input two numbers and choose an operation (add, subtract, multiply, divide) from a dropdown. Display the result below the form. -->

  // input1: number = 0;
  // input2: number = 0;
  // answer: number = 0;
  // selectedOperation: string = 'Select An Option';

  // <!-- with  button to add,sub,mul,div start -->

  // submitAnswer(output:string){
  //   if(this.input1 == 0 || this.input2 == 0){
  //     alert("Zero is Not Allowed !")
  //   }
  //   else if(output === 'add'){
  //     this.answer = this.input1 + this.input2;
  //   }
  //   else if(output === 'sub'){
  //     this.answer = this.input1 - this.input2;
  //   }
  //   else if(output === 'mul'){
  //     this.answer = this.input1 * this.input2;
  //   }
  //   else if(output === 'div'){
  //     this.answer = this.input1 / this.input2;
  //   }
  // }

  // <!-- with  button to add,sub,mul,div end -->

  // <!-- with  select & option to add,sub,mul,div start -->

  // submitAnswer(output:string){
  //   if(this.input1 == 0 || this.input2 == 0){
  //     alert("Zero is Not Allowed !")
  //   }
  //   else if(output === 'Select An Option'){
  //     alert("Please Select an Valid Option !!!")
  //   }
  //   else if(output === 'add'){
  //     this.answer = this.input1 + this.input2;
  //   }
  //   else if(output === 'sub'){
  //     this.answer = this.input1 - this.input2;
  //   }
  //   else if(output === 'mul'){
  //     this.answer = this.input1 * this.input2;
  //   }
  //   else if(output === 'div'){
  //     this.answer = this.input1 / this.input2;
  //   }
  // }

  // <!-- with  select & option to add,sub,mul,div end -->

  //  <!-- Q.4 end -->

  // Q.5 Create a search bar where a user can filter through a list of names (e.g., a list of employees) using the filter feature in AngularJS.

  // employees: string[] = [
  //   'Alice Johnson',
  //   'Bob Smith',
  //   'Charlie Brown',
  //   'Daniel',
  //   'Eve Davis',
  //   'Frank Miller',
  //   'Jhonny',
  //   'Hannah Taylor',
  //   'Ian Martinez',
  //   'Julia Ann',
  //   'Alice',
  // ];

  // presentuser: any = [];

  // userInput: any = '';

  // findName() {
  //   if (this.userInput !== '') {
  //     this.presentuser = this.employees.filter((emp) =>
  //       emp.toLowerCase().includes(this.userInput.toLowerCase())
  //     );
  //     if(this.presentuser == ''){
  //       alert("No Data Found !")
  //     }
  //   }
  //   else{
  //     alert("Please Enter Name !")
  //   }
  // }


// Q.5 end




// <!-- // Q.6 Build a form that takes a user's name, email, and phone number. Implement basic form validation to ensure the name is required, the email follows the correct pattern, and the phone number has exactly 10 digits. -->

// formValues : any = []

// studentForm : FormGroup = new FormGroup({

//   FirstName : new FormControl("",[Validators.required,Validators.minLength(3)]),
//   Email : new FormControl("",[Validators.required,Validators.email]),
//   Phone : new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10)])

// })

// onSubmit(){
//   if(this.studentForm.valid){
//     this.formValues.push(this.studentForm.value);
//     this.studentForm.reset();    
//   }
// }

// <!-- // Q.6 end -->


// <!-- // Q.7 Use AngularJS’s $http service to fetch data from a public API (e.g., a list of users) and display it in a table on the webpage. -->

// userData : any = [];

// constructor(private http : HttpClient){}

// ngOnInit(): void {
//   this.onSubmit();
// }

// onSubmit(){
//   this.http.get("https://fakestoreapi.com/products").subscribe((res:any) =>{
//     console.log(res);
//     this.userData = res;
//   })
// }

// <!-- // Q.7 end -->



// <!-- // Q.8 Set up routing in AngularJS using ngRoute. Create three simple pages (e.g., Home, About, Contact) and navigate between them using Angular routing. -->


// Just Routing Nothing To Code On That

// <!-- // Q.8 end -->

}