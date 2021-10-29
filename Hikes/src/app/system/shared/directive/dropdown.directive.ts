import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[vkrDropdown]'
})

export class DropdownDirective {
@HostBinding('class.open') isOpen = false;
// tslint:disable-next-line:typedef
@HostListener('click') onclick() {
    this.isOpen = !this.isOpen;
  }
}
