class NodeClass{
    constructor(valor){
        this.valor = valor;
        this.next = null;
    }
}


class ListaCircular{
    constructor(){
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }

    agregarAlInicio(valor){
        let NodoParaAgregar = new NodeClass(valor);
        if(this.length === 0){
            this.head = NodoParaAgregar;
            this.tail = this.head;
            this.tail.next = this.head;
        }else{
            NodoParaAgregar.next = this.head;
            this.head = NodoParaAgregar;
            this.tail.next = this.head;
        }

        this.length++;
    }

    agregarAlFinal(valor){
        let NodoParaAgregar = new NodeClass(valor);
        if(this.length === 0){
            this.head = NodoParaAgregar;
            this.tail = this.head;
            this.head.next = this.tail;
        }else{            
            this.tail.next = NodoParaAgregar;
            NodoParaAgregar.next = this.head;
            this.tail = NodoParaAgregar;
        }
        this.length++;
    }

    agregarEnDeterminadaPosicion(valor, indice){
        let NodoAgregar = new NodeClass(valor);
        let NodoVisitado = this.head;
        let NodoAnteriorAlVisitado;

        if(indice<0 || indice  > this.length){
            return null;
        }
        
        if(indice === 0){
            this.agregarAlInicio(valor);
        }else if(indice === this.length){
            this.agregarAlFinal(valor);
        }else{
            for(let i=0; i < indice; i++){
                NodoAnteriorAlVisitado = NodoVisitado;
                NodoVisitado = NodoVisitado.next;
            }
            NodoAgregar.next = NodoVisitado;
            NodoAnteriorAlVisitado.next = NodoAgregar;
            this.length ++;
        }  
    }

    imprimirLista(){
        let lista = [];
        let nodoVisitado = this.head;
        for(let i = 0; i<this.length; i++){
            lista.push(nodoVisitado.valor);
            nodoVisitado = nodoVisitado.next;
        }

        document.getElementById('listar').innerHTML = lista;
    }
}

let ListaExposicion = new ListaCircular();
ListaExposicion.agregarAlFinal("HOLA");
ListaExposicion.agregarAlFinal("ADIOS");
ListaExposicion.imprimirLista();

function añadirAlInicio(){
    let valor = document.getElementById('valorN').value;
    if(valor === ""){
        alert("INGRESE UN VALOR EN LA CASILLA 'VALOR NODO'");
    }else{
        ListaExposicion.agregarAlInicio(valor);
        ListaExposicion.imprimirLista();
    }
}

function añadirAlFinal(){
    let valor = document.getElementById('valorN').value;
    if(valor === ""){
        alert("INGRESE UN VALOR EN LA CASILLA 'VALOR NODO'");
    }else{
        ListaExposicion.agregarAlFinal(valor);
        ListaExposicion.imprimirLista();
    } 
}

function añadirEnPosicion(){
    let valor = document.getElementById('valorN').value;
    let posicion = parseInt(document.getElementById('posicionN').value);
    if(valor === "" || posicion === ""){
        alert("INGRESE UN VALOR EN LA CASILLA 'VALOR NODO' Y UNA POSICION EN LA CASILLA 'POSICION NODO'");
    }else{
        ListaExposicion.agregarEnDeterminadaPosicion(valor,posicion);
        ListaExposicion.imprimirLista();
    } 
}





