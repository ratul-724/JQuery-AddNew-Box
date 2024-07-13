$('document').ready(function(){
    $('.container button').click(function(){
        let lastCatNum = $('.category-box:last').attr('cat-num');
        let NewCatNum = +lastCatNum + 1;
        let NewCat = '<div class="category-box" cat-num="1"> \
                         <input type="text" placeholder="Add New Category" class="input-box"> \
                    </div>'
        $('.container form').append(NewCat);
    });
});