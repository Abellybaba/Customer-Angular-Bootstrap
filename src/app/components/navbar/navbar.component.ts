import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // public contactForm!: FormGroup;
  // public errorMessage: string | null = null;
  // public groupOptions: string[] = [
  //   "Family",
  //   "Friends",
  //   "Colleague",
  //   "Community",
  //   "Social",
  //   "Service",
  // ];


  // //method for form building and form validations
  // formsMethod() {
  //   this.contactForm = this.formBuilder.group({
  //     name: ["", Validators.required],
  //     company: ["", Validators.required],
  //     email: ["", Validators.required],
  //     title: ["", Validators.required],
  //     mobile: ["", Validators.required],
  //     photo: ["", Validators.required],
  //     groupId: ["", Validators.required],
  //   });
  // }
  constructor(private contactService: ContactService, private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    // this.formsMethod();
    // this.add();
  }

  // add(){
  //   this.contactService.createContact(this.contactForm.value).subscribe(
  //     (res) => {
  //       alert("Contact added successfully");
  //       this.contactForm.reset();
        
  //     })
  //  }

  //function for adding contacts
  // add() {
  //   if (this.contactForm.valid) {
  //     this.contactService.createContact(this.contactForm.value).subscribe(
  //       (res) => {
  //         alert("Contact added successfully");
  //         this.contactForm.reset();
          
  //       },
  //       (error: any) => {
  //         this.errorMessage = error;
  //         console.log(error);
  //       }
  //     );
  //   }
  // }
}
