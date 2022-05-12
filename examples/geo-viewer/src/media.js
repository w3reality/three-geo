class MediaHelper {
    constructor(domWrapper) {
        this.domWrapper = domWrapper;
    }

    toggle(tf) {
        this.domWrapper.style['display'] = tf ? '' : 'none';
    }
}

export default MediaHelper;