export class Project {
    private name: string;
    private title: string;
    private isPrivate: boolean;

    constructor(name: string, title: string, isPrivate?: boolean) {
        this.name = name;
        this.title = title;
        this.isPrivate = isPrivate ? isPrivate : false;
    }

    getName() {
        return this.name;
    }

    getTitle() {
        return this.title;
    }

    getIsPrivate() {
        return this.isPrivate;
    }
}