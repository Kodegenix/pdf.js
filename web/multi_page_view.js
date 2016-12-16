'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('pdfjs-web/multi_page_view', ['exports'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports);
  } else {
    factory((root.pdfjsWebMultiPageView = {}));
  }
}(this, function (exports) {
    function MultiPageView(options) {
        this.container = options.container;
        this.viewer = options.viewer;
        this.eventBus = options.eventBus;
        this.toolbar = options.toolbar;
    }


    MultiPageView.prototype = {
        onePageView: function () {
            this.viewer.style.cssText = null;
            this.multiPage = false;
            this.toolbar.multiPageViewButtonMenu.classList.remove('toggled');
            this.toolbar.onePageViewButtonMenu.classList.add('toggled');
        },
        multiPageView: function () {
            this.multiPage = true;
            this.viewer.style.cssText = "display: flex; flex-direction: row; flex-wrap: wrap";
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

    exports.MultiPageView = MultiPageView;
}));
