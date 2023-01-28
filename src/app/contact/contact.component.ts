import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('name') name: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('message') message: ElementRef;
  @ViewChild('sendBtn') sendBtn: ElementRef;
  public contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required,], []],
      email: ['', [Validators.required, Validators.email], []],
      message: ['', [Validators.required], []],
    });
  }

  playSendingAudio() {
    let audio = new Audio();
    audio.src = "assets/audio/swish.mp3";
    audio.load();
    audio.play();
  }


  async sendMail() {
    this.setInputFields(true);
    let fd = new FormData();
    fd.append('name', this.name.nativeElement.value);
    fd.append('email', this.email.nativeElement.value);
    fd.append('message', this.message.nativeElement.value);
    await fetch('https://rico-denkewitz.developerakademie.net/send_mail/send_mail.php', { method: 'POST', body: fd });
    this.playSendingAudio();
    this.setInputFields(false);
    this.contactForm.reset();
  }


  setInputFields(Boolean) {
    this.name.nativeElement.disabled = Boolean;
    this.email.nativeElement.disabled = Boolean;
    this.message.nativeElement.disabled = Boolean;
  }
}
