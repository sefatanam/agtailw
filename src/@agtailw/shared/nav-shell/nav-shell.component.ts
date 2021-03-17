import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-shell',
  templateUrl: './nav-shell.component.html',
  styleUrls: ['./nav-shell.component.scss']
})
export class NavShellComponent implements OnInit {
  isShown: boolean = false;
  isMobileMenuClose: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
