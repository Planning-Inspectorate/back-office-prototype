
//lifted from app/routes.js
exports.addToList = function (obj, itemList, change) {
    if(!itemList){
        itemList = []; // if no array exists create one
    }
    // Is the user changing an option?
    if(change) {
        // yes - find object to change and overwrite
        itemList.splice(change, 1, obj);
    } else {
        // no - add new object
        itemList.push(obj);
    }
    return itemList; // return edited array
}


exports.createExcerpt = (text, maxLength) => {
	const lastSpaceIndex = text.lastIndexOf(' ', maxLength);
	return `${text.slice(0, Math.max(0, lastSpaceIndex))}`;
};