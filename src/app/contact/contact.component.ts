import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('sendBtn') sendBtn: ElementRef;

  async sendMail() {
    // https://rico-denkewitz.developerakademie.net/send_mail
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendBtn = this.sendBtn.nativeElement;
    nameField.disabled = true;
    messageField.disabled = true;
    sendBtn.disabled = true;
    //animation anzeigen
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    //senden
    await fetch('https://rico-denkewitz.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );

    //text anzeigen senden beendet
    nameField.disabled = false;
    messageField.disabled = false;
    sendBtn.disabled = false;
  }
}
