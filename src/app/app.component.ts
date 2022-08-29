import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nombre: string = 'Julio';
  public contador: number = 0;
  public scroll: number = 0;
  cosa: boolean = false;
  public alto: number = 800;
  public ancho: number = 1300;
  public mostrar: boolean = false;
  public color: string = "";
  public imagen: string = 'https://i.pinimg.com/474x/d1/8e/2c/d18e2cf72270a3e9f27deb4939c6f015.jpg'
  public sumar(n1: number, n2: number): number {
    return n1 + n2;
  }
  public eventoBoton(event: Event): void {
    console.log(event);
    alert('Hola');
  }
  public aumentarContador(): void {
    this.contador = this.contador + 1;
  }
  public scrollEn(event: Event): void {
    this.scroll = (event.target as Element).scrollTop;
  }
  public capturarAlto(event: Event): void{
    const valor = Number.parseInt((event.target as HTMLInputElement).value)
    this.alto = valor;
  }
  public capturarAncho(event: Event): void{
    const valor = Number.parseInt((event.target as HTMLInputElement).value)
    this.ancho = valor;
  }
  public capturarColor(event: Event):void{
    const color = (event.target as HTMLInputElement).value;
    this.color = color;
  }
}
