/**
 * @constructor
 */
var TouchNavigation = function() {

    /**
     * @type {HTMLElement}
     */
    this.liveStrip = document.getElementById('live-strip');

    /**
     * @type {{item: HTMLElement, touch: ?}}
     */
    this.downedItem = null;

    /**
     * @type {Event}
     */
    this.prevTouch = null;

    this.liveStrip.addEventListener('touchstart', function(e) {
        if (this.prevTouch === null) {
            this.prevTouch = e.changedTouches.item(0);
        }
        e.preventDefault();
    }.bind(this));

    window.addEventListener('touchmove', function(e) {
        var newTouch = e.changedTouches.item(0),
            dx;
        if (this.prevTouch.identifier === newTouch.identifier) {
            dx = this.prevTouch.clientX - newTouch.clientX;
            this.liveStrip.scrollLeft += dx * 1 / Resizer.getScale();
            this.prevTouch = newTouch;
        }

        this.downedItem = null;
    }.bind(this));
    window.addEventListener('touchend', function(e) {
        if (e.changedTouches.item(0).identifier === this.prevTouch.identifier) {
            this.prevTouch = null;
        }
        e.preventDefault();
    }.bind(this));
};

/**
 * @param {HTMLElement} item
 * @param {MouseEvent} e
 */
TouchNavigation.prototype.touchStartItem = function(item, e) {
    this.downedItem = {item: item, touch: e.changedTouches.item(0)};
};

/**
 * @param {HTMLElement} item
 * @param {MouseEvent} e
 */
TouchNavigation.prototype.touchEndItem = function(item, e) {
    if (this.downedItem !== null && this.downedItem.touch.identifier === e.changedTouches.item(0).identifier) {
        console.log(this.downedItem.item.dataset.videoUrl);
    }
};