import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //  destino: number | undefined;
  //  valor: number | undefined;
  transferencia: any;
  title = 'bytebank';

  transferir($event: any) {
    console.log($event);
    //this.destino = $event.destino;
    //this.valor = $event.valor;
    this.transferencia = $event;

  }
}
