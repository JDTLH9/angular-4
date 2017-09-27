import { Injectable } from '@angular/core';
import { MyEnum } from '../enums/my-enum'

@Injectable()
export class MyService {
    private EnumValue: MyEnum;
    private SetEnumValue = (myEnum: MyEnum): void => {
        this.EnumValue = myEnum;
    };
    
    ReturnEnumValue: () => MyEnum;

    constructor() {
        this.SetEnumValue(MyEnum.Zero);

        this.ReturnEnumValue = () => {
            return this.EnumValue;
        }
    }
}