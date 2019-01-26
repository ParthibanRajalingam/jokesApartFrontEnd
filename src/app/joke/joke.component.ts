import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HhtpCallsService } from '../hhtp-calls.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

show : Boolean = true;
load = 'lo';
like : Boolean =false;
unLike : Boolean = true;
jokeDataTemp = [{"id":0,"category": "Teacher","likes":10
,"content" : "A little boy goes to school but bringing in a cat …when the kids leave I’m gonna eat that pussy up.”", "submittedBy": "Parth", "mailId": "sadd"}];
  constructor(private router: Router,private httpRequests : HhtpCallsService) { }
jokeData= this.jokeDataTemp[0];
  ngOnInit() {
  setTimeout(()=>{    //<<<---    using ()=> syntax
      this.show = false;
    }, 1000);
    window.scroll(0,0);
      this.httpRequests.getJoke().subscribe(
      data => {
        console.log(data);
        this.jokeData=data[0];
        this.load='loaded';
      }
    );

  }

  viewAbout(){
    this.show=false;
    this.router.navigate(['/', 'aboutUs']);
  }

likes(){
  let likeCount =this.jokeData.likes;
  if(this.like){
    this.like = false;
    this.unLike = true;
    this.jokeData.likes = --likeCount;
    this.httpRequests.putJoke({'likes': --likeCount,'id':this.jokeData.id}).subscribe(
            data => {
        console.log(data);
        
      }
    );
  }
  else{
    this.like = true;
    this.unLike = false;
         this.jokeData.likes = ++likeCount;
    this.httpRequests.putJoke({'likes': likeCount,'id':this.jokeData.id}).subscribe(
            data => {
        console.log(data);
  
      }
    );
  }
  }

loading(){
  this.load='loading';
  
}

getAnotherJoke(){
  this.load='loading';
        this.httpRequests.getJoke().subscribe(
      data => {
        console.log(data);
        this.like  =false;
        this.unLike  = true;
        this.jokeData=data[0];
        this.load='loaded';
      }
    );
}

  viewTellJoke(){
    this.show=false;
    this.router.navigate(['/', 'tellUsAJoke']);
  }

}
