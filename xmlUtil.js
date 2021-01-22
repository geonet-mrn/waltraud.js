"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstElementByTagName = exports.getElementsByTagName = void 0;
function getElementsByTagName(parent, tagName) {
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
exports.getElementsByTagName = getElementsByTagName;
function getFirstElementByTagName(parent, tagName) {
    for (let element of getElementsByTagName(parent, tagName)) {
        if (element.type == "element" && element.name == tagName) {
            return element;
        }
    }
    return null;
}
exports.getFirstElementByTagName = getFirstElementByTagName;
