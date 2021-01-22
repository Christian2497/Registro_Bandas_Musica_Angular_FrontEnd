export class Banda{
    public title: string;
    public description: string;
    public year: number;
    public image: string;

    constructor(title, description, year, image){
        this.title = title;
        this.description = description;
        this.year = year;
        this.image = image;
    }
}