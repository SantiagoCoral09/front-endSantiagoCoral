export interface Comentario{////acceder desde cualquier parte del programa
    id?:number;////? es opcional
    titulo:string;
    autor:string;
    texto:string;
    fechaCreacion:Date;
}