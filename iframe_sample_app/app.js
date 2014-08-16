(function() {

  var SIDE_BAR_HREF = "https://incrediblegaming.hipchat.com/chat?focus_jid=155415_incrediblegaming@conf.hipchat.com",
      SIDE_BAR_REGEX = /_sidebar$/;

  return {
    events: {
      'app.activated': 'init',
      'pane.activated': 'paneActivated'
    },

    init: function(data){ //load content if app is at new_ticket_sidebar, ticket_sidebar and user_sidebar
      if (data.firstLoad && SIDE_BAR_REGEX.test(this.currentLocation())) {
        this.showIframe({ width: '1024px', height: '500px' });
      }
    },

    paneActivated: function(data) { //load content if app is at top_bar and nav_bar
      if (data.firstLoad) {
        this.showIframe({ width: '1024px', height: '500px' });
      }
    },

    showIframe: function(dimensions) {
      this.switchTo('iframePage', {
        dimension: dimensions,
        href: SIDE_BAR_HREF
      });
    }
  };
}());
