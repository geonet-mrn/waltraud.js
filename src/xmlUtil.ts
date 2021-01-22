export function getElementsByTagName(parent: any, tagName: string): Array<any> {

    let result = Array<any>()

    if (parent == undefined || parent.elements == undefined) {        
        console.warn("getElementsByTagName: parent element is null or undefined!")
        return result
    }
    

    for (let element of parent.elements) {
        if (element.type == "element" && element.name == tagName) {
            result.push(element)
        }
    }

    return result
}


export function getFirstElementByTagName(parent : any, tagName : string) : any|null {
      
    for (let element of getElementsByTagName(parent, tagName)) {
        if (element.type == "element" && element.name == tagName) {
            return element
        }
    }

    return null
}