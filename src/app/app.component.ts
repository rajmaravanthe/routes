import { Component } from '@angular/core';
import { ListService } from "./service/list.service";
import { DropDownService } from "./service/drop-down.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class RootComponent {
  title: string;
  name: string;
  lastName: string;
  userDetail = {};
  arrayList: any[] = [];
  genderArray: any[] = [];
  nameInChar: boolean = true;
  lastNameInChar: boolean = true;
  searchVal: string;

  constructor(private _listService: ListService, private _dropDownService: DropDownService) { }

  ngOnInit() {
    this.userDetail = {
      name: '',
      lastName: '',
      age: '',
      date: '',
      genderType: ''
    }
    this.genderArray = this._dropDownService.getDropDown();
  }

  checkChar(data) {
    var regex = /^[a-zA-Z ]*$/;
    if(data.name === "name") {
      this.nameInChar = regex.test(data.value);
    } else {
      this.lastNameInChar = regex.test(data.value);
    }
  }

  submit(values,isValid) {
     if(!isValid){
      return;
    }
    console.log(values);
    let model = {
      name: values.name,
      lastName: values.lastName,
      age: values.age,
      date: values.date,
      gender: values.gender
    }
    this._listService.addList(model);
    this.arrayList = this._listService.getList();
  }
}
