import { Component, OnInit } from '@angular/core';
import { HhtpCallsService } from '../hhtp-calls.service';

@Component({
  selector: 'app-submit-joke',
  templateUrl: './submit-joke.component.html',
  styleUrls: ['./submit-joke.component.css']
})
export class SubmitJokeComponent implements OnInit {

  constructor(private httpRequests : HhtpCallsService) { }

  ngOnInit() {
     window.scroll(0,0);
  }
  onSubmit(name,mail,category,content){
 
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    let data= {
      "category":category,
      "content" :content,
      "submittedBy":name,
      "mailId":mail
    };
    this.httpRequests.postJoke(data).subscribe(
      data => {
        console.log(data);
        alert('data saved');
      }
    );
    //  if (reg.test(mail) == false) 
    //     {
    //         alert('Invalid Email Address');
    //        // return false;
    //     }

  }

}
