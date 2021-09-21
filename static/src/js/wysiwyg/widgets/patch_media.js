odoo.define('web_editor_core.Patch.wysiwyg.widgets.media', function (require) {
    "use strict";

    const WysiwygWidgetsMedia = require('wysiwyg.widgets.media');

    WysiwygWidgetsMedia.VideoWidget.include({
        _getVideoURLData: function (url, options) {
            let res = this._super.apply(this, arguments);
            if (res.type === undefined) {
                const regexes = {
                    aparat: /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:aparat?\.com\/(?:video\/video\/embed\/videohash\/|v\/))([^\/]*).*/,
                };
                const matches = _.mapObject(regexes, regex => url.match(regex));

                if (matches.aparat && matches.aparat[1].length) {
                    res = {
                        embedURL: `//www.aparat.com/video/video/embed/videohash/${matches.aparat[1]}/vt/frame`,
                        type: 'aparat'
                    };
                }
            }
            return res
        }
    });
});

