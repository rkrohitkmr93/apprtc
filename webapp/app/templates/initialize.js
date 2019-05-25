var loadingParams = {
      errorMessages: '{{ error_messages }}',
      isLoopback: '{{ is_loopback }}',
      warningMessages: '{{ warning_messages }}',
//{% if room_id %}
      roomId: '{{ room_id }}',
      roomLink: '{{ room_link }}',
//{% endif %}
      mediaConstraints: '{{ media_constraints | safe }}',
      offerOptions: '{{ offer_options | safe }}',
      peerConnectionConfig: '{{ pc_config | safe }}',
      peerConnectionConstraints: '{{ pc_constraints | safe }}',
      iceServerRequestUrl: '{{ ice_server_url }}',
      iceServerTransports: '{{ ice_server_transports }}',
      wssUrl: '{{ wss_url }}',
      wssPostUrl: '{{ wss_post_url }}',
      bypassJoinConfirmation: '{{ bypass_join_confirmation }}',
      versionInfo: '{{ version_info }}',
    };

    var appController;

    function initialize() {
      // We don't want to continue if this is triggered from Chrome prerendering,
      // since it will register the user to GAE without cleaning it up, causing
      // the real navigation to get a "full room" error. Instead we'll initialize
      // once the visibility state changes to non-prerender.
      if (document.visibilityState === 'prerender') {
        document.addEventListener('visibilitychange', onVisibilityChange);
        return;
      }
      appController = new AppController(loadingParams);
    }

    function onVisibilityChange() {
      if (document.visibilityState === 'prerender') {
        return;
      }
      document.removeEventListener('visibilitychange', onVisibilityChange);
      initialize();
    }

    initialize();