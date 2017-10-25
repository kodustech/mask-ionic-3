import { Directive, Input, HostListener } from '@angular/core';

/**
 * Generated class for the MaskInputDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[mask]'
})
export class MaskInput {

  constructor() {
  }

  @Input('mask') mask: string;
  @HostListener('keyup', ['$event'])

  inputChanged(event: any): void {
    if (event.target.value) {
      if(event.key == 'Backspace')
        return;
      event.target.value = this.setMask(event, this.mask)
    }
  }

  private setMask(event: any, mask: string): string {
    event.target.maxLength = mask.length;
    
    let value: string = event.target.value;
    let lengthValueSub1: number = value.length - 1;
    
    let newValue: string = value;
    let currentChar: string = value.charAt(lengthValueSub1);
    let currentCharMask: string = mask.charAt(lengthValueSub1);
    
    switch (currentCharMask) {
      case '0':
        if(!currentChar.match(/\d/)){
          newValue = value.substr(0, lengthValueSub1);
        }
        break;
    
      case 'A':
        if(!currentChar.match(/([A-Z])/)){
          newValue = value.substr(0, lengthValueSub1);
        }
      break;

      case 'a':
        if(!currentChar.match(/([a-z])/)){
          newValue = value.substr(0, lengthValueSub1);
        }
      break;
      
      case 'x':
        if(!currentChar.match(/([a-zA-Z])/)){
          newValue = value.substr(0, lengthValueSub1);
        }
      break;

      case '#':  
      break;

      default:
        newValue = value.substr(0, lengthValueSub1);

        let maskChar: string = currentCharMask;
        let nextMaskChar: string = '';
        let c: number = 0;
        while (maskChar != '0' && maskChar != '#' && maskChar != 'A' && maskChar != 'a' && maskChar != 'x') {
          c++;
          nextMaskChar = mask.charAt(lengthValueSub1 + c);
          newValue += maskChar;
          maskChar = nextMaskChar;
        }
        
        if(nextMaskChar == '0'){
          if(currentChar.match(/\d/)){
            newValue += currentChar;
          }
        }
        else if(nextMaskChar == 'A'){
          if(currentChar.match(/([A-Z])/)){
            newValue += currentChar;
          }
        }
        else if(nextMaskChar == 'a'){
          if(currentChar.match(/([a-z])/)){
            newValue += currentChar;
          }
        }
        else if(nextMaskChar == 'x'){
          if(currentChar.match(/([a-zA-Z])/)){
            newValue += currentChar;
          }
        }
        else {
          newValue += currentChar;
        }

      break;
    }
    return newValue;
  }
}