
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']

})
export class FlexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchedKeyword = '';
  firstName = '';
  lastName = '';
  date: Date = new Date();
  todayDate: Date = new Date();
  gender = '';
  choosedField = '';
  email = '';
  passwordEntered = '';
  passwordReEntered = '';
  radioValue = '';

  checkBoxArray = ['Car', 'Bike', 'Boat', 'Cycle'];
  

  submitButtonStatus = false;



 

  onSubmit() { 
    this.submitButtonStatus = !this.submitButtonStatus;
  }

  onAgaint() {
    this.submitButtonStatus = !this.submitButtonStatus;
    this.searchedKeyword = '';
  this.firstName = '';
  this.lastName = '';
  this.date=this.todayDate;
  this.gender = '';
  this.choosedField = '';
  this.email = '';
  this.passwordEntered = '';
  this.passwordReEntered = ''; 
  }




  testFunation() {
    
    let a = 5;
    let b = a++;

    console.log(" Value of A is: ", a);
    
    console.log(" Value of B is: ", b);

  }






 

 








}
