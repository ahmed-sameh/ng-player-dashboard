import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {
  authImage = '';
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formRefrence: NgForm) {
    console.log(formRefrence)
  }
}
