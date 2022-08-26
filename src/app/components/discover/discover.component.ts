import { Component, OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {DiscoverService} from "../../services/discover.service";
import { LocalStorageService } from 'src/app/services/localstorage.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  constructor(private router: Router, private discoverService: DiscoverService, private localStorageService: LocalStorageService) { }

  control = new FormControl('');
  name: string[] = ['Joe Bell', 'David Faulkner', 'Stephen Oyinlola', 'Gerard Gray'];
  skills: string[] = ['Java', 'Typescript', 'Python', 'Angular'];
  filteredNames: Observable<string[]> | undefined;
  userList: any = [];


  ngOnInit(): void {

    this.userList = this.discoverService.getUserList()
    console.log("this is user list: " + this.userList.source.source.source._subscribe)

    console.log("this is user list teest: " + this.userList.source.source.source._subscribe)

    for( var user in this.userList){
      console.log('test: ' + user)
    }

    // @ts-ignore
    this.filteredNames = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '#&^%')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.name.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }


}
