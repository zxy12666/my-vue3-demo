/* eslint-disable */
(function (window) { var svgSprite = '<svg><symbol id="icon-31dingwei" viewBox="0 0 1024 1024"><path d="M511.954463 250.971985c-73.709769 0-133.669372 58.877969-133.669372 131.23288 0 72.339562 59.959603 131.157155 133.669372 131.157155 73.707722 0 133.639696-58.817594 133.639696-131.157155C645.594159 309.84893 585.662185 250.971985 511.954463 250.971985M511.954463 455.252555c-40.97625 0-74.311473-32.779567-74.311473-73.078389 0-40.284495 33.334199-73.077366 74.311473-73.077366 40.945551 0 74.278727 32.79287 74.278727 73.077366C586.23319 422.472987 552.900014 455.252555 511.954463 455.252555" fill="#ffffff" ></path><path d="M824.811914 401.684522c0-169.441087-140.347468-307.277362-312.857451-307.277362-172.479283 0-312.768423 137.836275-312.768423 307.277362 0 132.88552 192.606693 400.645866 275.461749 509.584997 8.724709 11.492752 22.683628 18.321274 37.305651 18.321274 14.5903 0 28.580942-6.828522 37.334303-18.321274C632.11517 802.331411 824.811914 534.602787 824.811914 401.684522M516.887822 864.759229l-4.933359 6.557346-4.934382-6.557346C350.606705 656.92881 253.370103 479.470119 253.370103 401.684522c0-140.062989 115.979478-254.012228 258.58436-254.012228 142.575206 0 258.552637 113.949238 258.552637 254.012228C770.537799 479.499795 673.36055 656.92881 516.887822 864.759229" fill="#ffffff" ></path></symbol></svg>'; var script = (function () { var scripts = document.getElementsByTagName('script'); return scripts[scripts.length - 1] }()); var shouldInjectCss = script.getAttribute('data-injectcss'); var ready = function (fn) { if (document.addEventListener) { if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState)) { setTimeout(fn, 0) } else { var loadFn = function () { document.removeEventListener('DOMContentLoaded', loadFn, false); fn() }; document.addEventListener('DOMContentLoaded', loadFn, false) } } else if (document.attachEvent) { IEContentLoaded(window, fn) } function IEContentLoaded (w, fn) { var d = w.document, done = false, init = function () { if (!done) { done = true; fn() } }; var polling = function () { try { d.documentElement.doScroll('left') } catch (e) { setTimeout(polling, 50); return }init() }; polling(); d.onreadystatechange = function () { if (d.readyState == 'complete') { d.onreadystatechange = null; init() } } } }; var before = function (el, target) { target.parentNode.insertBefore(el, target) }; var prepend = function (el, target) { if (target.firstChild) { before(el, target.firstChild) } else { target.appendChild(el) } }; function appendSvg () { var div, svg; div = document.createElement('div'); div.innerHTML = svgSprite; svgSprite = null; svg = div.getElementsByTagName('svg')[0]; if (svg) { svg.setAttribute('aria-hidden', 'true'); svg.style.position = 'absolute'; svg.style.width = 0; svg.style.height = 0; svg.style.overflow = 'hidden'; prepend(svg, document.body) } } if (shouldInjectCss && !window.__iconfont__svg__cssinject__) { window.__iconfont__svg__cssinject__ = true; try { document.write('<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>') } catch (e) { console && console.log(e) } }ready(appendSvg) })(window)
