import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { contry } from 'src/app/contry';
import { JavasrivceService } from '../javasrivce.service';
import { MatTableDataSource } from '@angular/material/table'
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-contry',
  templateUrl: './contry.component.html',
  styleUrls: ['./contry.component.css']
})
export class ContryComponent implements OnInit {
  displaycolms = ['name', 'alpha2Code', 'capital', 'population'];
  index= ["name", "alpha2Code", "capital", "population"];
  ElemantData: contry[] = [];
  name:any;
  p:number =1;
  constructor(private service: JavasrivceService) { }

  ngOnInit(): void {

    this.service.getContry().subscribe(
      (response) => {
        this.ElemantData =  response ;
      },
      (error) => {
        console.log("Erorr")
      }
    )
  }
  search(){
   // let data = this.ElemantData;
    if(this.name== ""){
      this.ngOnInit();
    }else{
      let data = this.ElemantData.filter(res=>{
        return  res.name.toLocaleLowerCase().includes(this.name.toLocaleLowerCase())
        || res.alpha2Code.toLocaleLowerCase().includes(this.name.toLocaleLowerCase())||
        res.capital.toLocaleLowerCase().includes(this.name.toLocaleLowerCase())||
        res.population.toString().includes(this.name);
       
        
      })
    
    }
  }

}
