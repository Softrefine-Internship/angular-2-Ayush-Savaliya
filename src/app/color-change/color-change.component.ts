import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-color-change',
  templateUrl: './color-change.component.html',
  styleUrls: ['./color-change.component.scss'],
})
export class ColorChangeComponent {
  @ViewChild('colorDiv') colorDiv!: ElementRef;

  textColor: string = '#000000';
  bgColor: string = '#ffffff';

  updateColors() {
    if (this.colorDiv) {
      this.colorDiv.nativeElement.style.color = this.textColor;
      this.colorDiv.nativeElement.style.backgroundColor = this.bgColor;
    }
  }
}
