import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prodotto } from '../models/prodotto.model';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.css']
})
export class ListaProdottiComponent implements OnInit {

  listaProdotti: Prodotto[] = new Array();
  prefisso: string = "http://raspberrypi-home.zo2wq0mhnx4wgz6f.myfritz.net:8086";

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    
    this.caricaProdotti();
  }

  caricaProdotti(): void{
    this.http.get<Prodotto[]>(this.prefisso+"/prodotto").subscribe(res=>{
     
      
      this.listaProdotti = res;
    });
  }

}
