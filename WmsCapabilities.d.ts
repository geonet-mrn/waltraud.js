export declare class WmsCapabilities {
    private xmlString;
    document: any;
    constructor(xmlString: string);
    getElementsByTagname(parent: any, tagName: string): Array<any>;
    getBoundingBox(): any;
    getVersion(): string;
}
