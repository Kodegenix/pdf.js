'use strict';

    function MultiPageView(options) {
        this.container = options.container;
        this.viewer = options.viewer;
        this.toolbar = options.toolbar;
        this.mainToolbar = options.mainToolbar;
    }

    MultiPageView.prototype = {
        onePageView: function () {
            this.viewer.style.cssText = null;
            this.multiPage = false;
            this.toolbar.multiPageViewButton.classList.remove('toggled');
            this.toolbar.onePageViewButton.classList.add('toggled');
            this.toolbar.multiPageViewButtonMenu.classList.remove('toggled');
            this.toolbar.onePageViewButtonMenu.classList.add('toggled');
        },
        multiPageView: function () {
            this.multiPage = true;
            this.viewer.style.cssText = "display: flex; flex-direction: row; flex-wrap: wrap";
            this.toolbar.onePageViewButton.classList.remove('toggled');
            this.toolbar.multiPageViewButton.classList.add('toggled');
            this.toolbar.onePageViewButtonMenu.classList.remove('toggled');
            this.toolbar.multiPageViewButtonMenu.classList.add('toggled');
        },
        getDivWidth: function(){
            return this.viewer.children[0].clientWidth;
        },
        updateVisiblePagesCount: function() {
            var screenWidth = screen.width;
            var pageWidth = this.getDivWidth();
            this.pagesVisibleCount = Math.floor(screenWidth/pageWidth);
        },
        previousPage: function(page) {
            this.updateVisiblePagesCount();
            return page - this.pagesVisibleCount <=0 ? 1 : page - this.pagesVisibleCount;

        },
        nextPage: function(page, pagesCount) {
            this.updateVisiblePagesCount();
            return page + this.pagesVisibleCount > pagesCount ? pagesCount : page + this.pagesVisibleCount;
        }

    };
