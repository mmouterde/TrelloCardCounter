var once = false;
$(".list-card:first").waitUntilExists(function () {
    if (!once)
        init();
    once = true;
}, true);

function init() {
    $(".list-header-extras").prepend("<span class='x-counter'><span>");
    updateCounters();
    setInterval(updateCounters, 3000);
}
function updateCounters() {
    $(".list-wrapper").each(function (index, elm) {
        $(elm).find(".x-counter").text($(elm).find(".list-card").length);
    })
}