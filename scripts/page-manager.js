
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
        this.nZIndex = 5;
    }

    _openPageById(nId) {
        $(`[page-id="${nId}"]`).css('transform', 'rotateY(-150deg)');
    }

    _closePageById(nId) {
        $(`[page-id="${nId}"]`).css('transform', 'rotateY(0deg)');
    }

    next() {
        if ((this.nActivePage + 1) <= this.nPageCount) {
            this.nActivePage++;
            this.oActivePage.attr('page-open', true);
            this.oActivePage.parent().css('z-index', this.nZIndex);
            this.nZIndex++;
            if (this.nZIndex > 1000) {
                this.nZIndex = 5;
            }
            this._openPageById(this.oActivePage.attr('page-id'));
            this.oActivePage = $(this.oPages[this.nActivePage]);
        }
    }

    previous() {
        if ((this.nActivePage - 1) >= 0) {
            this.nActivePage--;
            this.oActivePage.attr('page-open', false);
            this.oActivePage.parent().css('z-index', '');
            this.oActivePage = $(this.oPages[this.nActivePage]);
            this._closePageById(this.oActivePage.attr('page-id'));
        }
    }

}