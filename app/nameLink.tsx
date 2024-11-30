export class NameLink {
    private name: string;
    private link: string;
    
    constructor(name: string, link: string) {
        this.name = name;
        this.link = link;
    }

    getName() {
        return this.name;
    }
    
    getLink() {
        return this.link;
    }
}