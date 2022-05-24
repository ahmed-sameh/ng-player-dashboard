import { Component, OnInit } from '@angular/core';
import { faUserGroup, faClapperboard, faServer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  usersIcon = faUserGroup;
  hostsIcon = faServer;
  websiteIcon = faClapperboard;

  showNav = false;

  constructor() { }

  ngOnInit(): void {
  }

}
