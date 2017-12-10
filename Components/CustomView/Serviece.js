/**
 * Created by QG on 2017/12/10.
 */

var BaseURL = 'https://api.douban.com/v2/';

var DoubanApis = {

    /* 图书搜索 */
    book_search : BaseURL + 'book/search',

    /* 图书详情 */
    book_detail : BaseURL + 'book/',

    /* 电影搜索 */
    movice_search : BaseURL + 'movie/search',

}

export default DoubanApis;