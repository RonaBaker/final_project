import { AbstractControl } from '@angular/forms';

export function oneCapitalLetterValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const controlValue: string = control.value;
    if (controlValue !== controlValue.toLowerCase()) {
        return null;
    }
    return { capitalLetter: true };
}

export function oneNumberValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const controlValue: string = control.value;
    const regExp = /[0-9]/;
    if (regExp.test(controlValue)) {
        return null;
    }
    return { numberLetter: true };

}
