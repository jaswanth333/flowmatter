import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedValue:string;

  source = [
    {srcName: 'Manual',  value: 'manual'},
    {srcName: 'SFTP', value: 'sftp'},

  ];

}
