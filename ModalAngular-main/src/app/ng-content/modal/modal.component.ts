import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-modal', 
    templateUrl: 'modal.component.html', 
    styleUrls: ['modal.component.css']
})
export class ModalComponent{

    corModalPadrao: string = 'rgb(121, 9, 103)'; 

    @Input()
    corModal: string = '';

}