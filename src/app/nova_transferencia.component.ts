import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector:'app-nova_transferencia',
    templateUrl:'./nova_transferencia.component.html',
    styleUrls:['./nova_transferencia.component.scss']
})
export class NovaTransferenciaComponent{

  transferir(){
    console.log('Solicitada nova transferencia')
  }
}
