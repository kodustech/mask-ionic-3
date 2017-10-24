# mask-ionic-3

**Import**
```javascript
import {MaskInput} from '../directives/mask-input/mask-input';

@NgModule({
  declarations: [
    MyApp,
    MaskInput
  ],
  })
```

**How to use**
```html
<ion-input type="text" placeholder="Date" [mask]="'00-00-0000'"></ion-input>
```

```
0 = numbers
A = upper case
a = lower case
x = upper or lower case
# = all characters
```
