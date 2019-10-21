import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { oneCapitalLetterValidator, oneNumberValidator } from '../../core/validators/password.validator';
import { isObject } from 'util';
import { mimeType } from '../../core/validators/mime-type.validator';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  isValid: boolean;
  errorMsg: string;
  imagePreview: string;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {
    this.registrationForm = fb.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), oneCapitalLetterValidator, oneNumberValidator]],
      profileImg: [null, [], [mimeType.bind(this)]] // putting mimeType in the third parameter so angular will recognize it as async validator 

    });
  }

  get emailForm(): AbstractControl {
    return this.registrationForm.get('email');
  }

  get usernameForm(): AbstractControl {
    return this.registrationForm.get('username');
  }

  get passwordForm(): AbstractControl {
    return this.registrationForm.get('password');
  }

  get imageForm(): AbstractControl {
    return this.registrationForm.get('profileImg');
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }
    this.authService.register(this.registrationForm.value, this.registrationForm.value.profileImg)
      .subscribe(
        user => {
          this.authService.login(this.emailForm.value, this.passwordForm.value)
            .subscribe(
              () => {
                this.router.navigate(['/']);
              })
        },
        error => {
          if (!isObject(error.error)) {
            this.errorMsg = error.error;
          }
        }
      );
  }

  onImgPicked(event: Event) {
    //Extract the file
    const file = (event.target as HTMLInputElement).files[0];

    // Store in form control
    this.registrationForm.patchValue({
      profileImg: file
    });

    // inform angular the change
    //this.registrationForm.get('profileImg').updateValueAndValidity();
    this.imageForm.updateValueAndValidity();

    // convert img to data Url
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  removeImage() {
    this.registrationForm.patchValue({
      profileImg: null
    });
    this.imagePreview = '';

  }

}