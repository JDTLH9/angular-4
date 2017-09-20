import { Injectable } from '@angular/core';
import { MyEnum } from '../enums/my-enum'

@Injectable()
export class MyService {
    EnumValue: MyEnum;
    ReturnEnumValue: () => MyEnum;

    constructor() {
        this.EnumValue = MyEnum.Three;
        this.ReturnEnumValue = () =>{
            return this.EnumValue;
        }
    }
}