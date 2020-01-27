module.exports = (ctx, locals) => {
    const { layout } = ctx.page;
    const { get_config } = ctx;
    let book_config = get_config('book');
    if (book_config == undefined || (layout !== 'page' && layout !== 'post')) {
        return null;
    }
    const [book_name, current_chapter_file] = ctx.path.split('/');
    const chapters = ctx.site.pages.data.filter(chapter => book_name === chapter.path.split('/')[0]);

    const o = Object.assign(locals, {book_name, current_chapter_file, chapters});
    return o;
}