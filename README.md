# mask-ioni-3

`npm instal --save mask-ioni-3`

Yeh! IONI not IONIC

**Import**
```javascript
import { MaskInput } from 'mask-ioni-3/mask-input';

@NgModule({
  declarations: [
    MyApp,
    MaskInput
  ],
  })
```

**How to use**
```html
Date
<ion-input type="text" placeholder="Date" [mask]="'00/00/0000'"></ion-input>

Vehicle - BR
<ion-input type="text" placeholder="Car Plate" [mask]="'xxx-0000'"></ion-input>
or
<ion-input type="text" placeholder="Car Plate" [mask]="'AAA-0000'"></ion-input>
or
<ion-input type="text" placeholder="Car Plate" [mask]="'aaa-0000'"></ion-input>

Any
<ion-input type="text" placeholder="Any" [mask]="'#####'"></ion-input>

Telephone - 8 or 9 digits
<ion-input type="tel" placeholder="" [mask]="'telephone'"></ion-input>

Document - CPF or CNPJ
<ion-input type="text" placeholder="" [mask]="'telephone'"></ion-input>
```

```
0 = numbers
A = upper case
a = lower case
x = upper or lower case
# = all characters
telephone =  8 or 9 digits
telephone = CPF or CNPJ
```

I would be happy with your contribution :)
