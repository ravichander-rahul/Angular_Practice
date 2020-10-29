import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() selectedFeature: EventEmitter<string> = new EventEmitter<string>();
  onSelect(feature: string) {
    console.log(feature);
    console.log(feature);
    this.selectedFeature.emit(feature);
  }
}
