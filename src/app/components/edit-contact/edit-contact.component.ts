import { ContactService } from 'src/app/services/contact.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IContact } from 'src/app/models/IContact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  public loading: boolean = false;
  public contactId: string | null = null;
  public contact: IContact = {} as IContact;
  public errorMessage: string | null = null;

  constructor(private activatedRoute: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.paramMap.subscribe((param:ParamMap)=>{
      this.contactId = param.get('id');
    })
    if (this.contactId) {
      
      this.contactService.getContact(this.contactId).subscribe((data:IContact)=>{
        this.contact = data;
        this.loading = false;
      }, (error)=>{
        this.errorMessage = error;
        this.loading = false;
      })
    }
  }

}
