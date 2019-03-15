var flag = true;
var verificationCodeInput = $('#weixin-check-modal input');
var token = "{$Request.token}";
var verificationBtn = $('#weixin-check-modal .wl-btn-primary');
verificationCodeInput.on('keyup', function(e) {
    if(verificationCodeInput.val()) {
        verificationBtn.removeAttr('disabled');
    } else {
        verificationBtn.attr('disabled', true);
    }
})
function Modal(options) {
    var defaultOptions = {
        visible: false,
        selector: '.wl-modal-bg',
        maskClosable: false,
    };

    this.options = $.extend({}, defaultOptions, options);
    this.modal = $(this.options.selector);

    this._init();
}

Modal.prototype._init = function() {
    if(this.options.maskClosable) {
        var _this = this;
        // this.modal.on('click', function(e) {
        //     if($(e.target).is(_this.modal)) {
        //         _this.setVisible(false);
        //     }
        // });
    }

    this.setVisible(this.options.visible);
}

Modal.prototype.setVisible = function(visible, callback) {
    this.options.visible = visible;
    if(visible) {
        this.modal.css('display', 'block');
    } else {
        verificationCodeInput.val('');
        this.modal.css('display', 'none');
    }
    if(callback) {
        callback();
    }
}
function showModal() {
    if(index==1) {
        var nodes = ' <div class="wl-modal-bg" id="fresh-man-modal">\n' +
            '        <div class="wl-modal" style="width: 360px;">\n' +
            '            <div class="wl-modal-body" style="margin-top: 20px;">\n' +
            '            <div style="margin-top: 20px;display: flex;align-items: center;flex-direction: row">\n' +
            '                <svg style="width: 40px;height: 40px;" aria-hidden="true">\n' +
            '                    <use xlink:href="#icon-chenggong"></use>\n' +
            '                </svg>\n' +
            '                <h4 data-tr="MainModalTitle" style="font-size: 14px;display: inline-block;margin: 0 10px;vertical-align: top;line-height: 24px;">\n' +
            '                   You have not completed the new process, please click \'Next\' to continue.\n' +
            '                </h4>\n' +
            '            </div>\n' +
            '                <p style="font-size: 14px;line-height: 1.5em;color: red;margin-left: 34px;width: 320px;" data-tr="MainModalBody">In the process of operation, please follow the system prompt to complete each step of the operation, otherwise you can not complete the new registration process. Click on the next step to continue the freshman registration process.</p>\n' +
            '                <a id="closeModal" class="wl-btn wl-btn-primary wl-right" data-tr="next">Next step</a>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>'
    }else{
        var nodes = ' <div class="wl-modal-bg" id="fresh-man-modal">\n' +
            '        <div class="wl-modal" style="width: 360px;height: 184px;">\n' +
            '            <div class="wl-modal-body" style="margin-top: 20px;">\n' +
            '            <div style="margin-top: 20px;display: flex;align-items: center;flex-direction: row">\n' +
            '                <svg style="width: 24px;height: 24px;" aria-hidden="true">\n' +
            '                    <use xlink:href="#icon-chenggong"></use>\n' +
            '                </svg>\n' +
            '                <h4 data-tr="MainModalTitle" style="font-size: 14px;display: inline-block;margin: 0 10px;vertical-align: top;line-height: 24px;">\n' +
            '                    您尚未完成新生流程，请点击下一步继续完成。\n' +
            '                </h4>\n' +
            '            </div>\n' +
            '                <p style="font-size: 14px;line-height: 1.5em;color: red;margin-left: 34px;width: 320px;" data-tr="MainModalBody">在操作过程中，请按照系统提示完成每一步操作，否则无法完成新生报到流程。点击“下一步”继续新生报到流程。</p>\n' +
            '                <a id="closeModal" class="wl-btn wl-btn-primary wl-right" data-tr="next">下一步</a>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>'
    }
    $("body").append(nodes);
    // 设置languageIndex处理选择中英切换后再换页，语言保持
    var freshManModal = new Modal({
        selector: '#fresh-man-modal',
        maskClosable: true,
    });
    freshManModal.setVisible(true);
    $("#closeModal").click(function close() {
        freshManModal.setVisible(false);
    })
}

function showMessage(message,dataTr) {
    const showMessage=` <div id="showMessage" class="alertModal" style="width:280px;left:50%;margin-left: -156px;display: block">
            <div class="alertModalTitle"><span id="Reminder" data-tr="notice">提示</span><img class="pullRight iconHelp showClose" alt="require" src="/static/home/pc/assets/close.png" /></div>
         <div id="alertModalContent" class="alertModalContent" data-tr=${dataTr}>${message}</div>
         <div id="sureClose" class="textAlign flexCenter"><a class="showMessage_add" style="margin-right: 4px" data-tr="comfirm">确定</a></div>
          </div>`;
    $("body").append(showMessage);
    var translationElements = $('[data-tr]');
    translationElements.each(function(i, el) {
        $(el).html($.chaLang(index, $(el).attr('data-tr')));
    });
    //注销
    $(".showClose").click(function (e) {
       $("#showMessage").remove();
    })
    $('.showMessage_add').click(function () {
        $("#showMessage").remove();
    })
}