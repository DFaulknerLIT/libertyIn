import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {DiscoverService} from "../../services/discover.service";
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedOn: boolean = false;
  constructor(private authService: AuthService, private router: Router, private discoverService: DiscoverService) { }

  userList: any = [];

  ngOnInit(): void {
    // Check what button to render on header
    this.isLoggedOn = !localStorage.getItem('user_access_token');
    this.userList = this.discoverService.getUserList()
  }

  onLogOut() {
    this.authService.logout()
    this.isLoggedOn = false;
    this.router.navigateByUrl("/");
  }

  onDiscover() {

      this.router.navigateByUrl("/discover");
    }

  delay(ms: number) {
            return new Promise( resolve => setTimeout(resolve, ms) );
        }

  async showUser(user: String) {
        this.router.navigateByUrl("/users/"+user);
        await this.delay(10)
        window.location.reload();
      }



}
