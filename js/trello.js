
var onAuthorize = function() {
    updateLoggedIn();
    $("#output").empty();

    Trello.members.get("me", function(member){
        $("#fullName").text(member.fullName);

        var $cards = $("<div>")
            .text("Loading Cards...")
            .appendTo("#output");
        Trello.get("cards/[:id]", function(cards) {
            $cards.empty();
            $.each(cards, function(ix, card) {
                $("<a>")
                    .attr({href: card.url, target: "trello"})
                    .addClass("card")
                    .text(card.name)
                    .appendTo($cards);
            });
        });
    });

};

var updateLoggedIn = function() {
    var isLoggedIn = Trello.authorized();
    $("#loggedout").toggle(!isLoggedIn);
    $("#loggedin").toggle(isLoggedIn);
};

var logout = function() {
    Trello.deauthorize();
    updateLoggedIn();
};

Trello.authorize({
    interactive:false,
    success: onAuthorize
});

$("#connectLink")
    .click(function(){
        Trello.authorize({
            type: "popup",
            success: onAuthorize
        })
    });

$("#disconnect").click(logout);