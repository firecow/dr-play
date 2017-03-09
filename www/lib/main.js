var windowLoaded = function() {
    window.app = {
        videoPlayer: new VideoPlayer(),
        dPadNavigation: new DPadNavigation(),
        scrollingControl: new ScrollingControl(),
        fullscreenApi: new FullscreenApi(),
        resizer: new Resizer(),
        itemManager: new ItemManager(),
        beamMedia: new BeamMedia()

    };

    app.itemManager.prepareLiveTVItems();
    app.resizer.onResize();
};

window.addEventListener('load', windowLoaded);

