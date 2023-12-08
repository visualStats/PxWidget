/*******************************************************************************
PxWidget - ISOGRAM
*******************************************************************************/
// Init
var pxWidget = pxWidget || {};
pxWidget.root = 'https://cdn.jsdelivr.net/gh/visualStats/PxWidget@1.0.2/';


(function (i, s, o, g, r, a, m) {
    i[r].queue = i[r].queue || function () {
        (i[r].widgets = i[r].widgets || []).push(arguments);
    };
    i[r].load = i[r].load || function (i, s, o, g, r, a, m) {
        e = s.createElement(o);
        t = s.getElementsByTagName('head')[0];

        switch (o) {
            case 'script':
                e.async = a || false;
                g.match(/^(http(s)?:)?\/\//gi) ? e.src = g : e.text = g;

                if (e.src) {
                    var xhttp = new XMLHttpRequest;
                    xhttp.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            window.eval(m ? this.responseText.replace(/jQuery/g, 'pxWidget.jQuery').replace(/L\.DomUtil/g, 'pxWidget.L.DomUtil') : this.responseText);
                        }
                    };
                    xhttp.open("GET", e.src, false);
                    xhttp.send();
                } else if (e.text) {
                    window.eval(m ? e.text.replace(/jQuery/g, 'pxWidget.jQuery') : e.text);
                }
                break;
            case 'link':
                e.rel = 'stylesheet';
                e.href = g;
                t.appendChild(e);
                break;
        }
    };
    if (i['WidgetObject'] === undefined) {
        i['WidgetObject'] = r;
        i[r].load(i, s, o, g, r, a, m);
    }
})(window, document, 'script', pxWidget.root + 'js/index.js', 'pxWidget');
