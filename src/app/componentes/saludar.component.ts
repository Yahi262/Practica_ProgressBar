import { Component, Input, Output, EventEmitter } from "@angular/core";//esto se necesita para crear un decorador
/* componente hijo*/
//eventemmit es para los eventos
@Component(
    {//van adentro los metadatos
        selector: 'saludar-app',
        templateUrl: './saludar.component.html', //es la ruta donde esta la plantilla
        styleUrls: ['./saludar.component.css']      
    }
)

export class SaludarComponent{
    @Input() public nombre:string;
    @Output() saludar: EventEmitter<string> = new EventEmitter<string>();
    
    public nombres: Array<string>=[];
    public nombreLista: string="";//"Yai"
    constructor(){
       /* this.nombre="Yahis"*/ //aqui se esta agregando un valor a nombre
    }

    onClick(){
        this.saludar.emit('Hola! saludos desde el componente hijo x)');
    }
    onButtonClick(){
        this.nombres.push(this.nombreLista);
        this.nombreLista='';
        console.log(this.nombres);
        
    }
}//esto es como para dar a conocer la clase