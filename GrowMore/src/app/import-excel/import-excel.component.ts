import { Component, OnInit } from '@angular/core';
import * as XL from 'xlsx';

@Component({
  selector: 'app-import-excel',
  templateUrl: './import-excel.component.html',
  styleUrls: ['./import-excel.component.css']
})
export class ImportExcelComponent implements OnInit {
  data: any;
  constructor() { }

  ngOnInit(): void {
  }

    upload() {
     alert("Inserted")
    }
  }
  
   
  

