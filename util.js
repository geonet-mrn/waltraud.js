"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getElementsByTagname = void 0;
function getElementsByTagname(parent, tagName) {
    let result = Array();
    if (parent == undefined || parent.elements == undefined) {
        console.warn("getElementsByTagName: parent element is null or undefined!");
        return result;
    }
    for (let element of parent.elements) {
        if (element.type == "element" && element.name == tagName) {
            result.push(element);
        }
    }
    return result;
}
exports.getElementsByTagname = getElementsByTagname;
