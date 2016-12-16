/**
 * Created by nalantianyi on 2016/12/13.
 */
import './main.scss';
import generateText from './sub';
import  $ from 'jquery';
import 'imports?jQuery=jquery!./plugin';
import  moment from 'moment';
let app = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
    $('body').append('<p>promise result is' + number + ' now is ' + moment().format('YYYY-MM-DD HH:mm:ss') + '</p>');
    $('p').greenify();
});
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(generateText());
