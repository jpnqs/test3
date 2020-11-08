
class PageManager {

    constructor() {
        this.oPages = $('[page-id]');
        var aTemp = []
        for (var i=this.oPages.length - 1; i>=0; i--) {
            aTemp.push(this.oPages[i]);
        }
        this.oPages = $(aTemp);
        this.nActivePage = 0;
        this.oActivePage = $(this.oPages[this.nActivePage]);
        this.nZIndex = 5;
    }

    openPageById(nId) {
        $(`[page-id="${nId}"]`).css('transform', 'rotateY(-150deg)');
    }

    closePageById(nId) {
        $(`[page-id="${nId}"]`).css('transform', 'rotateY(0deg)');
    }

    next() {
        this.nActivePage++;
        this.oActivePage.attr('page-open', true);
        this.openPageById(this.oActivePage.attr('page-id'));
        this.oActivePage = $(this.oPages[this.nActivePage]);
    }

    previous() {
        var nTemp = this.nActivePage;
        this.nActivePage--;
        this.oActivePage.attr('page-open', false);
        this.oActivePage = $(this.oPages[this.nActivePage]);
        this.closePageById(this.oActivePage.attr('page-id'));
    }

}