type project = {displayVersion: number}


export class Project {
    private name: string;
    private title: string;

    constructor(name: string, title: string) {
        this.name = name;
        this.title = title;
    }

    static getProjectsFromJSON(projectJSON: {[key: string]: project}) {

        const projects = [];

        for (const name of Object.keys(projectJSON)) {
            const displayVersion = projectJSON[name].displayVersion;

            if (displayVersion == 1) {  
                type displayV1 = project & {title: string};
    
                const toConvert = projectJSON[name] as displayV1;        
                const project = new Project(name, toConvert.title)
                console.log(project)
            }

        }
    }
}