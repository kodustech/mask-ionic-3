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

CPF
<ion-input type="text" placeholder="cpf" [mask]="'000.000.000-00'"></ion-input>

Vehicle - BR
<ion-input type="text" placeholder="car" [mask]="'xxx-0000'"></ion-input>
or
<ion-input type="text" placeholder="car" [mask]="'AAA-0000'"></ion-input>
or
<ion-input type="text" placeholder="car" [mask]="'aaa-0000'"></ion-input>

Any
<ion-input type="text" placeholder="car" [mask]="'#####'"></ion-input>
```

```
0 = numbers
A = upper case
a = lower case
x = upper or lower case
# = all characters
```

I would be happy with your contribution :)