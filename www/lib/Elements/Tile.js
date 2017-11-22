var Tile = function(imgUrl, title, videoUrl, type) {
    this.imgUrl = imgUrl;
    this.title = title;
    this.videoUrl = videoUrl;
    this.type = type || this.type.LIVE_CHANNEL;
};

Tile.type = {
    LIVE_CHANNEL : 0,
    SERIES : 1,
    EPISODE : 2
};

Tile.prototype.createDOMElement = function() {
    var imgElement = document.createElement('img');
    var titleElement = document.createElement('div');
    var itemElement = document.createElement('div');

    itemElement.classList.add('item');
    imgElement.classList.add('img');
    titleElement.classList.add('title', 'text', 'font-size-small');

    titleElement.innerText = this.title;
    imgElement.src = this.imgUrl;

    itemElement.dataset.videoUrl = this.videoUrl;
    itemElement.dataset.type = this.type;

    itemElement.addEventListener('mouseup', function(e) {
        if (app.scrollingControl.totalDx < 5) {
            app.videoPlayer.play(itemElement.dataset.videoUrl, itemElement.dataset.type);
        }
        e.preventDefault();
    }.bind(this));

    itemElement.addEventListener('touchend', function(e) {
        if (app.scrollingControl.totalDx < 5) {
            app.videoPlayer.play(itemElement.dataset.videoUrl, itemElement.dataset.type);
        }
        e.preventDefault();
    }.bind(this));

    itemElement.appendChild(imgElement);
    itemElement.appendChild(titleElement);

    return itemElement;

};