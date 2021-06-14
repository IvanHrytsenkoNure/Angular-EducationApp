import { AbstractControl, ValidatorFn } from "@angular/forms";

export function equalityValidator(targetKey: string): ValidatorFn {
    return (control: AbstractControl) => {


        if (!control || !control.parent) {
            return null;
        }

        if(control.parent.get(targetKey)?.value !== control.value)
        {
            control.parent.setErrors({mismatch:true})
            return {mismatch:true}
        }

        return null;
        
    };
}