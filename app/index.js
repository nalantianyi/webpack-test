/**
 * Created by nalantianyi on 2016/12/13.
 */
var sub = require('./sub');
var app = document.createElement('div');
app.innerHTML = '<h1>小鸡的 webpack 示例</h1>';
app.appendChild(sub());
document.body.appendChild(app);
