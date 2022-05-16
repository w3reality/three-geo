// WIP

class MediaHelper {
    constructor(dom, domWrapper) {
        this.dom = dom;
        this.domWrapper = domWrapper;

        // 24 hours on Earth -- in one image | Stephen Wilkes https://www.youtube.com/watch?v=0ITuQcoLXeE
        const yt = document.createElement('bento-youtube');
        yt.setAttribute('data-videoid', '0ITuQcoLXeE');
        dom.appendChild(yt);
    }

    /* TODO - click a link in video
Blocked opening '<URL>' in a new window because the request was made
in a sandboxed frame whose 'allow-popups' permission is not set.
    */

    /* NOTE - call `toggle(false)` while playing a video
Uncaught TypeError: e.pause is not a function
at Object.Ff (pause-helper.js:59:15)
at u (index.js:86:21)
at xn (size-observer.js:241:5)
at ResizeObserver.zn (size-observer.js:191:7)
    */
    toggle(tf) {
        this.domWrapper.style['display'] = tf ? '' : 'none';
    }
}

export default MediaHelper;