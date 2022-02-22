import { Component, OnInit, Input } from '@angular/core';
import { ApiCoreService } from "src/app/services/api-core.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from "src/app/interfaces/user";
import * as dateFormat from 'dateformat';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: any;
  value: boolean;
  update_user: FormGroup;
  exportDateRange: Date[] = [];
  minimumDate = new Date();
  
  constructor(private apiCoreService: ApiCoreService, public messageService: MessageService) { }

  rows: User[] = [];
  loan_weeks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

  ngOnInit() {


    this.apiCoreService.listUserApi().subscribe(data => {
      this.users = data['data'];
      console.log(this.users)
    });

    this.update_user = new FormGroup({
      name_input: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      surname_input: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email_input: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      phone_input: new FormControl(null, [
        Validators.required
      ]),
      age_input: new FormControl(null, [
        Validators.required,
      ]),
      loan_amount_input: new FormControl(null, [
        Validators.required,
        Validators.min(10),
        Validators.max(1000),
      ]),
      loan_weeks_input: new FormControl(null, [
        Validators.required,
      ]),
      loan_date_input: new FormControl(null, [
        Validators.required,
      ]),
      check_input: new FormControl(null, [
        Validators.required,
      ]),
    })
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.rows.push({
        id: 1,
        name: form.value.name_input,
        surname: form.value.surname_input,
        email: form.value.email_input,
        phone: form.value.phone_input,
        age: form.value.age_input,
        loan_amount: form.value.loan_amount_input,
        loan_weeks: form.value.loan_weeks_input,
        loan_date: dateFormat(form.value.loan_date_input, 'yyyy-mm-dd'),
        check: form.value.check_input
      });

      this.apiCoreService.updateUserApi(this.rows).subscribe(data => {
        this.messageService.clear();
        if (data) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success!',
            detail: 'Formulario enviado !'
          })
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Revisa os campos por favor.'
          })
        }
        console.log(this.messageService);
        console.log(data)
      });

    } else {

      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Revisa os campos por favor.'
      })

    }

  }

}
