
class PageManager {

    constructor() {
        this.oPages = $('[page-id]');
        this.nActivePage = 0;
        this.oActivePage = $(this.oPages[this.nActivePage]);
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

    last() {
        this.nActivePage--;
        this.oActivePage.attr('page-open', false);
        this.oActivePage = $(this.oPages[this.nActivePage]);
        this.closePageById(this.oActivePage.attr('page-id'));
    }

}