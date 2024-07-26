$('document').ready(function(){
    $('.container .add').click(function(){
        let lastCatNum = $('.category-box:last').attr('cat-num');
        let NewCatNum = + lastCatNum + 1;
        let NewCat = '<div class="category-box" cat-num="1"> \
                         <input type="text" placeholder="Add New Category" required class="input-box"> \
                         <img src="img/close.png" alt="close" class="img"> \
                    </div>'
        $('.container form').append(NewCat);
    });
    $('.img').click(function(){
        $('.container form').remove(NewCat);
    })
});