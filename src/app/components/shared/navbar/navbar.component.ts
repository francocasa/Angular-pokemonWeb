import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nombre:String;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.nombre = "Franco";
  }

  searchPokemon(searchPok:String, event:KeyboardEvent)
  {
      if(event.key == "Enter" || event.key == undefined)
      {
        this.router.navigate(['/searchPokemon', searchPok]);
      }
    
  }

}
