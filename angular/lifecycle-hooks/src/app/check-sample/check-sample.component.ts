import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  quantidade: number = 0;

  constructor() { }

  incrementar(){
    this.quantidade++;
  }

  decrementar(){
    this.quantidade--;
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  ngOnDestroy(): void {
      console.log('Até logo!');
  }
}
