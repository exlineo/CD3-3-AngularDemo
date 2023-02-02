/** Interface pour typer les actualités */
export interface ActualiteI {
    titre:string;
    image:ImageI;
    description?:string;
}
/** Typer les images */
export interface ImageI {
    legende?:string;
    url:string;
    alt?:string;
}