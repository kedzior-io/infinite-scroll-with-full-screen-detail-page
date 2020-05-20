var currentscrollHeight = 0;
var count = 0;

$(window).on("scroll", function () {

  const scrollHeight = $(document).height();
  const scrollPos = Math.floor($(window).height() + $(window).scrollTop());
  const isBottom = scrollHeight - 100 < scrollPos;
  const list = $(".list");

  if (isBottom && currentscrollHeight < scrollHeight) {

    for(var i = 0; i < 5; i++) {
      // This is for example purposes, I would use something like Vue x-template 
      list.append(`
        <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title"><a href="#" data-toggle="modal" data-target="#modalExample" data-backdrop="false">New Charahcter ${count}</a></h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>`
      );
      count++;
    }
    currentscrollHeight = scrollHeight;
  }
});