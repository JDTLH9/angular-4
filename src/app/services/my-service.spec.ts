import { async } from '@angular/core/testing'
import { MyEnum } from '../enums/my-enum';
import { MyService } from './my-service';

describe('Given a MyService instance', () => {
    let myService: MyService;

    beforeEach(() => {
        myService = new MyService();
    });
    
    it('When the ReturnEnumValue function is called then the enum value "Zero" is returned', async(() => {
        expect(myService.ReturnEnumValue()).toEqual(MyEnum.Zero);
    }));
});