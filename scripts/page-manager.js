
class PageManager {

    constructor() {
        this.oPages = $('[page-id]');
    }


    openPageById(nId) {
        $(`[page-id="${nId}"]`).css('transform', 'rotateY(-150deg)');
    }

    closePageById(nId) {
        $(`[page-id="${nId}"]`).css('transform', 'rotateY(0deg)');

    }



}