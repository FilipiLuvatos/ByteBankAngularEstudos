import { style } from "@angular/animations";
import { Component, EventEmitter, Output } from "@angular/core";
import { EmailValidator } from "@angular/forms";

@Component({
  selector: 'app-nova_transferencia',
  templateUrl: './nova_transferencia.component.html',
  styleUrls: ['./nova_transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();
  // Através dessa classe EnventEmitter,  
  // é possivél propagar esse dado.

  valor!: number; // Pode ser necessario inicialização
  destino!: number;
  transferir() {
    console.log('Solicitada nova transferencia')
    this.aoTransferir.emit({ valor: this.valor, destino: this.destino })
    this.limparCampos();
  }
  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
