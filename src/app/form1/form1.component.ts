import { Component } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component {
  constructor(private subject: SubjectService){
    this.subject.username.subscribe(uname =>{
      this.username = uname;
    })

  }
  username:any ;


  update(uname:any){
    // this.username = uname.value;
    this.subject.username.next(uname.value)
  }
}
