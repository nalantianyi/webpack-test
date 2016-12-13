/**
 * Created by nalantianyi on 2016/12/13.
 */
function generateText() {
    var element = document.createElement('h2');
    element.innerHTML = 'Hello h2 world';
    return element;
}
module.exports = generateText;