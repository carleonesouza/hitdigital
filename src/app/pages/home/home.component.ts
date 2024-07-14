import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { IntegrationService } from '../../services/integration.service';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  title: any;
  data: any;

  constructor(public _snackBar: MatSnackBar, private integrationService: IntegrationService){}

  ngOnInit(): void {

    this.integrationService.getData()
    .pipe()
    .subscribe((result: any) =>{
      this.data = result.data.text;
      this.title = result.data.title;
    })
      
  }

}
