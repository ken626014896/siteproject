(function ($) {
    if (typeof(bind_url) == "undefined") {
        bind_url = '';
    }
    if (typeof(rebind_url) == "undefined") {
        rebind_url = '';
    }
    var taexg = "";

    function ChaLang(status, stringText) {
        this.status = status;
        this.stringText = stringText;
        this._chaLang();
    }

    ChaLang.prototype._chaLang = function () {
        var status = this.status;
        var stringText = this.stringText;
        switch (stringText) {
//          phone端
            case "phoneFooter":
                taexg = status ? "Copyright &copy; 2017 DGUT All Rights Reserved" : "Copyright &copy; 2017 东莞理工学院";
                break;
            case "titleSystem":
                taexg = status ? "Central Authentication System" : "中央认证系统";
                break;
            case "backLogin":
                taexg = status ? "Return to the LoginPage" : "返回至登录页";
                break;
            case "backLogin2":
                taexg = status ? "Return to login" : "返回登录";
                break;
            case "oldPhone":
                taexg = status ? "Please enter the old binding phone number" : "请输入旧绑定手机号";
                break;
            case "newPhone":
                taexg = status ? "Please enter the new binding phone number" : "请输入新绑定手机号";
                break;
            case "nextStep":
                taexg = status ? "Next step" : "下一步";
                break;
            case "preStep":
                taexg = status ? "Previous step" : "上一步";
                break;
            case "loginSuccess":
                taexg = status ? "Login Successful" : "登录成功";
                break;
            case "loginSuccessTip":
                taexg = status ? "Please click the next step to continue to complete the registration process for new students. During the operation, please follow the instructions of the system to complete each step of operation, otherwise the registration process for new students cannot be completed. Click \"next\" to enter " : "请点击下一步继续完成新生报到流程，在操作过程中，请按照系统提示完成每一步操作，否则无法完成新生报到流程。点击“下一步”进入";
                break;
//          PC端或公用
            case "title":
                taexg = status ? "Binding Cell Phone" : "绑定手机";
                break;
            case "phoneBindingNumber":
                taexg = status ? "The current binding mobile phone number:" : "当前绑定手机号：";
                break;
            case "phoneRebinding":
                taexg = status ? "Change" : "手机改绑";
                break;
            case "phoneBindingTip":
                taexg = status ? "You have bound the mobile phone, click next" : "您已经绑定了手机，请点击下一步";
                break;
            case "remarkText":
                taexg = status ? "For the first time, please change your password for your account security." : "新生首次登陆，为了你的账号安全，请修改密码。";
                break;
            case "titleRelieveBind":
                taexg = status ? "Relieve Phone" : "手机解绑";
                break;
            case "titleLogin":
                taexg = status ? "Welcome to login" : "欢迎登录";
                break;
            case "titleLoginVerify":
                taexg = status ? "Security Settings Login" : "安全设置登录";
                break;
            case "backLoginTitle":
                taexg = status ? "Back" : "返回系统登录";
                break;
            case "securitySettingTitle":
                taexg = status ? "Security" : "安全设置";
                break;
            case "titlevisitLogin":
                taexg = status ? "Welcome to visit" : "欢迎访客登录";
                break;
            case "schoolLogin":
                taexg = status ? "User login" : "校内用户登录";
                break;
            case "titleHelp":
                taexg = status ? "Help" : "帮助";
                break;
            case "schoolBinding":
                taexg = status ? "On-campus" : "校内用户绑定";
                break;
            case "visitBinding":
                taexg = status ? "Visitors" : "访客绑定";
                break;
            case "titleCallBack":
                taexg = status ? "Retrieve Password" : "找回密码";
                break;
            case "phoneChange":
                taexg = status ? "Phone Bind" : "手机改绑";
                break;
            case "sureChangePhone":
                taexg = status ? "Phone Bind" : "确认改绑";
                break;
            case "titleChangePass":
                taexg = status ? "Change Password" : "修改密码";
                break;
            case "relieveBinding":
                taexg = status ? "Relieve Binding" : "解除绑定";
                break;
            case "sureBinding":
                taexg = status ? "Binding" : "确定绑定";
                break;
            case "sureChange":
                taexg = status ? "Change" : "确定修改";
                break;
            case "sureChangeRetrieve":
                taexg = status ? "Retrieve" : "确定修改";
                break;
            case "username":
                taexg = status ? "Please enter your account" : "请输入中央认证账号";
                break;
            case "phone":
                taexg = status ? "Please enter your phone number" : "请输入手机号";
                break;
            case "SecurityBtn":
                taexg = status ? "Please enter" : "请输入验证码";
                break;
            case "picBtn":
                taexg = status ? "Graphic code" : "图形验证码";
                break;
            case "codeBtn":
                taexg = status ? "Aquiring" : "发送验证码";
                break;
            case "account":
                taexg = status ? "Account：" : "账号：";
                break;
            case "oldPassword":
                taexg = status ? "Please enter old password" : "请输入旧中央认证密码";
                break;
            case "casPassword":
                taexg = status ? "Please enter password" : "请输入中央认证密码";
                break;
            case "goBack":
                taexg = status ? "Back" : "返回登录";
                break;
            case "secPassword":
                taexg = status ? "Please enter password again" : "请再次输入中央认证密码";
                break;
            case "newPassword":
                taexg = status ? "Please enter new password" : "请输入新中央认证密码";
                break;
            case "secNewPassword":
                taexg = status ? "Please enter new password again" : "请再次输入新密码";
                break;
            case "bindingSuccess":
                taexg = status ? "Successful Binding：" : "已绑定手机：";
                break;
            case "loginBtn":
                taexg = status ? "Login" : "登录";
                break;
            case "weiXinLogin":
                taexg = status ? "WeChat Login" : "微信登录";
                break;
            case "otherMethod":
                taexg = status ? "Other login channels" : "其他登录渠道";
                break;
            case "visitLogin":
                taexg = status ? "Visitor Login" : "访客登录";
                break;
            case "changeBindHandle":
                taexg = status ? "The cell phone is changed to bind to this operation" : "手机改绑点此操作";
                break;
            case "weiXinBinding":
                taexg = status ? "Bind WeChat" : "微信绑定";
                break;
            case "PhoneBinding":
                taexg = status ? "Bind Phone" : "手机绑定";
                break;
            case "changeBtn":
                taexg = status ? "Retrieve" : "确认更改";
                break;
            case "sureBtn":
                taexg = status ? "Confirm" : "确定";
                break;
            case "confirmBtn":
                taexg = status ? "Confirm" : "确定";
                break;
            case "cancelBtn":
                taexg = status ? "Cancel" : "取消";
                break;
            case "Reminder":
                taexg = status ? "Reminder" : "提示";
                break;
            case "sureBind":
                taexg = status ? "Confirm the binding" : "确认绑定";
                break;
            case "sureConfirmBind":
                taexg = status ? "Confirm" : "确认更改";
                break;
            case "willBindWechat":
                taexg = status ? "We'll bind WeChat：" : "将绑定微信: ";
                break;
            case "sureBindAndLogin":
                taexg = status ? "Bind and log in" : "绑定并登录";
                break;
            case "weiXinUnBinding":
                taexg = status ? "Unbinding WeChat" : "微信解绑";
                break;
            case "UnBindingWeiXin":
                taexg = status ? "Unbind WeChat" : "解绑微信";
                break;
            case "UnbindBtn":
                taexg = status ? "Unbind" : "确认解绑";
                break;
            case "willUnBindWechat":
                taexg = status ? "We'll unbind WeChat：" : "将解绑微信: ";
                break;
            case "schoolUnBinding":
                taexg = status ? "On-campus" : "校内用户解绑";
                break;
            case "visitUnBinding":
                taexg = status ? "Visitors" : "访客解绑";
                break;
            case "UnBindingSuccess":
                taexg = status ? "Unbinding success!" : "解绑成功!";
                break;
            case "systemIntroduce":
                taexg = status ? "Introduction of Central Certification System" : "中央认证系统介绍：";
                break;
            case "comeBackLogin":
                taexg = status ? "Return to login interface" : "返回登录界面";
                break;
            case "errorInfoUsername":
                taexg = status ? "Please enter the username" : "请输入用户名";
                break;
            case "errorInfoCorrectPhone":
                taexg = status ? "Please enter the correct phone number" : "请输入正确的手机号!";
                break;
            case "errorInfoCorrectOldPhone":
                taexg = status ? "Please enter the correct phone number" : "请输入正确的旧手机号!";
                break;
            case "errorInfoCorrectNewPhone":
                taexg = status ? "Please enter the correct phone number" : "请输入正确的新手机号!";
                break;
            case "errorInfoNewPhone":
                taexg = status ? "Please enter the new phone number" : "请输入新手机号!";
                break;
            case "errorInfoPhone":
                taexg = status ? "Please enter the phone number" : "请输入手机号!";
                break;
            case "errorInfoOldPhoneNumber":
                taexg = status ? "Please enter the old phone number" : "请输入旧手机号!";
                break;
            case "errorInfoPassword":
                taexg = status ? "Please enter the password" : "请输入密码";
                break;
            case "errorInfoConfirmation":
                taexg = status ? "Please enter your confirmation password" : "请输入确认密码";
                break;
            case "errorInfoTwoPassSame":
                taexg = status ? "Different password input, please re-enter..." : "两次密码输入不同，请重新输入...";
                break;
            case "errorInfoPassNewSame":
                taexg = status ? "The new password is not consistent with the confirmation password. Please re-enter it" : "新密码和确认密码不一致，请重新输入";
                break;
            case "errorInfoRefresh":
                taexg = status ? "Refresh too often, please wait..." : "刷新过于频繁，请稍候...";
                break;
            case "errorInfoCode":
                taexg = status ? "No verification code to fill out the phone number!" : "请输入手机验证码！";
                break;
            case "errorInfoOldCode":
                taexg = status ? "No verification code to fill out the old phone number!" : "请输入旧手机验证码！";
                break;
            case "errorInfoNewCode":
                taexg = status ? "No verification code to fill out the old phone number!" : "请输入新手机验证码！";
                break;
            case "errorInfoOldSameNew":
                taexg = status ? "Old phones can't be the same as new ones!" : "旧手机与新绑定手机号不能相同！";
                break;
            case "errorInfoNewBindPhone":
                taexg = status ? "No new bound cell phone!Please fill in the new phone number and get the verification code first!" : "未填写新绑定手机！请先填写新手机号并获取验证码！";
                break;
            case "errorInfoOldPhone":
                taexg = status ? "No old mobile phone!Please fill in the old cell phone and get the verification code first!" : "未填写旧手机！请先填写旧手机并获取验证码！";
                break;
            case "alertModalContentBind":
                taexg = status ? "The central authentication system supports users to reset their passwords by binding their phones. When users forget their passwords, they can reset them by themselves. Please make your mobile phone binding first." : "中央认证系统支持用户通过绑定的手机来重置密码，当用户忘记密码后，可以自助重置，请先进行手机绑定。";
                break;
            case "alertModalContentBindT":
                taexg = status ? "The central authentication system supports users to reset their passwords by binding their phones. When users forget their passwords, they can reset them by themselves. Do you have mobile phone binding now?" : "中央认证系统支持用户通过绑定的手机来重置密码，当用户忘记密码后，可以自助重置，是否现在进行手机绑定？";
                break;
            case "alertModalSureBind":
                taexg = status ? "Immediately binding" : "立即绑定";
                break;
            case "alertModalSureBindTLast":
                taexg = status ? "Then tied" : "以后再绑";
                break;
            case "content":
                taexg = status ? "<p>Along with the advance of the school information construction and the development of Internet technology, the school developed a multiple application systems in different stage, these systems may be a cross-platform cross-domain, has its independent security authentication mechanism, the user must be in the each system has a set of independent of user name and password, when entering the different system must submit their identity, to through the system certification.The more applications users use, the more user ID and user passwords they must remember, and the more likely they are to be directly threatened by errors and passwords.<br/> Therefore, it is an important step in the informationization process of campus network to establish a unified central authentication system for users to implement unified management, authentication and authorization.Through it, the user can access all the systems that are integrated into the campus, and realize the purpose of landing multiple applications with an account.The inside of the original central authentication system obsolete data, not suitable for the needs of the school informatization process, center for this kind of situation, developed a new central authentication system, the user data in the system is complete, function more perfect, better security, later will also existing applications are added to the new central authentication system.(FAQ) : <br/> 1. How to use?<br/> 2. Why are many dialog boxes popping up every time you login?<br/> 3. Why are many dialog boxes popping up every time you login?<br/>1. How to use it?<br/>Only use the staff number and the student id. Other non-digital accounts cannot log in.Only use the staff number, the number login, other non-digital account can not log in.Only use the staff number, the number login, other non-digital account can not log in.Only use the staff number, the number login, other non-digital account can not log in.Only use the staff number, the number login, other non-digital account can not log in.Only use the staff number, the number login, other non-digital account can not log in.Only use the staff number, the number login, other non-digital account can not log in.<br/> 2. Why are many dialog boxes popping up every time you login?<br/> Only use the staff number and the student id. Other non-digital accounts cannot log in.Only use the staff number, the number login, other non-digital account can not log in.Only use the staff number, the number login, other non-digital account can not log in.Only use the staff number, the number login, other non-digital account can not log in.Only use the staff number, the number login, other non-digital account can not log in.Only use the staff number, the number login, other non-digital account can not log in.Only use the staff number, the number login, other non-digital account can not log in.</p>" : "<p>随着学校信息化建设的不断进步以及互联网技术的发展，学校在不同阶段开发出了多个应用系统，这些系统可能是跨平台跨域的，都有其独立的安全验证机制,用户必须在每个系统中都有一组独立的用户名和密码，在进入不同系统时都要提交自己的身份标识，来通过系统的认证。用户使用的应用系统越多，所必须记住的用户ID和用户密码就越多，客户出错、泄露密码等直接威胁到系统安全性的可能性也就越大。<br/>因此，建立一个统一的中央认证系统对用户实行统一的管理、认证和授权是校园网信息化进程中的一个重要步骤。用户通过它能进入校内与它结合的所有系统，实现一个账号就能登陆多个应用系统的目的。原来中央认证系统里面的数据陈旧，不适合学校信息化进程的需要，中心针对这种情况，开发出新的中央认证系统，该系统中里面用户数据完整，功能更加完善，安全性更好，以后将会陆续把现有的应用都加入到新的中央认证系统来。<br/>常见问题解答（FAQ）：<br/>1.如何使用？<br/>2.为什么每次登陆过程中都会弹出许多对话框？<br/>3.为什么每次登陆过程中都会弹出许多对话框？<br/>1.如何使用？<br/>答：1、只能使用教工号、学号登录，其它非数字账号不能登录。只能使用教工号、学号登录，其它非数字账号不能登录。只能使用教工号、学号登录，其它非数字账号不能登录。只能使用教工号、学号登录，其它非数字账号不能登录。只能使用教工号、学号登录，其它非数字账号不能登录。只能使用教工号、学号登录，其它非数字账号不能登录。只能使用教工号、学号登录，其它非数字账号不能登录。<br/>2.为什么每次登陆过程中都会弹出许多对话框？<br/>答：2、只能使用教工号、学号登录，其它非数字账号不能登录。只能使用教工号、学号登录，其它非数字账号不能登录。只能使用教工号、学号登录，其它非数字账号不能登录。只能使用教工号、学号登录，其它非数字账号不能登录。只能使用教工号、学号登录，其它非数字账号不能登录。只能使用教工号、学号登录，其它非数字账号不能登录。只能使用教工号、学号登录，其它非数字账号不能登录。</p>";
                break;
            case "contentText1":
                taexg = status ? "<p>Along with the advance of the school information construction and the development of Internet technology, the school developed a multiple application systems in different stage, these systems may be a cross-platform cross-domain, has its independent security authentication mechanism, the user must be in the each system has a set of independent of user name and password, when entering the different system must submit their identity, to through the system certification.The more applications users use, the more user ID and user passwords they must remember, and the more likely they are to be directly threatened by errors and passwords.</p><p> therefore, it is an important step in the informationization process of campus network to establish a unified central authentication system for users to implement unified management, authentication and authorization.Through it, the user can access all the systems that are integrated into the campus, and realize the purpose of landing multiple applications with an account.The inside of the original central authentication system obsolete data, not suitable for the needs of the school informatization process, center for this kind of situation, developed a new Central Certification System, the user data in the system is complete, function more perfect, better security, later will also existing applications are added to the new Central Certification System.</p>" : "<p>随着学校信息化建设的不断进步以及互联网技术的发展，学校在不同阶段开发出了多个应用系统，这些系统可能是跨平台跨域的，都有其独立的安全验证机制,用户必须在每个系统中都有一组独立的用户名和密码，在进入不同系统时都要提交自己的身份标识，来通过系统的认证。用户使用的应用系统越多，所必须记住的用户ID和用户密码就越多，客户出错、泄露密码等直接威胁到系统安全性的可能性也就越大。</p><p>因此，建立一个统一的中央认证系统对用户实行统一的管理、认证和授权是校园网信息化进程中的一个重要步骤。用户通过它能进入校内与它结合的所有系统，实现一个账号就能登陆多个应用系统的目的。原来中央认证系统里面的数据陈旧，不适合学校信息化进程的需要，中心针对这种情况，开发出新的中央认证系统，该系统中里面用户数据完整，功能更加完善，安全性更好，以后将会陆续把现有的应用都加入到新的中央认证系统来。</p>";
                break;
            case "contentText2":
                taexg = status ? "Access to the new central authentication system (note: <span class=\"red\"> is not fully integrated with the new central authentication system, the original central authentication system will continue to be used!</span>)" : "接入新中央认证系统情况：（注：<span class=\"red\">在没有完全集成新中央认证系统前，原有中央认证系统继续使用！</span>)";
                break;
            case "contentText2Phone":
                taexg = status ? "Access to the new central authentication system (note, Please visit the computer browser: <span class=\"red\"> Is not fully integrated with the new central authentication system, the original central authentication system will continue to be used!</span>)" : "接入新中央认证系统情况，请在电脑浏览器中访问查看：（注：<span class=\"red\">在没有完全集成新中央认证系统前，原有中央认证系统继续使用！</span>)";
                break;
            case "contentText3":
                taexg = status ? "FAQ (FAQ):<br/> 1. How to use central authentication?" : "常见问题解答（FAQ）：<br/>1.如何使用中央认证？";
                break;
            case "contentText4":
                taexg = status ? "<li><p>Central Certification System is divided into three types of login methods: in-school user login, WeChat login, and visitor login.The user enters the Central Certification login interface and defaults to the on-campus person login mode.</p></li><li><p>User login can enter the teaching worker number, number and password login.</p><img class=\"helpImage\" src=\" /static/home/pc/assets/FAQ1EN.png\" /><p class=\"helpImageAlt\">Campus user login interface</p></li><li><p>WeChat login user, use WeChat scan code, enter the binding interface, fill in the Central Certification account, the password can be used to login successfully</p><img class=\"helpImage\" src=\"/static/home/pc/assets/FAQ2.png\" /><p class=\"helpImageAlt\" >WeChat sweep login code interface</p><img class =\"helpImage\" src=\"/static/home/pc/assets/FAQ3EN.png \" /><p class=\"helpImageAlt\" >WeChat login account binding page </p></li><li><p> visitor login central authentication can enter mobile phone number directly, obtain verification code can login successfully.</p><img class=\"helpImage\" src=\"/static/home/pc/assets/FAQ4EN.png\" /><p class=\"helpImageAlt\">Visitor login interface</p></li>" : "<li><p>中央认证系统分为校内用户登录、微信登录、访客登录三种登录方式；用户进入中央认证登录界面默认为校内人士登录方式。<p/></li><li><p>校内用户登录可输入教工号、学号及密码登录。</p><img class=\"helpImage\" src=\"/static/home/pc/assets/FAQ1.png\" /><p class=\"helpImageAlt\">校内用户登录界面</p></li><li><p>使用微信登录的用户，使用微信扫码，进入绑定界面，填写中央认证账号、密码进行绑定后即可登录成功</p><img class=\"helpImage\" src=\"/static/home/pc/assets/FAQ2.png\" /><p class=\"helpImageAlt\">微信登录扫码界面</p><img class=\"helpImage\" src=\"/static/home/pc/assets/FAQ3.png\" /><p class=\"helpImageAlt\">微信登录账号绑定页面</p></li><li><p>访客登录中央认证可直接输入手机号，获取验证码后即可登录成功。</p><img class=\"helpImage\" src=\"/static/home/pc/assets/FAQ4.png\" /><p class=\"helpImageAlt\">访客登录界面</p></li>";
                break;
            case "contentTextTable":
                taexg = status ? "<thead><tr><th>Ordinal number</th><th>The name of the system</th><th>Integration</th><th>The integration time</th></tr></thead><tbody><tr><td>1</td><td><a href=\"http://portal.dgut.edu.cn\">School integrated portal system</a></td><td>Have integrated</td><td>September 01,2017</td></tr><tr><td>2</td><td><a href=\"http://dgutonline.dgut.edu.cn/Login.aspx\">Guan worker hotline</a></td><td>Have integrated</td><td>September 01,2017</td></tr><tr><td>3</td><td><a href=\"http://oa.dgut.edu.cn/Home/Login\">Office system</a></td><td>Have integrated</td><td>September 01,2017</td></tr><tr><td>4</td><td><a href=\"http://syr.dgut.edu.cn/Home/Login\">The personnel department recognizes the system</a></td><td>Have integrated</td><td>September 01,2017</td></tr><tr><td>5</td><td><a href=\"http://self.dgut.edu.cn/Home/Login\">User self-service system</a></td><td>Have integrated</td><td>September 01,2017</td></tr><tr><td>6</td><td><a href=\"http://vod.dgut.edu.cn\">Media on demand</a></td><td>Have integrated</td><td>September 01,2017</td></tr><tr><td>7</td><td><a href=\"http://jwc.dgut.edu.cn:8088/jwweb/cas_dglg.aspx\">Educational administration system</a></td><td>Have integrated</td><td>September 01,2017</td></tr><tr><td>8</td><td><a href=\"http://asset.dgut.edu.cn/Home/Default\">Asset management system</a></td><td>Have integrated</td><td>September 01,2017</td></tr><tr><td>9</td><td><a href=\"http://portal.dgut.edu.cn/default.aspx\">School portal</a></td><td>Have integrated</td><td>September 01,2017</td></tr><tr><td>10</td><td><a href=\"http://jwc.dgut.edu.cn/jyk/logincas.asp\">Teaching and research department online office</a></td><td>Have integrated</td><td>September 01,2017</td></tr><tr><td>11</td><td><a href=\"http://cms.dgut.edu.cn/sofprodglg/index.jsp\">School homepage background news release</a></td><td>Have integrated</td><td>September 01,2017</td></tr><tr><td>12</td><td><a href=\"http://webmail.dgut.edu.cn/Login.aspx\">Email login</a></td><td>Have integrated</td><td>September 01,2017</td></tr><tr><td>13</td><td><a href=\"http://cwc.dgut.edu.cn/query/login/11819/login_11819.asp\">The bursar's office</a></td><td>Have integrated</td><td>September 01,2017</td></tr><tr><td>14</td><td><a href=\"http://tyxk.dgut.edu.cn/index.php/home/index/check_login\">PE selection system</a></td><td>Have integrated</td><td>September 01,2017</td></tr><tr><td>15</td><td><a href=\"http://teacher.dgut.edu.cn/Login.aspx\">Teacher management system</a></td><td>Have integrated</td><td>September 01,2017</td></tr><tr><td>16</td><td><a href=\"http://student.dgut.edu.cn/Login.aspx\">Student management system</a></td><td>Have integrated</td><td>September 01,2017</td></tr><tr><td>17</td><td><a href=\"http://tw.dgut.edu.cn/id\">Youth corps committee website</a></td><td>Have integrated</td><td>September 01,2017</td></tr></tbody>" : "<thead><tr><th>序号</th><th>系统名称</th><th>集成情况</th><th>集成时间</th></tr></thead><tbody><tr><td>1</td><td><a href=\"http://portal.dgut.edu.cn\">学校集成门户系统</a></td><td>已经集成</td><td>2017年9月1日</td></tr><tr><td>2</td><td><a href=\"http://dgutonline.dgut.edu.cn/Login.aspx\">莞工热线</a></td><td>已经集成</td><td>2017年9月1日</td></tr><tr><td>3</td><td><a href=\"http://oa.dgut.edu.cn/Home/Login\">办公系统</a></td><td>已经集成</td><td>2017年9月1日</td></tr><tr><td>4</td><td><a href=\"http://syr.dgut.edu.cn/Home/Login\">人事处表彰系统</a></td><td>已经集成</td><td>2017年9月1日</td></tr><tr><td>5</td><td><a href=\"http://self.dgut.edu.cn/Home/Login\">用户自服系统</a></td><td>已经集成</td><td>2017年9月1日</td></tr><tr><td>6</td><td><a href=\"http://vod.dgut.edu.cn\">媒体点播</a></td><td>已经集成</td><td>2017年9月1日</td></tr><tr><td>7</td><td><a href=\"http://jwc.dgut.edu.cn:8088/jwweb/cas_dglg.aspx\">教务系统</a></td><td>已经集成</td><td>2017年9月1日</td></tr><tr><td>8</td><td><a href=\"http://asset.dgut.edu.cn/Home/Default\">资产管理系统</a></td><td>已经集成</td><td>2017年9月1日</td></tr><tr><td>9</td><td><a href=\"http://portal.dgut.edu.cn/default.aspx\">学校门户网站</a></td><td>已经集成</td><td>2017年9月1日</td></tr><tr><td>10</td><td><a href=\"http://jwc.dgut.edu.cn/jyk/logincas.asp\">教研科在线办公</a></td><td>已经集成</td><td>2017年9月1日</td></tr><tr><td>11</td><td><a href=\"http://cms.dgut.edu.cn/sofprodglg/index.jsp\">学校主页后台新闻发布</a></td><td>已经集成</td><td>2017年9月1日</td></tr><tr><td>12</td><td><a href=\"http://webmail.dgut.edu.cn/Login.aspx\">电子邮箱登录</a></td><td>已经集成</td><td>2017年9月1日</td></tr><tr><td>13</td><td><a href=\"http://cwc.dgut.edu.cn/query/login/11819/login_11819.asp\">财务处</a></td><td>已经集成</td><td>2017年9月1日</td></tr><tr><td>14</td><td><a href=\"http://tyxk.dgut.edu.cn/index.php/home/index/check_login\">体育选课系统</a></td><td>已经集成</td><td>2017年9月1日</td></tr><tr><td>15</td><td><a href=\"http://teacher.dgut.edu.cn/Login.aspx\">教师管理系统</a></td><td>已经集成</td><td>2017年9月1日</td></tr><tr><td>16</td><td><a href=\"http://student.dgut.edu.cn/Login.aspx\">学生管理系统</a></td><td>已经集成</td><td>2017年9月1日</td></tr><tr><td>17</td><td><a href=\"http://tw.dgut.edu.cn/id\">团委网站</a></td><td>已经集成</td><td>2017年9月1日</td></tr></tbody>";
                break;
            case "footer":
                taexg = status ? "&copy; 2017 DongGuan University Of Technology" : "&copy; 2017 东莞理工学院";
                break;
            case "loginRemindTitle":
                taexg = status ? "Special remind" : "特别提醒";
                break;
            case "loginRemind":
                taexg = status ? "<p>1. Please pay attention to identify the dongguan institute of technology, the certification system is the only official domain name <a href=\"https://cas.dgut.edu.cn\" target=\"_blank\">(cas.dgut.edu.cn)</a> and WeChat public<span onclick=\"qrCodeModal.setVisible(true); \" style=\"cursor: pointer; color: #2778D6\"> (guan worker wisdom campus)</span>, take precautions against phishing site and false WeChat ID steal your account and password information.<br/> 2. This system supports mobile phone SMS to retrieve the password, and click here to do <a href=\"" + bind_url + "\" target=\"_blank\"> phone binding </a>or<a href=\"" + rebind_url + "\" target=\"_blank\"> cell phone to change the binding </a>.<br/>3. This system only applies open access to the campus. <a  href=\"http://ehall.dgut.edu.cn/\" target=\"_blank\"> Click here to enter the online business hall for application</a>.</p>" : "<p>1. 请注意甄别东莞理工学院中央认证系统唯一官方域名<a href=\"https://cas.dgut.edu.cn\" target=\"_blank\">（cas.dgut.edu.cn）</a>和微信公众号<span onclick=\"qrCodeModal.setVisible(true); \" style=\"cursor: pointer; color: #2778D6\">（智慧莞工）</span>，慎防钓鱼网站和虚假微信号窃取您的账号和密码信息。<br/>2. 本系统支持手机短信找回密码，点此进行<a href=\"" + bind_url + "\" target=\"_blank\"> 手机绑定 </a>或<a href=\"" + rebind_url + "\" target=\"_blank\"> 手机改绑 </a>。<br/>3. 本系统仅向校内应用开放接入，<a href=\"http://ehall.dgut.edu.cn/\" target=\"_blank\">点此进入网上办事大厅进行相关申请</a>。</p>";
                break;
            case "loginRequire":
                taexg = status ? "<p><span>Required Password</span><br/>1. Must contain capital letters, lowercase letters, and numbers; <br/>2. The password length is 6-32 characters;<br/>3. Do not include account information and Spaces;<br/>4. No common passwords;</p>" : "<p><span>密码要求</span><br/>1. 同时包含大写字母、小写字母和数字； <br/>2. 密码长度为 6-32 个字符；<br/>3. 不包含账户信息与空格；<br/>4. 不得为常见密码；</p>";
                break;
            case "bindingWechat":
                taexg = status ? "WeChat Binding" : '绑定微信';
                break;
            case "getCard":
                taexg = status ? "Get A Campus Card" : '开通电子校园卡';
                break;
            case "binding":
                taexg = status ? "Complete" : '已绑定';
                break;
            case "hasGotCard":
                taexg = status ? "Complete" : '已领取';
                break;
            case "bindingWechatTip":
                taexg = status ? "Please scan the following two-dimensional code and enter the central authentication account and password for binding, after the success of the binding, and click <span style=\'color: green\'>\"Next step\"</span> to enter the next process" : '请使用手机微信扫描以下二维码，并输入中央认证账号、密码进行绑定，绑定成功后，点击<span style=\'color: green\'>“下一步”</span>进入下一步流程';
                break;
            case "freshManTip":
                taexg = status ? "Note: please do not use the visitor identity binding, otherwise you will not be able to enter the next step of the freshman registration process." : '注意：请勿使用访客身份绑定，否则无法进入下一步新生账号激活流程';
                break;
            case "getCardTip":
                taexg = status ? "Please scan the following two dimensional code, pick up and activate the electronic campus card according to the instructions, and then click on <span style=\'color: green\'>\"Complete\"</span> to enter the next step after receiving the successful campus card." : "请使用手机微信扫描以下二维码，按提示领取并激活电子校园卡，领取成功后，点击<span style=\'color: green\'>“已领取”</span>进入下一步流程。";
                break;
            case "weChatBindTitle":
                taexg = status ? "Please use mobile WeChat to scan the following qr codes and enter WeChat ID binding into the central authentication account. After successful binding, please click the binding." : "请使用手机微信扫描以下二维码，并输入中央认证账号绑定微信号，绑定成功后请点击已绑定。";
                break;
            case "scanningTitle":
                taexg = status ? "Please use mobile phone scanning to pay attention to the \"smart dongguan\" public number." : "请使用手机扫码关注”智慧莞工”公众号";
                break;
            case "wechatVerify":
                taexg = status ? "WeChat Verify" : "微信验证";
                break;
            case "wechatPhoneVerify":
                taexg = status ? "Mobile WeChat verification code" : "手机微信验证码";
                break;
            case "wechatVerifyAlert":
                taexg = status ? "Tip: please fill in the WeChat verification code obtained from the \"smart dongguan\" public number in the box below." : "提示:请在“智慧莞工”公众号获取的微信验证码填入下框中。";
                break;
            case "wechatVerifyCode":
                taexg = status ? "WeChat verification code:" : "微信验证码：";
                break;
            case "verifyInputCode":
                taexg = status ? "Please enter the verification code" : "请输入验证码";
                break;
            case "casWechatVerify":
                taexg = status ? "Central certification WeChat certification" : "中央认证微信认证";
                break;
            case "weChatBindBtn":
                taexg = status ? "Is binding" : "已绑定";
                break;
            case "followed":
                taexg = status ? "Complete" : "已关注";
                break;
            case "followedSec":
                taexg = status ? "Close" : "关闭";
                break;
            case "followSmartDgut":
                taexg = status ? "Follow in \"智慧莞工\" " : "关注\"智慧莞工\"公众号";
                break;
            case "followSmartDgutTip":
                taexg = status ? "Please use mobile WeChat to scan the following qr codes and follow in WeChat subscription number \"智慧莞工\"." : "请使用手机微信扫描以下二维码，关注\"智慧莞工\"微信公众号";
                break;
            case "followSmartDgutTipFooter":
                taexg = status ? "Note: Please click the “Followed” to enter the next process and continue to follow the instructions to complete the new registration process." : "注意：关注后请点击\"已关注\"进入下一步流程,继续按指引完成新生账号激活流程";
                break;
            case "Followed":
                taexg = status ? "Followed" : "已关注";
                break;
            case "freshManNote":
                taexg = status ? "Note: if you have received, please click \"Complete\" to enter the next step, please complete the steps according to the requirements, otherwise you will not be able to proceed to the next freshman registration process." : "注意:若已领取，请点击“已领取”进入下一步，请按要求完成步骤，否则无法进行下一步新生账号激活流程";
                break;
            case "followSmartDgut_P":
                taexg = status ? "Follow in \"智慧莞工\" " : "关注\"智慧莞工\"公众号";
                break;
            case "followSmartDgutTip_P":
                taexg = status ? " According to the following two-dimensional code, pay attention to the wisdom public works WeChat public number.." : "长按以下二维码，关注“智慧莞工”微信公众号。";
                break;
            case "freshManNote_P":
                taexg = status ? "Note: Please click the \"Followed\" to enter the next process and continue to follow the instructions to complete the new registration process." : " 注意：关注后请点击 “已关注” 进入下一步流程，继续按指引完成新生账号激活流程。";
                break;
            case "logout":
                taexg = status ? "Logout" : "注销";
                break;
            case "goingBind":
                taexg = status ? "WeChat Binding:" : "将绑定微信:";
                break;
            case "WeChatBind":
                taexg = status ? "WeChat Binding" : "微信绑定";
                break;
            case "backBind":
                taexg = status ? "Re Binding" : "重新绑定";
                break;
            case "nextFreshmanStep":
                taexg = status ? "You have not completed the new process, please click Next to continue. During the operation, please follow the system prompts to complete each step, otherwise the new account activation process will not be completed. Click \"Next\" to enter " : "您尚未完成新生流程，请点击下一步继续完成，在操作过程中，请按照系统提示完成每一步操作，否则无法完成新生账号激活流程。点击“下一步”进入";
                break;
            case "notice":
                taexg = status ? "Notice" : "提示";
                break;
            case "comfirmLogout":
                taexg = status ? "Exit the Account activation process" : "确定注销后将退出新生账号激活流程";
                break;
            case "comfirm":
                taexg = status ? "Comfirm" : "确定";
                break;
            case "cancle":
                taexg = status ? "Cancle" : "取消";
                break;
            case "MainModalTitle":
                taexg = status ? "You have not completed the new process, please click 'Next' to continue." : "您尚未完成新生流程，请点击下一步继续完成";
                break;
            case "MainModalBody":
                taexg = status ? "In the process of operation, please follow the system prompt to complete each step of the operation, otherwise you can not complete the new registration process. Click on the next step to continue the freshman registration process." : "在操作过程中，请按照系统提示完成每一步操作，否则无法完成新生报到流程。点击“下一步”继续新生报到流程。";
                break;
            case "freshman_step_1":
                taexg = status ? "change password." : "修改密码。";
                break;
            case "freshman_step_2":
                taexg = status ? "phone binding." : "手机绑定。";
                break;
            case "freshman_step_3":
                taexg = status ? "bind WeChat." : "绑定微信。";
                break;
            case "freshman_step_4":
                taexg = status ? "Follow Official Accounts." : "关注微信公众号。";
                break;
            case "freshman_step_5":
                taexg = status ? "receive an electronic campus card." : "领取电子校园卡。";
                break;
            case "freshman_step_6":
                taexg = status ? "open an online account." : "开通上网账号。";
                break;
            case "freshman_step_7":
                taexg = status ? "textbook fee prepayment." : "教材费预缴纳。";
                break;
            case "yourUsername":
                taexg = status ? "Your Username:" : "你的学号：";
                break;
            case "accountTip":
                taexg = status ? "To ensure account safety, please change the password first and move forward" : "为确保账户安全，请先修改密码，确认后进入下一步";
                break;
            case "noVisitor":
                taexg = status ? "During the opening of the freshman process, the visitor login entrance is temporarily closed. Please forgive any inconvenience caused." : "在新生流程开放期间，访客登录入口暂时关闭，若造成不便，望见谅。";
                break;
            default:
                break;
        }
    }
    $.extend({
        chaLang: function (status, stringText) {
            new ChaLang(status, stringText);
            return taexg;
        }
    })
})(jQuery);


// 注销
const url = $("#logout").attr("href");
$("#logout").attr("href", null);
var nodes = " <div id=\"alertModal_add\" class=\"alertModal\" style=\"width:280px;left:50%;margin-left: -156px\">\n            <div class=\"alertModalTitle\"><span id=\"Reminder\" data-tr=\"notice\">\u63D0\u793A</span><img class=\"pullRight iconHelp closeModal\" alt=\"require\" src=\"/static/home/pc/assets/close.png\" /></div>\n         <div id=\"alertModalContent\" class=\"alertModalContent\" data-tr=\"comfirmLogout\">\u786E\u5B9A\u6CE8\u9500\u540E\u5C06\u9000\u51FA\u65B0\u751F\u8D26\u53F7\u6FC0\u6D3B\u6D41\u7A0B</div>\n         <div id=\"sureClose\" class=\"textAlign flexCenter\"><a href=" + url + " id=\"alertModalSure_add\" style=\"margin-right: 4px\" data-tr=\"comfirm\">\u786E\u5B9A</a><a class=\"closeModal\" data-tr=\"cancle\">\u53D6\u6D88</a></div>\n          </div>";;
$("body").append(nodes);
//注销
$(".closeModal").click(function (e) {
    $("#alertModal_add").css("display", "none");
})
$("#logout").click(function (e) {
    $("#alertModal_add").css("display", "block");
})

$('#sureClose').click(function () {
    $("#alertModal").css("display", "none")
})

// window.alert=function (message) {
//     var alert=` <div id="alertModal_add" class="alertModal" style="width:280px;left:50%;margin-left: -156px">
//             <div class="alertModalTitle"><span id="Reminder" data-tr="notice">提示</span><img class="pullRight iconHelp closeModal" alt="require" src="/static/home/pc/assets/close.png" /></div>
//          <div id="alertModalContent" class="alertModalContent">${message}</div>
//          <div id="sureClose" class="textAlign flexCenter"><a href=${url} id="alertModalSure_add" style="margin-right: 4px" data-tr="comfirm">确定</a></div>
//           </div>`;
//     return alert;
// }
