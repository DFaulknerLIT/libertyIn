import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedOn: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Check what button to render on header
    this.isLoggedOn = !localStorage.getItem('user_access_token');
  }

  onLogOut() {
    this.authService.logout()
    this.isLoggedOn = false;
    this.router.navigateByUrl("/");
  }

  onDiscover() {

      this.router.navigateByUrl("/discover");
    }

}
