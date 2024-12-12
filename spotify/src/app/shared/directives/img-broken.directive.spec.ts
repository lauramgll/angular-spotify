import { ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';

// Describe: tenemos un test de la directiva ImgBroken
describe('ImgBrokenDirective', () => {
  // Debería crearse una instancia correctamente
  it('should create an instance', () => {
    const mockElement = new ElementRef('');
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });
});
