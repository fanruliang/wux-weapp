import ad from '../index/ad'

ad({
    scrollView() {
        wx.navigateTo({
            url: '../../pages/virtual-list/scroll-view',
        })
    },
    pageScroll() {
        wx.navigateTo({
            url: '../../pages/virtual-list/page-scroll',
        })
    },
})
