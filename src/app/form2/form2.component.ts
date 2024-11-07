import { Component } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component {


  username:any

  constructor(private subject: SubjectService){
    this.subject.username.subscribe(uname =>{
      this.username = uname;
    })

  }

  update(uname:any){
    this.subject.username.next(uname.value)
  }
}
