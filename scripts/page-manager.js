/**
 * The page manager is used for all interactions with the christmas card, like swiping and those stuff 
 * @author Jonas Grümpel
 */

/**
 * Manages the pages of the christmas card
 * @property {jQuery[]} oPages
 * @property {number} nPageCount
 * @property {jQuery} oActivePage
 * @property {number} nActivePage
 * @property {object} oPageOpenListener
 * @property {object} oPageCloseListener
 * @property {object} oPageShowCount
 * @property {number} nZIndex 
 */
class PageManager {

    constructor() {
        this.oPages = $('[page-id]');
        var aTemp = []
        for (var i=this.oPages.length - 1; i>=0; i--) {
            aTemp.push(this.oPages[i]);
        }
        this.oPages = $(aTemp);
        this.nPageCount = this.oPages.length;
        this.nActivePage = 0;
        this.oActivePage = $(this.oPages[this.nActivePage]);
        this.oPageOpenListener = {
            '': function() {}
        };
        this.oPageCloseListener = {
            '': function() {}
        };
        this.oPageShowCount = {};
        this.nZIndex = 5;
    }

    _openPageById(nId) {
        $(`[page-id="${nId}"]`).css('transform', 'rotateY(-150deg)');
    }

    _closePageById(nId) {
        $(`[page-id="${nId}"]`).css('transform', 'rotateY(0deg)');
    }

    _nextZIndex() {
        this.nZIndex++;
        return this.nZIndex;
    }

    _pageShown(sId) {
        if (!this.oPageShowCount[sId]) {
            this.oPageShowCount[sId] = 0;
        }
        this.oPageShowCount[sId] += 1;   
    }

    next() {
        if ((this.nActivePage + 1) <= this.nPageCount) {

            this.nActivePage++;

            this.oActivePage.attr('page-open', true);

            this.oActivePage.parent().css('z-index', this._nextZIndex());
            if (this.nZIndex > 1000) {
                this.nZIndex = 5;
            }

            $('.flipable-site-front', this.oActivePage).css('z-index', this._nextZIndex());
            
            setTimeout(() => {
                $('.flipable-site-back', this.oActivePage).css('z-index', this._nextZIndex());
            }, 750);

            var sId = this.oActivePage.attr('page-id');

            this._openPageById(sId);

            var oCurrentPage = $(this.oPages[this.nActivePage]);

            this.oPageOpenListener[''](oCurrentPage);

            var sOpenId = oCurrentPage.attr('page-id');

            this._pageShown(sOpenId);

            // try to call event handler
            var fnHandler = this.oPageOpenListener[sOpenId];
            if (fnHandler) {
                fnHandler(oCurrentPage, this);
            }

            this.oActivePage = oCurrentPage;

        }
    }

    previous() {
        if ((this.nActivePage - 1) >= 0) {

            this.nActivePage--;

            this.oActivePage.attr('page-open', false);

            this.oActivePage.parent().css('z-index', '');

            $('.flipable-site-back', this.oActivePage).css('z-index', '');
            $('.flipable-site-front', this.oActivePage).css('z-index', '');

            this.oActivePage = $(this.oPages[this.nActivePage]);
            this._closePageById(this.oActivePage.attr('page-id'));
        }
    }

    onPageOpen(sId, fnHandler) {
        if (typeof fnHandler != 'function') {
            throw new TypeError();
        }
        this.oPageOpenListener[sId] = fnHandler;
    }

    onPageClose(sId, fnHandler) {
        if (typeof fnHandler != 'function') {
            throw new TypeError();
        }
        this.oPageCloseListener[sId] = fnHandler;
    }

    getShowCount(sId) {
        if (!this.oPageShowCount[sId]) {
            this.oPageShowCount[sId] = 0;
        }
        return this.oPageShowCount[sId];
    }

}