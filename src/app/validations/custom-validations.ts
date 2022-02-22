import { AbstractControl } from '@angular/forms';


export class CustomValidations {
    
    containsUpperCase(control: AbstractControl): {[key: string]: any} | null  {
        if (/[A-Z]/g.test(control.value)) {
          return null;
        }
    
        return { 'no_upper': true };
    }
    
    containsLowerCase(control: AbstractControl): {[key: string]: any} | null  {
        if (/[a-z]/g.test(control.value)) {
            return null;
        }

        return { 'no_lower': true };
    }

    containsNumber(control: AbstractControl): {[key: string]: any} | null {
        if (/\d/.test(control.value)) {
            return null
        }

        return { 'no_number': true };
    }

    containsSymbol(control: AbstractControl): {[key: string]: any} | null {
        const symbols: string[] = ["^", "$", "*", ".", "[", "]", "{", "}", "(", ")", "?", '"', "!", "@", "#", "%", "&", "/", "\\", ",", ">", "<", "'", ":", ";", "|", "_", "~", "`"];
        let containSymbol: boolean = false;

        if (control.value) {
            symbols.map(function(char) {
                if (control.value.indexOf(char) > -1) {
                    containSymbol = true;
                }
            })
        }

        return containSymbol ? null : { 'no_symbol': true }
    }

}
