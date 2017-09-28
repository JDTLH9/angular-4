import { async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MyService } from '../services/my-service';
import { MyEnum } from '../enums/my-enum';

describe('Given an AppComponent instance', () => {
  let appComponent: AppComponent;
  let myServiceMock: jasmine.SpyObj<MyService>;

  beforeEach(async(() => {
    myServiceMock = jasmine.createSpyObj<MyService>("MyService", ["ReturnEnumValue"]);
    myServiceMock.ReturnEnumValue.and.returnValue(MyEnum.Zero);
    
    appComponent = new AppComponent(myServiceMock);
  }));

  it('When the instance is created, Then ReturnEnumValue on MyService is called', async(() => {
    expect(myServiceMock).toHaveBeenCalledTimes(1);
  }));

  it('When the instance is created, Then the Enum property should be set', async(() => {
    expect(appComponent.myNumber).toEqual(MyEnum.Zero);
  }));
});
