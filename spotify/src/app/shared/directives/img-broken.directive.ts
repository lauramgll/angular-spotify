import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})

// Directiva para que cuando las imágenes no carguen, no salga el símbolo de 'roto'
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const elementNative = this.elHost.nativeElement;
    console.log('Esta imagen no ha cargado', this.elHost);

    // Si la imagen está rota, le cargo esta:
    elementNative.src = '../../../assets/images/img-broken.png';
  }

  constructor(private elHost: ElementRef) { }

}
