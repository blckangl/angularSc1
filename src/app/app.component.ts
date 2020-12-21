import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Title';
  count: number;

  result: number;
  value1: number;
  value2: number;
  result2: number;

  stringlist: string[];
  age1 = 20;
  age2 = 15;

  items: Item[] = [];


  constructor() {
    this.count = 5;
    this.stringlist = [];
    this.stringlist.push('string1');
    this.stringlist.push('string2');
    this.stringlist.push('string3');
    this.stringlist.push('string4');
  }

  onButtonClick(): void {
    this.count++;
  }

  Meth1Sum(): void {
    const val1 = Number.parseInt(document.getElementById('meth1value1').value);
    const val2 = Number.parseInt(document.getElementById('meth1value2').value);

    this.result = val1 + val2;
  }

  value1KeyUp($event: KeyboardEvent): void {
    this.value1 = Number.parseInt($event.target.value);
  }

  value2KeyUp($event: KeyboardEvent): void {
    this.value2 = Number.parseInt($event.target.value);
  }

  Meth2Sum(): void {

    this.result2 = this.value1 + this.value2;
  }

  addToStringList() {
    this.stringlist.push('stringxx');
  }

  addItemToList(): void {
    this.items.push(new Item(document.getElementById('itemValue').value,
                             document.getElementById('itemStock').value));
    document.getElementById('itemValue').value = "";
    document.getElementById('itemStock').value = 0;
  }
}

export class Item {
  Name: string;
  Stock: number;

  constructor(name: string, stock: number) {
    this.Name = name;
    this.Stock = stock;
  }
}
