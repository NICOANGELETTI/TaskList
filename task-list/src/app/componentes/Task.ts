/* Manejar la "Base de datos como interface" */
export interface Task {
    id?: number , // Cuando creamos podria no venir
    text: string ,
    Dia:string,
    reminder: boolean,
}