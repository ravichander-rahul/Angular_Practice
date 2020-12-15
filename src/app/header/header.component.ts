import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit,OnDestroy {

  private userSub:Subscription;
  isAuthenticated=false;

  constructor(
    private dataService: DataStorageService,
    private authService:AuthService
    ){}

  onSaveData(): void{
    this.dataService.storeRecipes();
  }

  onFetchData(): void{
    this.dataService.fetchRecipes().subscribe();
  }

  ngOnInit(){
    this.userSub=this.authService.user.subscribe(user=>{
      this.isAuthenticated=!!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  onLogout(){
    this.authService.logout();
  }
}
