// ==UserScript==
// @name         WeChat Web with VS Code UI
// @namespace    https://github.com/bensgith/tampermonkey-scripts
// @version      0.10.5
// @description  VS Code style for WeChat Web application
// @author       Benjamin L
// @match        https://wx2.qq.com/*
// @icon         https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico
// @grant        GM_addStyle
// @grant        GM_addElement
// ==/UserScript==

(function() {
    'use strict';

    const qqface_names_map = new Map(
            [['qqemoji0', 'Smile'],
             ['qqemoji1', 'Grimace'],
             ['qqemoji2', 'Drool'],
             ['qqemoji3', 'Scowl'],
             ['qqemoji4', 'CoolGuy'],
             ['qqemoji5', 'Sob'],
             ['qqemoji6', 'Shy'],
             ['qqemoji7', 'Silent'],
             ['qqemoji8', 'Sleep'],
             ['qqemoji9', 'Cry'],
             ['qqemoji10', 'Awkward'],
             ['qqemoji11', 'Angry'],
             ['qqemoji12', 'Tongue'],
             ['qqemoji13', 'Grin'],
             ['qqemoji14', 'Surprise'],
             ['qqemoji15', 'Frown'],
             ['qqemoji16', 'Ruthless'],
             ['qqemoji17', 'Blush'],
             ['qqemoji18', 'Scream'],
             ['qqemoji19', 'Puke'],
             ['qqemoji20', 'Chuckle'],
             ['qqemoji21', 'Joyful'],
             ['qqemoji22', 'Slight'],
             ['qqemoji23', 'Smug'],
             ['qqemoji24', 'Hungry'],
             ['qqemoji25', 'Drowsy'],
             ['qqemoji26', 'Panic'],
             ['qqemoji27', 'Sweat'],
             ['qqemoji28', 'Laugh'],
             ['qqemoji29', 'Commando'],
             ['qqemoji30', 'Determined'],
             ['qqemoji31', 'Scold'],
             ['qqemoji32', 'Shocked'],
             ['qqemoji33', 'Shhh'],
             ['qqemoji34', 'Dizzy'],
             ['qqemoji35', 'Tormented'],
             ['qqemoji36', 'Toasted'],
             ['qqemoji37', 'Skull'],
             ['qqemoji38', 'Hammer'],
             ['qqemoji39', 'Wave'],
             ['qqemoji40', 'Speechless'],
             ['qqemoji41', 'NosePick'],
             ['qqemoji42', 'Clap'],
             ['qqemoji43', 'Shame'],
             ['qqemoji44', 'Trick'],
             ['qqemoji45', 'Bah！L'],
             ['qqemoji46', 'Bah！R'],
             ['qqemoji47', 'Yawn'],
             ['qqemoji48', 'Pooh-pooh'],
             ['qqemoji49', 'Shrunken'],
             ['qqemoji50', 'TearingUp'],
             ['qqemoji51', 'Sly'],
             ['qqemoji52', 'Kiss'],
             ['qqemoji53', 'Wrath'],
             ['qqemoji54', 'Whimper'],
             ['qqemoji55', 'Cleaver'],
             ['qqemoji56', 'Watermelon'],
             ['qqemoji57', 'Beer'],
             ['qqemoji58', 'Basketball'],
             ['qqemoji59', 'PingPong'],
             ['qqemoji60', 'Coffee'],
             ['qqemoji61', 'Rice'],
             ['qqemoji62', 'Pig'],
             ['qqemoji63', 'Rose'],
             ['qqemoji64', 'Wilt'],
             ['qqemoji65', 'Lips'],
             ['qqemoji66', 'Heart'],
             ['qqemoji67', 'BrokenHeart'],
             ['qqemoji68', 'Cake'],
             ['qqemoji69', 'Lightning'],
             ['qqemoji70', 'Bomb'],
             ['qqemoji71', 'Dagger'],
             ['qqemoji72', 'Soccer'],
             ['qqemoji73', 'Ladybug'],
             ['qqemoji74', 'Poop'],
             ['qqemoji75', 'Moon'],
             ['qqemoji76', 'Sun'],
             ['qqemoji77', 'Gift'],
             ['qqemoji78', 'Hug'],
             ['qqemoji79', 'ThumbsUp'],
             ['qqemoji80', 'ThumbsDown'],
             ['qqemoji81', 'Shake'],
             ['qqemoji82', 'Peace'],
             ['qqemoji83', 'Fight'],
             ['qqemoji84', 'Beckon'],
             ['qqemoji85', 'Fist'],
             ['qqemoji86', 'Pinky'],
             ['qqemoji87', 'RockOn'],
             ['qqemoji88', 'Nuh-uh'],
             ['qqemoji89', 'OK'],
             ['qqemoji90', 'InLove'],
             ['qqemoji91', 'Blowkiss'],
             ['qqemoji92', 'Waddle'],
             ['qqemoji93', 'Tremble'],
             ['qqemoji94', 'Aaagh!'],
             ['qqemoji95', 'Twirl'],
             ['qqemoji96', 'Kotow'],
             ['qqemoji97', 'Dramatic'],
             ['qqemoji98', 'JumpRope'],
             ['qqemoji99', 'Surrender'],
             ['qqemoji100', 'Hooray'],
             ['qqemoji101', 'Meditate'],
             ['qqemoji102', 'Smooch'],
             ['qqemoji103', 'TaiChi L'],
             ['qqemoji104', 'TaiChi R'],
             // from emoji panel
             ['qqemoji105', 'Hey'],
             ['qqemoji106', 'Facepalm'],
             ['qqemoji107', 'Smirk'],
             ['qqemoji108', 'Smart'],
             ['qqemoji109', 'Concerned'],
             ['qqemoji110', 'Yeah!'],
             ['qqemoji112', 'Packet'],
             ['qqemoji111', 'Chicken']]
        );

    const emoji_names_map = new Map(
            [['emoji1f604', 'Laugh'],
             ['emoji1f637', 'Sick'],
             ['emoji1f639', 'Lol'],
             ['emoji1f602', 'Lol'], // extra
             ['emoji1f61d', 'Tongue'],
             ['emoji1f633', 'Blush'],
             ['emoji1f631', 'Terror'],
             ['emoji1f64d', 'LetDown'],
             ['emoji1f612', 'Speechless'],
             ['emoji1f47b', 'Ghost'],
             ['emoji1f4aa', 'Strong'],
             ['emoji1f389', 'Party'],
             ['emoji1f4e6', 'Gift'],
             ['emoji1f60a', 'Happy'],
             ['emoji1f63a', 'BigSmile'],
             ['emoji263a', 'Glowing'],
             ['emoji1f609', 'Wink'],
             ['emoji1f63b', 'Drool'],
             ['emoji1f63d', 'Smooch'],
             ['emoji1f61a', 'Kiss'],
             ['emoji1f63c', 'Grin'],
             ['emoji1f60c', 'Satisfied'],
             ['emoji1f61c', 'Tease'],
             ['emoji1f60f', 'CoolGuy'],
             ['emoji1f613', 'Sweat'],
             ['emoji1f61e', 'Low'],
             ['emoji1f4ab', 'Ugh'],
             ['emoji1f625', 'Anxious'],
             ['emoji1f630', 'Worried'],
             ['emoji1f628', 'Shocked'],
             ['emoji1f62b', 'D’oh!'],
             ['emoji1f63f', 'Tear'],
             ['emoji1f62d', 'Cry'],
             ['emoji1f632', 'Dizzy'],
             ['emoji1f620', 'Upset'],
             ['emoji1f64e', 'Angry'],
             ['emoji1f62a', 'Zzz'],
             ['emoji1f47f', 'Demon'],
             ['emoji1f47d', 'Alien'],
             ['emoji2764', 'Heart'],
             ['emoji1f494', 'BrokenHeart'],
             ['emoji1f498', 'Cupid'],
             ['emoji2747', 'Twinkle'],
             ['emoji1f31f', 'Star'],
             ['emoji2755', '!'],
             ['emoji2757', '!'], // extra
             ['emoji2754', '?'],
             ['emoji1f4a4', 'Asleep'],
             ['emoji1f4a7', 'Drops'],
             ['emoji1f3b5', 'Music'],
             ['emoji1f525', 'Fire'],
             ['emoji1f4a9', 'Poop'],
             ['emoji1f44d', 'ThumbsUp'],
             ['emoji1f44e', 'ThumbsDown'],
             ['emoji1f44a', 'Fist'],
             ['emoji270c', 'Peace'],
             ['emoji1f446', 'Up'],
             ['emoji1f447', 'Down'],
             ['emoji1f449', 'Right'],
             ['emoji1f448', 'Left'],
             ['emoji261d', '#1'],
             ['emoji1f48f', 'Kissing'],
             ['emoji1f491', 'Couple'],
             ['emoji1f466', 'Boy'],
             ['emoji1f467', 'Girl'],
             ['emoji1f469', 'Lady'],
             ['emoji1f468', 'Man'],
             ['emoji1f47c', 'Angel'],
             ['emoji1f480', 'Skull'],
             ['emoji1f48b', 'Lips'],
             ['emoji2600', 'Sun'],
             ['emoji2614', 'Rain'],
             ['emoji2601', 'Cloud'],
             ['emoji26c4', 'Snowman'],
             ['emoji1f31b', 'Moon'],
             ['emoji26a1', 'Lightning'],
             ['emoji1f30a', 'Waves'],
             ['emoji1f431', 'Cat'],
             ['emoji1f436', 'Doggy'],
             ['emoji1f42d', 'Mouse'],
             ['emoji1f439', 'Hamster'],
             ['emoji1f430', 'Rabbit'],
             ['emoji1f43a', 'Dog'],
             ['emoji1f438', 'Frog'],
             ['emoji1f42f', 'Tiger'],
             ['emoji1f428', 'Koala'],
             ['emoji1f43b', 'Bear'],
             ['emoji1f43d', 'Pig'],
             ['emoji1f42e', 'Cow'],
             ['emoji1f417', 'Boar'],
             ['emoji1f435', 'Monkey'],
             ['emoji1f434', 'Horse'],
             ['emoji1f40d', 'Snake'],
             ['emoji1f426', 'Pigeon'],
             ['emoji1f414', 'Chicken'],
             ['emoji1f427', 'Penguin'],
             ['emoji1f41b', 'Caterpillar'],
             ['emoji1f419', 'Octopus'],
             ['emoji1f420', 'Fish'],
             ['emoji1f433', 'Whale'],
             ['emoji1f42c', 'Dolphin'],
             ['emoji1f339', 'Rose'],
             ['emoji1f33a', 'Flower'],
             ['emoji1f334', 'Palm'],
             ['emoji1f335', 'Cactus'],
             ['emoji1f49d', 'CandyBox'],
             ['emoji1f383', 'Jack-o-lantern'],
             ['emoji1f385', 'Santa'],
             ['emoji1f384', 'XmasTree'],
             ['emoji1f514', 'Bell'],
             ['emoji1f388', 'Balloon'],
             ['emoji1f4bf', 'CD'],
             ['emoji1f4f7', 'Camera'],
             ['emoji1f4f9', 'FilmCamera'],
             ['emoji1f4bb', 'Computer'],
             ['emoji1f4fa', 'TV'],
             ['emoji1f4de', 'Phone'],
             ['emoji1f513', 'Unlocked'],
             ['emoji1f510', 'Locked'],
             ['emoji1f511', 'Key'],
             ['emoji1f528', 'Judgement'],
             ['emoji1f4a1', 'LightBulb'],
             ['emoji1f4eb', 'Mail'],
             ['emoji1f6c0', 'Wash'],
             ['emoji1f4b5', 'Money'],
             ['emoji1f4a3', 'Bomb'],
             ['emoji1f52b', 'Pistol'],
             ['emoji1f48a', 'Pill'],
             ['emoji1f3c8', 'Football'],
             ['emoji1f3c0', 'Basketball'],
             ['emoji26bd', 'Soccer'],
             ['emoji26be', 'Baseball'],
             ['emoji26f3', 'Golf'],
             ['emoji1f3c6', 'Trophy'],
             ['emoji1f47e', 'Invader'],
             ['emoji1f3a4', 'Singing'],
             ['emoji1f3b8', 'Guitar'],
             ['emoji1f459', 'Bikini'],
             ['emoji1f451', 'Crown'],
             ['emoji1f302', 'Umbrella'],
             ['emoji1f45c', 'Purse'],
             ['emoji1f484', 'Lipstick'],
             ['emoji1f48d', 'Ring'],
             ['emoji1f48e', 'Gem'],
             ['emoji2615', 'Coffee'],
             ['emoji1f37a', 'Beer'],
             ['emoji1f37b', 'Toast'],
             ['emoji1f379', 'Martini'],
             ['emoji1f354', 'Burger'],
             ['emoji1f35f', 'Fries'],
             ['emoji1f35d', 'Sphaghetti'],
             ['emoji1f363', 'Sushi'],
             ['emoji1f35c', 'Noodles'],
             ['emoji1f373', 'Eggs'],
             ['emoji1f366', 'IceCream'],
             ['emoji1f382', 'Cake'],
             ['emoji1f34f', 'Apple'],
             ['emoji2708', 'Plane'],
             ['emoji1f680', 'RocketShip'],
             ['emoji1f6b2', 'Bike'],
             ['emoji1f684', 'BulletTrain'],
             ['emoji26a0', 'Warning'],
             ['emoji1f3c1', 'Flag'],
             ['emoji1f6b9', 'Men'],
             ['emoji1f6ba', 'Women'],
             ['emoji2b55', 'O'],
             ['emoji2716', 'X'],
             ['emoji274c', 'X'], // extra
             ['emojia9', 'Copyright'],
             ['emojiae', 'RegisteredTM'],
             ['emoji2122', 'Trademark'],
             // extra (not in qq face or emoji panel)
            ['emoji1f1e81f1f3', 'China'],
            ['emoji1f1fa1f1f8', 'America'],
            ['emoji1f1ec1f1e7', 'Canada'],
            ['emoji1f3ac', 'Film'],
            ['emoji1f3c4', 'Surfing'],
            ['emoji1f33f', 'FourLeafClover'],
            ['emoji1f340', 'FourLeafClover'], //extra
            ['emoji1f483', 'Dancer'],
            ['emoji1f49c', 'PurpleHeart'],
            ['emoji1f49e', 'SparklingHeart'],
            ['emoji1f490', 'Bouquet'],
            ['emoji1f4e7', 'LoveLetter'],
            ['emoji1f48c', 'LoveLetter'],
            ['emoji1f4d2', 'TextBook'],
            ['emoji2733', 'EightSpokedAsterisk'],
            ['emoji1f6a8', 'RotatingLight'],
            ['emoji1f338', 'PinkFlower'],
            ['emoji1f33c', 'YellowFlower'],
            ['emoji1f496', 'PinkSparklingHeart'],
            ['emoji1f17e', 'RedSquareO'],
            ['emoji1f23a', 'BusinessOpen'],
            ['emoji1f308', 'Rainbow'],
            ['emoji1f4f1', 'MobilePhone'],
            ['emoji1f3a3', 'BlueFish'],
            ['emoji1f3e1', 'House'],
            ['emoji1f4d1', 'Note'],
            ['emoji1f3ab', 'Ticket'],
            //['emoji1f530', ''],
            ['emoji1f45a', 'BlueT-Shirt'],
            ['emoji1f393', 'graduation_cap']]
        );

    //https://github.com/ikatyang/emoji-cheat-sheet
    const special_emoji_map = new Map(
        [['🥺', 'pleading_face'], ['🤣', 'rofl'], ['😬', 'grimacing'], ['🤑', 'money_mouth_face'], ['🤫', 'shushing_face'], ['🥰', 'smiling_face_with_three_hearts'],
         ['0️⃣', 'zero'], ['1️⃣', 'one'], ['2️⃣', 'two'], ['3️⃣', 'three'], ['4️⃣', 'four'],
         ['5️⃣', 'five'], ['6️⃣', 'six'], ['7️⃣', 'seven'], ['8️⃣', 'eight'], ['9️⃣', 'nine'],
         ['🌎', 'earth_americas'], ['🌍', 'earth_africa'], ['🌏', 'earth_asia'],
         ['🇪🇺', 'eu'], ['🇹🇭', 'thailand'], ['🇻🇳', 'vietnam'], ['🇨🇦', 'canada'],
         ['🎊', 'confetti_ball'], ['★', 'star'], ['☼', 'sunny'], ['🏙️', 'cityscape'],
         ['📍', 'round_pushpin'],['🌘', 'waning_crescent_moon'], ['⛱️', 'parasol_on_ground'],
         ['✅', 'white_check_mark'], ['💯', '100'], ['🖥️', 'desktop_computer'], ['➕', 'heavy_plus_sign'], ['✔️', 'heavy_check_mark'],
         ['💮', 'white_flower'], ['💸', 'money_with_wings'], ['💴', 'yen'],
         ['🐼', 'panda_face'], ['🦐', 'shrimp'], ['🐲', 'dragon_face'], ['🐋', 'whale2'], ['🦋', 'butterfly'],
         ['🧸', 'teddy_bear'], ['🦅', 'eagle'],
         ['📬', 'mailbox_with_mail'], ['✍', 'writing_hand'], ['🤍', 'white_heart'], ['⌛', 'hourglass'],
        // https://emojipedia.org (not in cheat sheet)
        ['🪪', 'identification_card'], ['🥹', 'face_holding_back_tears']]
    );

    var css = `
        /* Common elements */
        body {
            background: none;
            background-size: unset;
        }
        .main {
            min-height: 100%;
            padding-top: 0px;
        }
        .main .copyright {
            display: none;
        }
        .main_inner {
            max-width: 100%;
            color: #CCC;
        }
        .button_primary {
            background-color:#0E639C !important;
            border-color:#0E639C !important;
        }
        .button_default,
        .waiting_confirm  {
            background-color:#333333 !important;
            color:white !important;
        }


        /* Login Page */
        .login .lang,
        .login .copyright,
        .login .logo .web_wechat_login_logo,
        .login .login_box .sub_title,
        .login .login_box .sub_desc,
        .login .login_box .avatar,
        .login_box .broken_network .icon-broken-logo {
            display:none;
        }
        .login {
            background-color:#333333;
        }
        .login_box {
            background-color:#1E1E1E;
        }
        .login_box .avatar .action {
            background-color:#333333 !important;
            color:white !important;
        }


        /* Chatting Page */
        /* left panel */
        #search_bar,
        .tab,
        .download_entry,
        .header .avatar,
        .header .info .nickname .display_name,
        .chat_item .avatar .img,
        .chat_item .info .msg,
        .chat_item .ext,
        .chat_item .nickname .emoji {
            display: none;
        }
        .header {
            padding: 6px 12px 6px 20px;
        }
        .header .info .nickname .opt {
            float: right;
        }
        .header .info .nickname .opt svg {
            margin-top: 3px;
            padding: 3px;
            border-radius: 5px;
        }
        .header .info .nickname .opt svg:hover {
            background-color: #323234;
        }
        #header_name {
	        color: #999;
	        font-size: 12px;
	        font-weight: 500;
        }
        #mmpop_system_menu {
            top: 38px !important;
            left: 190px !important;
        }
        .panel {
            background-color: #252526;
            width: 265px;
        }
        .panel.give_me .nav_view {
            top: 40px;
            font-family: system-ui;
        }
        .panel.give_me .system_menu {
            width: 145px;
        }
        .dropdown_menu {
            background-color: #333333;
            border-color: #414141;
        }
        .dropdown_menu li a {
            border-bottom-color: #414141;
            color: #D4D4D4;
            padding: 3px
        }
        .dropdown_menu li a:hover {
            background-color: #37373D;
        }
        .chat_item {
            padding:4px 20px;
            border-bottom: none;
        }
        .chat_item .avatar {
            height: 15px;
            width: 15px;
            float: left;
            margin-right: 2px;
            position: relative;
            background: url(//res.wx.qq.com/t/wx_fed/webwx/res/static/img/1OvE4o2.png);
            background-position: -33px 614px;
            background-size: 150px 2489px;
        }
        .chat_item.active {
            background:#37373D;
        }
        .chat_item .info .nickname {
            color: #CCC;
        }
        .web_wechat_reddot {
            background:url(https://img2.imgtp.com/2024/04/18/vNEgsIni.png) no-repeat;
            background-position:-473px -380px;
        }
        .web_wechat_reddot_middle {
            background:url(https://img2.imgtp.com/2024/04/18/vNEgsIni.png) no-repeat;
            background-position: -451px -380px;
        }

        /* VS Code menu & bars */
        .vscode_side_bar {
            position: relative;
            float: left;
            width: 38px;
            height: 100%;
            background-color: #333;
            padding: 0 4px;
            display: flex;
            flex-direction: column;
        }
        .vscode_side_bar .vscode_side_bar_icon {
            display: flex;
            text-align: center;
            justify-content: center;
            align-self: center;
            padding: 12px 8px;
            cursor: pointer;
        }
        .vscode_side_bar_icon:hover {
            fill: white;
        }
        .vscode_side_bar .vscode_side_bar_icon_active {
            border-left: solid 2px white;
        }
        .vscode_side_bar .vscode_side_bar_icon_bottom {
            margin-top: auto;
        }
        .vscode_side_bar .vscode_side_bar_icon_end {
            margin-bottom: 68px;
        }
        #vscode_bottom_bar {
        	position: fixed;
            display: flex;
            flex-direction: row;
        	bottom: 0px;
        	height: 22px;
            line-height: 22px;
        	width: 100%;
            font-size: 12px;
            color: white;
        	background-color: #007ACC;
        }
        #vscode_bottom_bar .vscode_status {
            display: flex;
            flex-direction: row;
            width: auto;
            height: 20px;
        }
        #vscode_bottom_bar .vscode_status_item {
            margin: 0 2px;
            cursor: pointer;
            display: flex;
            padding: 0 3px;
        }
        #vscode_bottom_bar .vscode_status_item svg {
            margin: 0 2px;
            align-self: center;
        }
        #vscode_bottom_bar .vscode_status_item_right {
            margin-left: auto;
        }
        #vscode_bottom_bar .vscode_status_item:hover {
            background-color: #008AE6;
        }
        #vscode_bottom_bar .vscode_remote {
            margin: 0;
            padding: 0 6px;
            background-color: #16825D;
        }
        #vscode_bottom_bar .vscode_remote:hover {
            background-color: #1A996C;
        }
        #vscode_top_menu_bar {
            display: flex;
            align-items: center;
            background-color: #3C3C3C;
            font-size: 14px;
            height: 36px;
        }
        #vscode_top_menu_bar li {
            display: inline;
            padding: 4px 6px;
            cursor: default;
            border-radius: 5px;
        }
        #vscode_top_menu_bar li:hover,
        #vscode_top_menu_bar .vscode_nav:hover,
        #vscode_top_menu_bar .vscode_search:hover,
        #vscode_top_menu_bar .vscode_chrome_button:hover  {
            background-color: #4D4D4D;
        }
        #vscode_top_menu_bar .vscode_nav {
            display: flex;
            align-items: center;
            margin-right: 7px;
            padding: 3px;
            cursor: pointer;
            border-radius: 5px;
        }
        #vscode_top_menu_bar .vscode_center {
            margin-left: 7.5%;
        }
        #vscode_top_menu_bar .vscode_search {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 592px;
            height: 18px;
            padding: 3px;
            cursor: pointer;
            border: solid 1px #666;
            border-radius: 6px;
            background-color: #464646;
            font-size: 12px;
        }
        #vscode_top_menu_bar .vscode_search_hint {
            margin-left: 4px;
        }
        #vscode_top_menu_bar .vscode_chrome_button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 47px;
            height: 36px;
            cursor: default;
        }
        #vscode_top_menu_bar .vscode_right {
            margin-left: auto;
        }
        #vscode_logo {
            display: flex;
            padding: 0 10px;
        }
        #vscode_line_num {
            float: left;
            height: 100%;
            inline-size: 17px;
            overflow-wrap: normal;
            text-align: right;
            color: #999;
            font-size: 14px;
            line-height: 1.4;
        }
        #vscode_close {
            padding: 3px;
            border-radius: 3px;
        }
        #vscode_close:hover {
            background-color: #333333;
        }


        /* message panel */
        .web_wechat_nomes_icon,
        .bubble.left:after,
        .bubble.bubble_primary.right:after,
        .bubble_cont .app .cover,
        .bubble_cont .picture img,
        .bubble_cont .video img,
        .bubble_cont .video .web_wechat_paly,
        .bubble_cont .card .card_hd,
        .bubble_cont .card .card_bd,
        .bubble_cont .card:after,
        .bubble_cont .location .img,
        .bubble_cont .location .desc,
        .bubble_cont .attach .attach_bd,
        .box_hd .title .title_name .emoji,
        .box_hd .title .title_count,
        .box_hd .title .web_wechat_down_icon,
        .box_hd .title .web_wechat_up_icon,
        .box_bd .message_empty,
        .message .avatar,
        .message .nickname .emoji,
        .message .content .bubble .bubble_cont .plain .js_message_plain img,
        .message .content .emoticon .custom_emoji,
        .message .message_system .content .emoji {
            display:none;
        }
        #chatArea {
            background-color: #1E1E1E;
            font-family: system-ui;
        }
        .box_hd {
            text-align: left;
            bottom: 260px;
        }
        .box_hd .title_wrap {
            border-bottom: none;
            background-color: #252526;
            padding: 0;
            margin: 0;
            display: flex;
        }
        #vscode_tab_actions {
            display: flex;
            align-items: center;
            margin-left: auto;
            align-self: center;
            padding: 2px 14px 0 0;
        }
        #vscode_tab_actions svg {
            margin: 3px;
            padding: 3px;
            border-radius: 5px;
            cursor: pointer;
        }
        #vscode_tab_actions svg:hover {
            background-color: #333333;
        }
        .box_hd .title {
            display: flex;
            align-items: center;
            height: 36px;
            background-color: #1E1E1E;
            padding: 3px 6px 0px 11px;
        }
        .box_hd .title .title_name {
            color: white;
            margin: 0 6px;
        }
        .chat .box_bd {
            bottom: 260px;
        }
        .members_wrp {
            box-shadow: none;
            -moz-box-shadow: none;
            -webkit-box-shadow: none;
        }
        .members {
            background-color: #252526;
            border-bottom-color: #414141;
        }
        .bubble {
            background-color:#1E1E1E !important;
            margin: 0;
            max-width: none;
        }
        .bubble.bubble_primary.right.arrow_primary:before,
        .bubble.bubble_primary.right:after {
            border-left-color:#0E639C;
        }
        .bubble_cont .app {
            background-color:#2D2D2D;
            padding: 2px 6px;
            margin:0 4px;
            max-width: none;
            border-radius: 5px;
        }
        .bubble_cont .app .title {
            color: #D4D4D4;
            margin-bottom: 2px;
        }
        .bubble_cont .app .desc {
            font-size: 12px;
        }
        .bubble_cont .plain {
            padding: 0 4px;
        }
        .bubble_cont .card {
            padding: 0;
            margin: 0;
            background-color: #1E1E1E;
            width: auto;
        }
        .bubble_cont .attach {
            padding: 0;
            background-color: unset;
            min-height: unset;
            min-width: unset;
            max-width: unset;
        }
        .bubble:after,
        .bubble:before {
            top: 7px;
        }
        .message {
            margin-bottom:0;
        }
        .message_system {
            margin:0 auto;
            text-align: left;
            max-width: none;
            line-height: 1.2;
        }
        .message_system .content {
            padding: 1px 0;
        }
        .comment {
            color: #6A9955;
            padding: 2px 4px;
        }
        .content .masked {
            color: #0065A9;
            padding: 2px 4px;
            font-size: 14px;
        }
        .content .bubble_cont .plain .masked {
            padding: 0;
        }
        .message .content .emoticon {
            padding: 0 10px;
        }
        .message .nickname {
            font-size: 12px;
            height: 12px;
            line-height: 12px;
            padding: 2px 4px;
        }


        /* reply panel */
        .btn_send,
        .chat .box_ft .action {
            display: none;
        }
        .chat .box_ft {
            margin-right: 0;
            height: 260px;
            border-top-color:#414141;
        }
        .chat .box_ft .toolbar {
            display: flex;
            align-items: center;
            height: unset;
        }
        .chat .box_ft .toolbar a:hover {
            color: #D4D4D4;
        }
        .chat .box_ft .toolbar .vscode_term_menu {
            font-size: 12px;
            color: #999;
            padding-bottom: 4px;
            margin-right: 18px;
            text-decoration: none;
        }
        .chat .box_ft .toolbar .vscode_term_menu_active {
            border-bottom: solid 1px white;
            color: #D4D4D4;
        }
        .chat .box_ft .toolbar .vscode_term_action {
            display: flex;
            align-items: center;
            color: #999;
            font-size: 12px;
            padding: 3px;
            margin-left: 3px;
            border-radius: 5px;
            cursor: pointer;
        }
        .chat .box_ft .toolbar .vscode_term_action_right {
            margin-left: auto;
        }
        .chat .box_ft .toolbar .vscode_term_action_right svg {
            margin-right: 2px;
        }
        .chat .box_ft .toolbar .vscode_term_action:hover {
            background-color: #333333;
        }
        .chat .box_ft .toolbar .webuploader-pick {
            display: inline;
            opacity: unset;
        }
        .chat .box_ft .content {
            padding: 5px 17px;
            font-family: system-ui;
            font-size: 14px;
        }
        .exp_hd,
        .exp_hd_item {
            background-color: #333;
        }
        .exp_bd,
        .exp_hd_item.active {
            background-color: #252526;
        }
        .exp_hd_item a {
            color: #D4D4D4;
        }
        .expression {
            border-color: #414141;
        }
        .expression:after {
            border-top-color: #252526;
        }
        .qq_face a,
        .emoji_face a {
            border-bottom-color: #414141;
            border-right-color: #414141;
        }
        #vscode_cli_hint {
            margin-bottom: 10px;
        }
        #vscode_cli_starter {
	        display: table-cell;
       }
       #editArea {
           padding-left: 4px;
           display: table-cell;
           width: 100%;
           height: 150px;
       }


        /* dialog */
        .ngdialog.default .ngdialog-content {
            background-color:#252526;
            color: #D4D4D4;
        }
        .ngdialog.default .ngdialog-content .ngdialog-close {
            background-position-y: 1908px;
        }
        .add_chatroom .dialog_hd .title,
        .create_chatroom_dlg .dialog_hd .title,
        .transpond-dialog .dialog_hd .title,
        .selector,
        .chooser .contact_title {
            background-color: #252526;
        }
        .transpond-dialog .dialog_ft .button_primary {
            background-color:#0E639C;
        }
        .nav_tab,
        .selector .input_box .input {
            background-color: #252526;
            color: #D4D4D4;
        }
        .chooser .contact_item {
            background-color: #252526;
            border-bottom-color: #414141;
        }
        .chooser .active .contact_item {
            background-color: #2D2D2D;
            border-bottom-color: #414141;
        }
        .nav_tabs {
            background-color: #252526;
            border-bottom-color: #414141;
            color: #D4D4D4;
        }
        .dialog_ft {
            border-top-color: #414141;
        }
        .rooms .contact_list .contact_item {
            border-bottom-color: #414141;
        }
        .rooms .contact_list .info .nickname {
            color: #D4D4D4;
        }
    `;
    GM_addStyle(css);


    let vscode_favico = 'https://code.visualstudio.com/favicon.ico';
    let vscode_name = 'VS Code';

    // change tab tittle and icon
    var shortcut_icon = document.getElementsByTagName('link')[0];
    shortcut_icon.href = vscode_favico;
    // set title every 0.5 second, never end
    setInterval(function() {
        var titleNode = document.getElementsByTagName('title')[0];
        if (titleNode.innerHTML != vscode_name) {
            titleNode.innerHTML = vscode_name;
        }
    }, 500);


    ////////////////////////////////////////////
    // login page
    ////////////////////////////////////////////
    if (document.getElementsByClassName('login').length > 0) {
        var checkLoginAvatar = setInterval(function() {
            var displayName = document.querySelector('.header .info .nickname .display_name');
            if (displayName.innerHTML) {
                clearInterval(checkLoginAvatar);
            }
            var association = document.getElementsByClassName('association')[0];
            var associationImg = association.getElementsByClassName('img')[0];
            if (associationImg.src != vscode_favico) {
                associationImg.src = vscode_favico;
            }
            var waitingConfirm = association.getElementsByClassName('waiting_confirm')[0];
            if (waitingConfirm.innerHTML != 'Confirm login on mobile') {
                waitingConfirm.innerHTML = 'Confirm login on mobile';
            }
        }, 500);
    }


    ////////////////////////////////////////////
    // chat window after logged in
    ///////////////////////////////////////////

    // mask vavatar and nickname
    maskAvatarAndNickName();
    // mask chat item name on the side panel
    maskChatItemNames();
    // hide emoji in chat title
    maskChatTitleNames();
    // make system message like comments
    maskSystemMessages();
    // mask message content
    maskChatMessageContent();
    // make tool bar opions like a terminal
    maskToolbarOptions();
    // make reply text area like a terminal
    maskEditArea();
    // add vscode-style activity side bar, menu bar, status bar, and buttons
    renderVsCodeMenuAndBars();

    ////////////////////////////////////////////
    // functions
    ////////////////////////////////////////////
    function maskAvatarAndNickName() {
        if (!document.getElementById('header_name')) {
            var newSpan = document.createElement('span');
            newSpan.setAttribute('id', 'header_name');
            newSpan.textContent = 'EXPLORER';
            var nickname = document.querySelector('.header .info .nickname');
            var opt = nickname.getElementsByClassName('opt')[0];
            opt.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 8C4 8.19778 3.94135 8.39112 3.83147 8.55557C3.72159 8.72002 3.56541 8.84819 3.38268 8.92388C3.19996 8.99957 2.99889 9.01937 2.80491 8.98079C2.61093 8.9422 2.43275 8.84696 2.29289 8.70711C2.15304 8.56725 2.0578 8.38907 2.01922 8.19509C1.98063 8.00111 2.00043 7.80004 2.07612 7.61732C2.15181 7.43459 2.27998 7.27841 2.44443 7.16853C2.60888 7.05865 2.80222 7 3 7C3.26522 7 3.51957 7.10536 3.70711 7.29289C3.89464 7.48043 4 7.73478 4 8Z" fill="#999"></path>
                    <path d="M9 8C9 8.19778 8.94135 8.39112 8.83147 8.55557C8.72159 8.72002 8.56541 8.84819 8.38268 8.92388C8.19996 8.99957 7.99889 9.01937 7.80491 8.98079C7.61093 8.9422 7.43275 8.84696 7.29289 8.70711C7.15304 8.56725 7.0578 8.38907 7.01922 8.19509C6.98063 8.00111 7.00043 7.80004 7.07612 7.61732C7.15181 7.43459 7.27998 7.27841 7.44443 7.16853C7.60888 7.05865 7.80222 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8Z" fill="#999"></path>
                    <path d="M14 8C14 8.19778 13.9414 8.39112 13.8315 8.55557C13.7216 8.72002 13.5654 8.84819 13.3827 8.92388C13.2 8.99957 12.9989 9.01937 12.8049 8.98079C12.6109 8.9422 12.4327 8.84696 12.2929 8.70711C12.153 8.56725 12.0578 8.38907 12.0192 8.19509C11.9806 8.00111 12.0004 7.80004 12.0761 7.61732C12.1518 7.43459 12.28 7.27841 12.4444 7.16853C12.6089 7.05865 12.8022 7 13 7C13.2652 7 13.5196 7.10536 13.7071 7.29289C13.8946 7.48043 14 7.73478 14 8Z" fill="#999"></path>
                </svg>
            `;
            nickname.insertBefore(newSpan, opt);
        }
    }

    function maskToolbarOptions() {
        var toolbar = document.getElementById('tool_bar');
        // emoji option
        var emojiBtn = toolbar.querySelector('.web_wechat_face');
        emojiBtn.classList.remove('web_wechat_face');
        emojiBtn.classList.add('vscode_term_menu');
        emojiBtn.classList.add('vscode_term_menu_active');
        emojiBtn.innerHTML = 'TERMINAL';
        // screenshot option
        var screenShotBtn = toolbar.querySelector('.web_wechat_screencut');
        screenShotBtn.classList.remove('web_wechat_screencut');
        screenShotBtn.classList.add('vscode_term_menu');
        screenShotBtn.innerHTML = 'PROBLEMS';
        // upload file option
        var uploadBtn = toolbar.querySelector('.web_wechat_pic');
        uploadBtn.classList.remove('web_wechat_pic');
        uploadBtn.classList.add('vscode_term_menu');
        var waitForUploader = setInterval(function() {
            var webUploaderPick = uploadBtn.querySelector('.webuploader-pick');
            var webUploaderInvisible = uploadBtn.querySelector('.webuploader-element-invisible');
            if (webUploaderPick && webUploaderInvisible) {
                webUploaderPick.innerHTML = 'OUTPUT';
                var inputWrapper = webUploaderInvisible.parentElement;
                if (inputWrapper.style.width == '50px' && inputWrapper.style.height == '18px') {
                    clearInterval(waitForUploader);
                }
                webUploaderInvisible.parentElement.style.width = '50px';
                webUploaderInvisible.parentElement.style.height = '18px';
            }
        }, 500);
        // DEBUG CONSOLE
        var aDebug = document.createElement('a');
        aDebug.classList.add('vscode_term_menu');
        aDebug.setAttribute('href', '#');
        aDebug.innerHTML = 'DEBUG CONSOLE';
        toolbar.appendChild(aDebug);
        // PORTS
        var aPorts = document.createElement('a');
        aPorts.classList.add('vscode_term_menu');
        aPorts.setAttribute('href', '#');
        aPorts.innerHTML = 'PORTS';
        toolbar.appendChild(aPorts);

        // right action buttons
        var svgs = [
            // cmd
            `<div class="vscode_term_action vscode_term_action_right">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#999" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1H15V15H1V1ZM2 14H14V2H2V14ZM4.00008 5.70709L4.70718 4.99999L8.24272 8.53552L7.53561 9.24263L7.53558 9.2426L4.70711 12.0711L4 11.364L6.82848 8.53549L4.00008 5.70709Z"/>
                </svg>
                cmd
            <div>`,
            // plus
            `<div class="vscode_term_action">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#999" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0001 7V8H8.00012V14H7.00012V8H1.00012V7H7.00012V1H8.00012V7H14.0001Z"/>
                </svg>
            </div>`,
            // down
            `<div class="vscode_term_action">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#999" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.97612 10.0719L12.3334 5.7146L12.9521 6.33332L8.28548 11L7.66676 11L3.0001 6.33332L3.61882 5.7146L7.97612 10.0719Z"/>
                </svg>
            </div>`,
            // split
            `<div class="vscode_term_action">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#999" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1H3L2 2V13L3 14H14L15 13V2L14 1ZM8 13H3V2H8V13ZM14 13H9V2H14V13Z"/>
                </svg>
            </div>`,
            // trash
            `<div class="vscode_term_action">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#999" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3H12H13V4H12V13L11 14H4L3 13V4H2V3H5V2C5 1.73478 5.10531 1.48038 5.29285 1.29285C5.48038 1.10531 5.73478 1 6 1H9C9.26522 1 9.51962 1.10531 9.70715 1.29285C9.89469 1.48038 10 1.73478 10 2V3ZM9 2H6V3H9V2ZM4 13H11V4H4V13ZM6 5H5V12H6V5ZM7 5H8V12H7V5ZM9 5H10V12H9V5Z"/>
                </svg>
            </div>`,
            // more
            `<div class="vscode_term_action">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#999" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12C6 12.2967 5.91203 12.5867 5.74721 12.8334C5.58238 13.08 5.34812 13.2723 5.07403 13.3858C4.79994 13.4994 4.49834 13.5291 4.20737 13.4712C3.91639 13.4133 3.64912 13.2704 3.43934 13.0607C3.22956 12.8509 3.0867 12.5836 3.02882 12.2926C2.97094 12.0017 3.00065 11.7001 3.11418 11.426C3.22771 11.1519 3.41997 10.9176 3.66665 10.7528C3.91332 10.588 4.20333 10.5 4.5 10.5C4.89783 10.5 5.27936 10.658 5.56066 10.9393C5.84197 11.2206 6 11.6022 6 12Z"/>
                    <path d="M13.5 12C13.5 12.2967 13.412 12.5867 13.2472 12.8334C13.0824 13.08 12.8481 13.2723 12.574 13.3858C12.2999 13.4994 11.9983 13.5291 11.7074 13.4712C11.4164 13.4133 11.1491 13.2704 10.9393 13.0607C10.7296 12.8509 10.5867 12.5836 10.5288 12.2926C10.4709 12.0017 10.5006 11.7001 10.6142 11.426C10.7277 11.1519 10.92 10.9176 11.1666 10.7528C11.4133 10.588 11.7033 10.5 12 10.5C12.3978 10.5 12.7794 10.658 13.0607 10.9393C13.342 11.2206 13.5 11.6022 13.5 12Z"/>
                    <path d="M21 12C21 12.2967 20.912 12.5867 20.7472 12.8334C20.5824 13.08 20.3481 13.2723 20.074 13.3858C19.7999 13.4994 19.4983 13.5291 19.2074 13.4712C18.9164 13.4133 18.6491 13.2704 18.4393 13.0607C18.2296 12.8509 18.0867 12.5836 18.0288 12.2926C17.9709 12.0017 18.0006 11.7001 18.1142 11.426C18.2277 11.1519 18.42 10.9176 18.6666 10.7528C18.9133 10.588 19.2033 10.5 19.5 10.5C19.8978 10.5 20.2794 10.658 20.5607 10.9393C20.842 11.2206 21 11.6022 21 12Z"/>
                </svg>
            </div>`,
            // up
            `<div class="vscode_term_action">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#999" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.02388 5.92809L3.66657 10.2854L3.04785 9.66668L7.71452 5.00001L8.33324 5.00001L12.9999 9.66668L12.3812 10.2854L8.02388 5.92809Z"/>
                </svg>
            </div>`,
            // close
            `<div class="vscode_term_action">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#999" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00004 8.70711L11.6465 12.3536L12.3536 11.6465L8.70714 8.00001L12.3536 4.35356L11.6465 3.64645L8.00004 7.2929L4.35359 3.64645L3.64648 4.35356L7.29293 8.00001L3.64648 11.6465L4.35359 12.3536L8.00004 8.70711Z"/>
                </svg>
            </div>`
        ];
        svgs.forEach((svg) => {
            var template = document.createElement('template');
            template.innerHTML = svg;
            toolbar.appendChild(template.content);
        });
    }

    function maskEditArea() {
        var content = document.getElementsByClassName('content ng-isolate-scope')[0];
        if (!document.getElementById('vscode_cli_hint')) {
            var cliHint = document.createElement('p');
            cliHint.setAttribute('id', 'vscode_cli_hint');
            cliHint.innerHTML = `
                Microsoft Windows [Version 10.0.22631.3593]
                <br>
                (c) Microsoft Corporation. All rights reserved.
            `;
            content.insertBefore(cliHint, document.getElementById('editArea'));
        }
        if (!document.getElementById('vscode_cli_starter')) {
            var cliStarter = document.createElement('span');
            cliStarter.setAttribute('id', 'vscode_cli_starter');
            cliStarter.textContent = 'C:\\Users>';
            content.insertBefore(cliStarter, document.getElementById('editArea'));
        }
    }


    function maskChatItemNames() {
        const maskedNames = ['Algorithm', 'Database', 'Binary', 'Compiler', 'Encryption', 'Firewall', 'Cloud Computing', 'Kernel', 'Network', 'Protocol',
        'Cache', 'Artificial Intelligence', 'Machine Learning', 'Cybersecurity', 'Big Data', 'Virtualization', 'Debugging', 'API', 'Recursion', 'Syntax'];
        setInterval(function() {
            var names = document.querySelectorAll(".chat_item .info .nickname_text");
            for (let i = 0; i < names.length; i++) {
                if (names[i].innerHTML == 'File Transfer') {
                    continue;
                }
                if (names[i].innerHTML != maskedNames[i]) {
                    names[i].innerHTML = maskedNames[i];
                }
            }
        }, 1000);
    }

    function maskChatTitleNames() {
        setInterval(function() {
            var title = document.querySelector(".box_hd .title_wrap .title .title_name");
            var maskedTitle = maskSpecialEmojis(title.innerHTML, 'remove');
            if (title.innerHTML != maskedTitle) {
                title.innerHTML = maskedTitle;
            }
        }, 1000);
        // vscode tab close button
        var template = document.createElement('template');
        template.innerHTML = `
            <svg id="vscode_close" width="16" height="16" viewBox="0 0 16 16" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00004 8.70711L11.6465 12.3536L12.3536 11.6465L8.70714 8.00001L12.3536 4.35356L11.6465 3.64645L8.00004 7.2929L4.35359 3.64645L3.64648 4.35356L7.29293 8.00001L3.64648 11.6465L4.35359 12.3536L8.00004 8.70711Z"/>
            </svg>
        `;
        document.getElementsByClassName('title poi')[0].appendChild(template.content);
        // vscode tab action button
        var actions = document.createElement('div');
        actions.setAttribute('id', 'vscode_tab_actions');
        var svgs = [
            `<svg width="16" height="16" viewBox="0 0 16 16" fill="#999" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5072 12.3239C14.4749 11.0906 15.0006 9.56812 15 8.00045C15.0001 6.46996 14.4986 4.98161 13.5723 3.76328C12.6459 2.54495 11.3459 1.66378 9.87105 1.25469C8.39624 0.845604 6.828 0.931139 5.40643 1.4982C3.98487 2.06526 2.78832 3.0826 2 4.39445V2.00045H1V5.50045L1.5 6.00045H5V5.00045H2.811C3.47895 3.84546 4.51237 2.94567 5.74827 2.44298C6.98418 1.94028 8.35226 1.86329 9.63676 2.22413C10.9213 2.58498 12.0491 3.36313 12.8425 4.43587C13.6358 5.50862 14.0495 6.81493 14.0182 8.14879C13.987 9.48265 13.5127 10.7682 12.6701 11.8026C11.8274 12.8371 10.6644 13.5616 9.36443 13.862C8.06445 14.1624 6.70147 14.0215 5.49043 13.4615C4.27939 12.9016 3.2892 11.9544 2.676 10.7695L1.789 11.2315C2.51204 12.6224 3.68106 13.7304 5.10876 14.3779C6.53646 15.0254 8.14019 15.1749 9.66297 14.8025C11.1858 14.4301 12.5395 13.5573 13.5072 12.3239ZM10.146 11.3545L10.854 10.6465L8 7.79349V4.00049H7V8.00049L7.146 8.35449L10.146 11.3545Z"/>
            </svg>`,
            `<svg width="16" height="16" viewBox="0 0 16 16" fill="#999" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 1H3L2 2V13L3 14H14L15 13V2L14 1ZM8 13H3V2H8V13ZM14 13H9V2H14V13Z"/>
            </svg>`,
            `<svg width="16" height="16" viewBox="0 0 16 16" fill="#999" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8C4 8.19778 3.94135 8.39112 3.83147 8.55557C3.72159 8.72002 3.56541 8.84819 3.38268 8.92388C3.19996 8.99957 2.99889 9.01937 2.80491 8.98079C2.61093 8.9422 2.43275 8.84696 2.29289 8.70711C2.15304 8.56725 2.0578 8.38907 2.01922 8.19509C1.98063 8.00111 2.00043 7.80004 2.07612 7.61732C2.15181 7.43459 2.27998 7.27841 2.44443 7.16853C2.60888 7.05865 2.80222 7 3 7C3.26522 7 3.51957 7.10536 3.70711 7.29289C3.89464 7.48043 4 7.73478 4 8Z"></path>
                <path d="M9 8C9 8.19778 8.94135 8.39112 8.83147 8.55557C8.72159 8.72002 8.56541 8.84819 8.38268 8.92388C8.19996 8.99957 7.99889 9.01937 7.80491 8.98079C7.61093 8.9422 7.43275 8.84696 7.29289 8.70711C7.15304 8.56725 7.0578 8.38907 7.01922 8.19509C6.98063 8.00111 7.00043 7.80004 7.07612 7.61732C7.15181 7.43459 7.27998 7.27841 7.44443 7.16853C7.60888 7.05865 7.80222 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8Z"></path>
                <path d="M14 8C14 8.19778 13.9414 8.39112 13.8315 8.55557C13.7216 8.72002 13.5654 8.84819 13.3827 8.92388C13.2 8.99957 12.9989 9.01937 12.8049 8.98079C12.6109 8.9422 12.4327 8.84696 12.2929 8.70711C12.153 8.56725 12.0578 8.38907 12.0192 8.19509C11.9806 8.00111 12.0004 7.80004 12.0761 7.61732C12.1518 7.43459 12.28 7.27841 12.4444 7.16853C12.6089 7.05865 12.8022 7 13 7C13.2652 7 13.5196 7.10536 13.7071 7.29289C13.8946 7.48043 14 7.73478 14 8Z"></path>
            </svg>`
        ];
        svgs.forEach((svg) => {
            template = document.createElement('template');
            template.innerHTML = svg;
            actions.appendChild(template.content);
        });
        var titleWrap = document.querySelector(".box_hd .title_wrap");
        titleWrap.appendChild(actions);
    }

    function maskSystemMessages() {
        setInterval(function() {
            var sysMsgs = document.querySelectorAll(".message_system .content");
            sysMsgs.forEach((sysMsg) => {
                if (notContainsMaskedElements(sysMsg, "comment")) {
                    sysMsg.querySelectorAll("img").forEach((img) => img.remove());
                    var sysMsgsStr = translateIntoEnglish(sysMsg.innerHTML);
                    sysMsg.innerHTML = "";
                    GM_addElement(sysMsg, 'p', {
                        class: 'comment',
                        textContent: '// ' + sysMsgsStr
                    });
                }
            });
        }, 1000);
    }

    function maskChatMessageContent() {
        setInterval(function() {
            var msgContents = document.querySelectorAll('.message .content');
            msgContents.forEach((msgCont) => {
                // nickname
                var nicknames = msgCont.getElementsByClassName('nickname');
                if (nicknames.length > 0) {
                    var maskedNickname = maskSpecialEmojis(nicknames[0].innerHTML, 'remove');
                    if (nicknames[0].innerHTML != maskedNickname) {
                        nicknames[0].innerHTML = maskedNickname;
                    }
                }
                // bubble content
                var bubbleContents = msgCont.querySelectorAll('.bubble .bubble_cont');
                bubbleContents.forEach((bubbleCont) => {
                    // plain
                    var plains = bubbleCont.getElementsByClassName('plain');
                    if (nodeIsAvailable(plains)) {
                        var pre = plains[0].getElementsByTagName('pre')[0];
                        // check for unsportted message
                        if (pre.innerHTML.includes('收到一条网页版微信暂不支持的消息类型')) {
                            pre.innerHTML = '<p class="masked">(UNSUPPORTED MESSAGE)</p>';
                            return;
                        } else if (pre.innerHTML.includes('Send an emoji, view it on mobile')) {
                            pre.innerHTML = '<p class="masked">(UNSUPPORTED EMOJI)</p>';
                            return;
                        } else if (pre.innerHTML.includes('该消息类型暂不能展示')) {
                            pre.innerHTML = pre.innerHTML.replace('[该消息类型暂不能展示]', '<span class="masked">(UNSUPPORTED MESSGE)</span>');
                            // continue to the logic as below
                        } else if (pre.innerHTML.includes('[图片]')) {
                            pre.innerHTML = pre.innerHTML.replace('[图片]', '<span class="masked">(IMAGE)</span>');
                            // continue to the logic as below
                        } else if (pre.innerHTML.includes('[视频]')) {
                            pre.innerHTML = pre.innerHTML.replace('[视频]', '<span class="masked">(VIDEO)</span>');
                            // continue to the logic as below
                        }
                        // mask emojis that are on panels
                        var imgs = pre.getElementsByTagName('img');
                        var preText = pre.innerHTML;
                        for (let j = 0; j < imgs.length; j++) {
                            // get the 2nd class name as emoji ID
                            var classStr = imgs[j].getAttribute('class').split(' ')[1];
                            var re = new RegExp(`<img class=.*?${classStr}.*?spacer.gif\">`);
                            preText = preText.replace(re, '<span class="masked" emoid="' + classStr + '">(' + getEmojiText(classStr) + ')</span>');
                        }
                        // mask special emojis that not on panels
                        var maskedPreText = maskSpecialEmojis(preText);
                        if (pre.innerHTML != maskedPreText) {
                            pre.innerHTML = maskedPreText;
                        }
                    }
                    // picture
                    var pictures = bubbleCont.getElementsByClassName('picture');
                    if (nodeIsAvailable(pictures)) {
                        // extract image link
                        var img = pictures[0].getElementsByTagName('img')[0];
                        var imgSrc = img.src.replace('&type=slave', '');
                        GM_addElement(pictures[0], 'a', {
                            class: 'masked',
                            href: imgSrc,
                            target: '_blank',
                            textContent: '(IMAGE)'
                        });
                    }
                    // video
                    var videos = bubbleCont.getElementsByClassName('video');
                    if (nodeIsAvailable(videos)) {
                        // no need to extract video link
                        GM_addElement(videos[0], 'a', {
                            class: 'masked',
                            href: '#',
                            textContent: '(VIDEO)'
                        });
                    }
                    // location
                    var locations = bubbleCont.getElementsByClassName('location');
                    if (nodeIsAvailable(locations)) {
                        var a = locations[0].getElementsByTagName('a')[0];
                        var desc = a.getElementsByTagName('p')[0].innerHTML;
                        a.setAttribute('class', 'masked');
                        a.innerHTML += '(LOCATION:' + desc + ')';
                    }
                    // cards
                    var cards = bubbleCont.getElementsByClassName('card');
                    if (nodeIsAvailable(cards)) {
                        var name = cards[0].getElementsByTagName('h3')[0];
                        GM_addElement(cards[0], 'p', {
                            class: 'masked',
                            textContent: '(CARD: ' + name.innerText + ')'
                        });
                    }
                    // app
                    var apps = bubbleCont.getElementsByClassName('app');
                    if (nodeIsAvailable(apps)) {
                        var title = apps[0].getElementsByTagName('h4')[0];
                        var maskedTitle = maskSpecialEmojis(title.innerHTML, 'remove');
                        if (title.innerHTML != maskedTitle) {
                            title.innerHTML = maskedTitle;
                        }
                    }
                }); // bubbleContents.forEach
                // emoticon
                var customEmojis = msgCont.getElementsByClassName('emoticon');
                if (nodeIsAvailable(customEmojis)) {
                    // extract image link
                    var img = customEmojis[0].getElementsByTagName('img')[0];
                    var imgSrc = img.src.replace('&type=big', '');
                    GM_addElement(customEmojis[0], 'a', {
                        class: 'masked',
                        href: imgSrc,
                        target: '_blank',
                        textContent: '(CUSTOM_EMOJI)'
                    });
                }
                // file
                var attachments = msgCont.getElementsByClassName('attach');
                if (nodeIsAvailable(attachments)) {
                    var title = attachments[0].querySelector('.attach_bd .cont .title').innerHTML;
                    var size = attachments[0].querySelector('.attach_bd .cont .opr .ng-binding').innerHTML;
                    var addr = attachments[0].querySelector('.attach_bd .cont .opr a').href;
                    if (!addr.includes('javascript')) {
                        GM_addElement(attachments[0], 'a', {
                            class: 'masked',
                            href: addr,
                            target: '_blank',
                            textContent: '(' + title + ' | ' + size + ')'
                        });
                    }
                }
            });
        }, 1000);
    }

    function nodeIsAvailable(nodeList) {
        return nodeList.length > 0 && notContainsMaskedElements(nodeList[0]);
    }

    function notContainsMaskedElements(node, className = 'masked') {
        return node.getElementsByClassName(className).length == 0;
    }

    function getEmojiText(key) {
        if (key.startsWith('qqemoji')) {
            return qqface_names_map.get(key);
        } else if (key.startsWith('emoji')) {
            return emoji_names_map.get(key);
        }
        return special_emoji_map.get(key);
    }

    function maskSpecialEmojis(text, mode = 'replace') {
        if (mode == 'replace') {
            for (let [key, value] of special_emoji_map) {
                text = text.replaceAll(key, '<span class="masked">(' + value + ')</span>');
            }
        } else if (mode == 'remove') {
            for (let [key, value] of special_emoji_map) {
                text = text.replaceAll(key, '');
            }
        }
        return text;
    }

    function removeMyNameInQuotedMessage(text) {
        var displayName;
        var checkDisplayName = setInterval(function() {
            displayName = document.querySelector('.header .info .nickname .display_name');
            if (displayName.innerHTML) {
                clearInterval(checkDisplayName);
            }
        }, 500);
        return text.replace(displayName.innerHTML, '');
    }

    function translateIntoEnglish(text) {
        var parts = text.split('\"');
        if (text.includes('邀请') && text.endsWith('加入了群聊')) {
            return parts[1] + ' invited ' + parts[3];
        } else if (text.endsWith('与群里其他人都不是朋友关系，请注意隐私安全')) {
            return parts[1] + ' is not friends with anyone';
        } else if (text.includes('拍了拍')) {
            return parts[1] + ' patted ' + parts[3];
        } else if (text.includes('Below are new messages')) {
            return 'Below are new messages';
        } else if (text.includes('开启了朋友验证，你还不是他（她）朋友')) {
            return 'You are not friends with him/her any more';
        }
        return text;
    }

    function renderVsCodeMenuAndBars() {
        renderTopMenuBar();
        renderLeftSideBar();
        renderBottomStatusBar();
    }

    function renderLeftSideBar() {
        var vscodeSideBar = document.createElement('div');
        vscodeSideBar.classList.add('vscode_side_bar');
        vscodeSideBar.innerHTML = `
    	    <a href="https://wx2.qq.com/?&lang=en">
                <svg role="img" class="vscode_side_bar_icon vscode_side_bar_icon_active" width="24" height="24" viewBox="0 0 24 24" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
                    <title>Explorer</title>
            	    <path d="M17.5 0H8.5L7 1.5V6H2.5L1 7.5V22.5699L2.5 24H14.5699L16 22.5699V18H20.7L22 16.5699V4.5L17.5 0ZM17.5 2.12L19.88 4.5H17.5V2.12ZM14.5 22.5H2.5V7.5H7V16.5699L8.5 18H14.5V22.5ZM20.5 16.5H8.5V1.5H16V6H20.5V16.5Z"/>
                </svg>
            </a>
            <svg role="img" class="vscode_side_bar_icon" width="24" height="24" viewBox="0 0 24 24" fill="#888" xmlns="http://www.w3.org/2000/svg">
                <title>Search</title>
            	<path d="M15.25 1.02546e-06C13.6605 -0.000791296 12.1046 0.457574 10.7694 1.32007C9.43422 2.18256 8.37657 3.4124 7.72375 4.8617C7.07094 6.31099 6.85077 7.91801 7.0896 9.4895C7.32843 11.061 8.01604 12.5301 9.06995 13.72L1 22.88L2.12 23.88L10.17 14.76C11.2055 15.5693 12.4192 16.1196 13.7103 16.365C15.0014 16.6104 16.3325 16.5437 17.5927 16.1707C18.8528 15.7976 20.0055 15.1288 20.955 14.2201C21.9044 13.3114 22.623 12.1891 23.0509 10.9465C23.4789 9.70396 23.6038 8.37703 23.4153 7.07642C23.2267 5.77581 22.7302 4.53915 21.967 3.46924C21.2039 2.39933 20.1962 1.52711 19.0278 0.925416C17.8595 0.323719 16.5642 0.00991516 15.25 0.0100108V1.02546e-06ZM15.25 15C13.915 15 12.6099 14.6041 11.4999 13.8624C10.3898 13.1207 9.52469 12.0665 9.01379 10.8331C8.5029 9.59973 8.36919 8.24248 8.62964 6.93311C8.89009 5.62373 9.53305 4.42106 10.4771 3.47705C11.4211 2.53305 12.6237 1.89009 13.9331 1.62964C15.2425 1.36919 16.5997 1.5029 17.8331 2.01379C19.0665 2.52469 20.1207 3.38985 20.8624 4.49988C21.6041 5.60991 22 6.91498 22 8.25C22 10.0402 21.2888 11.7571 20.0229 13.023C18.7571 14.2888 17.0402 15 15.25 15Z"/>
            </svg>
            <svg role="img" class="vscode_side_bar_icon" width="24" height="24" viewBox="0 0 24 24" fill="#888" xmlns="http://www.w3.org/2000/svg">
                <title>Source Control</title>
            	<path d="M21.0067 8.22168C21.0102 7.52792 20.8205 6.84689 20.4589 6.25485C20.0971 5.66281 19.5778 5.18315 18.959 4.86957C18.3401 4.556 17.6461 4.42091 16.9548 4.47941C16.2635 4.53793 15.6022 4.78773 15.0448 5.20085C14.4875 5.61397 14.0561 6.17409 13.7991 6.8185C13.5421 7.4629 13.4695 8.16613 13.5895 8.84944C13.7096 9.53274 14.0174 10.1692 14.4787 10.6874C14.94 11.2056 15.5365 11.5852 16.2012 11.7836C15.9558 12.2824 15.576 12.703 15.1047 12.9979C14.6334 13.2929 14.0892 13.4505 13.5331 13.4532H10.5437C9.43702 13.4571 8.37138 13.8727 7.55427 14.6191V7.39809C8.46159 7.21288 9.26783 6.69737 9.81668 5.95151C10.3655 5.20565 10.6178 4.28256 10.5248 3.36121C10.4317 2.43987 9.99985 1.5859 9.31292 0.964873C8.62599 0.343845 7.73295 0 6.80691 0C5.88087 0 4.98783 0.343845 4.3009 0.964873C3.61397 1.5859 3.18211 2.43987 3.08904 3.36121C2.99596 4.28256 3.24831 5.20565 3.79715 5.95151C4.34599 6.69737 5.15223 7.21288 6.05955 7.39809V16.5159C5.15393 16.6891 4.34299 17.1877 3.77969 17.9176C3.21639 18.6476 2.93968 19.5585 3.00173 20.4785C3.06379 21.3984 3.46033 22.2639 4.11656 22.9115C4.77279 23.5592 5.64335 23.9444 6.56403 23.9944C7.48472 24.0445 8.39187 23.7558 9.1144 23.183C9.83693 22.6102 10.3249 21.7928 10.4862 20.885C10.6475 19.9771 10.4712 19.0417 9.99023 18.255C9.50932 17.4683 8.75717 16.8848 7.87564 16.6145C8.12152 16.1162 8.50142 15.6963 8.97272 15.4019C9.44401 15.1074 9.98803 14.9503 10.5437 14.9479H13.5331C14.4658 14.9436 15.3739 14.6486 16.1311 14.1039C16.8882 13.5592 17.4566 12.792 17.7572 11.9091C18.6531 11.7914 19.476 11.3528 20.0735 10.6748C20.671 9.9968 21.0025 9.12533 21.0067 8.22168ZM4.56483 3.73752C4.56483 3.29408 4.69633 2.8606 4.94269 2.4919C5.18906 2.12319 5.53922 1.83581 5.9489 1.66611C6.3586 1.49642 6.8094 1.45202 7.24432 1.53854C7.67924 1.62504 8.07874 1.83857 8.3923 2.15214C8.70586 2.4657 8.9194 2.8652 9.00591 3.30012C9.09241 3.73504 9.04802 4.18585 8.87832 4.59553C8.70862 5.00521 8.42125 5.35539 8.05254 5.60175C7.68383 5.84811 7.25035 5.9796 6.80691 5.9796C6.21227 5.9796 5.642 5.74339 5.22152 5.32291C4.80105 4.90245 4.56483 4.33216 4.56483 3.73752ZM9.04899 20.1794C9.04899 20.6229 8.91749 21.0563 8.67113 21.425C8.42476 21.7937 8.0746 22.0811 7.66492 22.2508C7.25523 22.4205 6.80442 22.4649 6.36951 22.3784C5.93458 22.292 5.53509 22.0784 5.22152 21.7648C4.90796 21.4512 4.69443 21.0517 4.60791 20.6169C4.52141 20.1819 4.5658 19.7311 4.7355 19.3214C4.9052 18.9117 5.19258 18.5615 5.56128 18.3152C5.92999 18.0689 6.36347 17.9373 6.80691 17.9373C7.40155 17.9373 7.97183 18.1736 8.3923 18.594C8.81277 19.0145 9.04899 19.5848 9.04899 20.1794ZM17.2699 10.4638C16.8265 10.4638 16.393 10.3322 16.0243 10.0859C15.6556 9.83954 15.3683 9.48937 15.1986 9.07969C15.0289 8.67 14.9844 8.2192 15.0709 7.78427C15.1574 7.34935 15.3709 6.94985 15.6845 6.63629C15.9981 6.32273 16.3976 6.10919 16.8325 6.02268C17.2674 5.93617 17.7183 5.98058 18.1279 6.15027C18.5377 6.31997 18.8878 6.60734 19.1341 6.97605C19.3805 7.34476 19.512 7.77823 19.512 8.22168C19.512 8.81632 19.2757 9.3866 18.8553 9.80706C18.4348 10.2275 17.8645 10.4638 17.2699 10.4638Z"/>
            </svg>
            <svg role="img" class="vscode_side_bar_icon" width="24" height="24" viewBox="0 0 24 24" fill="#888" xmlns="http://www.w3.org/2000/svg">
                <title>Run and Debug</title>
            	<path d="M10.94 13.5L9.62 14.82C9.41924 14.0117 8.95376 13.2939 8.29772 12.7809C7.64168 12.2679 6.83282 11.9892 6 11.9892C5.16718 11.9892 4.35832 12.2679 3.70228 12.7809C3.04624 13.2939 2.58076 14.0117 2.38 14.82L1.06 13.5L0 14.56L1.72 16.28L1.5 16.5V18H0V19.5H1.5V19.58C1.5765 20.0687 1.71425 20.5458 1.91 21L0 22.94L1.06 24L2.71 22.35C3.10257 22.8509 3.60118 23.2586 4.17002 23.5438C4.73885 23.8291 5.36381 23.9849 6 24C6.63619 23.9849 7.26115 23.8291 7.82998 23.5438C8.39882 23.2586 8.89743 22.8509 9.29 22.35L10.94 24L12 22.94L10.09 21C10.2882 20.5362 10.426 20.0489 10.5 19.55V19.45H12V18H10.5V16.5L10.28 16.28L12 14.56L10.94 13.5ZM6 13.5C6.59674 13.5 7.16903 13.7371 7.59099 14.159C8.01295 14.581 8.25 15.1533 8.25 15.75H3.75C3.75 15.1533 3.98705 14.581 4.40901 14.159C4.83097 13.7371 5.40326 13.5 6 13.5V13.5ZM9 19.5C8.92674 20.2709 8.58713 20.9921 8.0396 21.5396C7.49207 22.0871 6.77085 22.4267 6 22.5C5.22915 22.4267 4.50793 22.0871 3.9604 21.5396C3.41287 20.9921 3.07326 20.2709 3 19.5V17.25H9V19.5ZM23.76 9.6V10.86L13.5 17.37V15.6L22 10.23L9 2V11.46C8.54306 11.139 8.03624 10.8958 7.5 10.74V0.63L8.64 0L23.76 9.6Z"/>
            </svg>
            <svg role="img" class="vscode_side_bar_icon" width="24" height="24" viewBox="0 0 24 24" fill="#888" xmlns="http://www.w3.org/2000/svg">
                <title>Extensions</title>
            	<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 1.5L15 0H22.5L24 1.5V9L22.5 10.5H15L13.5 9V1.5ZM15 1.5V9H22.5V1.5H15ZM0 15V6L1.5 4.5H9L10.5 6V13.5H18L19.5 15V22.5L18 24H10.5H9H1.5L0 22.5V15ZM9 13.5V6H1.5V13.5H9ZM9 15H1.5V22.5H9V15ZM10.5 22.5H18V15H10.5V22.5Z"/>
            </svg>
            <svg role="img" class="vscode_side_bar_icon" width="24" height="24" viewBox="0 0 24 24" fill="#888" xmlns="http://www.w3.org/2000/svg">
                <title>Remote Explorer</title>
            	<path fill-rule="evenodd" clip-rule="evenodd" d="M1.34375 2.125H21.6562L22.4375 2.90625V11.5048C21.9519 11.1401 21.4272 10.8346 20.875 10.593V3.6875H2.125V17.75H9.9375C9.9375 18.2593 9.9873 18.7698 10.0876 19.2741C10.3167 20.4256 10.8012 21.5058 11.5 22.4375H5.25V20.875H9.9375V19.3125H1.34375L0.5625 18.5312V2.90625L1.34375 2.125ZM17.75 11.5C16.5138 11.5 15.3054 11.8665 14.2776 12.5532C13.2498 13.24 12.4487 14.2161 11.9757 15.3582C11.5026 16.5002 11.379 17.757 11.6201 18.9694C11.8613 20.1817 12.4566 21.2952 13.3306 22.1693C14.2047 23.0434 15.3182 23.6387 16.5306 23.8798C17.743 24.121 18.9997 23.9974 20.1418 23.5243C21.2838 23.0513 22.26 22.2501 22.9467 21.2223C23.6335 20.1945 24 18.9861 24 17.75C24 16.0924 23.3414 14.5028 22.1693 13.3307C20.9972 12.1586 19.4076 11.5 17.75 11.5ZM17.75 22.4375C16.8229 22.4375 15.9165 22.1625 15.1457 21.6475C14.3748 21.1324 13.7741 20.4004 13.4193 19.5439C13.0645 18.6873 12.9716 17.7447 13.1525 16.8354C13.3334 15.9261 13.7798 15.091 14.4354 14.4354C15.0909 13.7799 15.9261 13.3334 16.8354 13.1525C17.7447 12.9717 18.6873 13.0646 19.5438 13.4194C20.4004 13.7742 21.1324 14.3749 21.6474 15.1457C22.1625 15.9166 22.4375 16.8229 22.4375 17.75C22.4375 18.9932 21.9436 20.1855 21.0646 21.0646C20.1855 21.9437 18.9932 22.4375 17.75 22.4375ZM20.3527 19.3056L18.1998 17.1526L20.3527 15L21 15.6465L19.4935 17.1526L21 18.6591L20.3527 19.3056ZM15 17.2464L16.5065 18.7528L15 20.2593L15.6473 20.9062L17.7999 18.7528L15.6473 16.5998L15 17.2464Z"/>
            </svg>
            <svg role="img" class="vscode_side_bar_icon vscode_side_bar_icon_bottom" width="24" height="24" viewBox="0 0 16 16" fill="#888" xmlns="http://www.w3.org/2000/svg">
                <title>Accounts</title>
            	<path d="M16 7.99201C16 3.58042 12.416 0 8 0C3.584 0 0 3.58042 0 7.99201C0 10.4216 1.104 12.6114 2.832 14.0819C2.848 14.0979 2.864 14.0979 2.864 14.1139C3.008 14.2258 3.152 14.3377 3.312 14.4496C3.392 14.4975 3.456 14.5614 3.536 14.6254C4.816 15.4885 6.352 16 8.016 16C9.68 16 11.216 15.4885 12.496 14.6254C12.576 14.5774 12.64 14.5135 12.72 14.4655C12.864 14.3536 13.024 14.2418 13.168 14.1299C13.184 14.1139 13.2 14.1139 13.2 14.0979C14.896 12.6114 16 10.4216 16 7.99201ZM8 14.993C6.496 14.993 5.12 14.5135 3.984 13.7143C4 13.5864 4.032 13.4585 4.064 13.3307C4.16 12.979 4.304 12.6434 4.48 12.3397C4.656 12.036 4.864 11.7642 5.12 11.5245C5.36 11.2847 5.648 11.0609 5.936 10.8851C6.24 10.7093 6.56 10.5814 6.912 10.4855C7.264 10.3896 7.632 10.3417 8 10.3417C8.592 10.3417 9.136 10.4535 9.632 10.6613C10.128 10.8691 10.56 11.1568 10.928 11.5085C11.296 11.8761 11.584 12.3077 11.792 12.8032C11.904 13.0909 11.984 13.3946 12.032 13.7143C10.88 14.5135 9.504 14.993 8 14.993ZM5.552 7.59241C5.408 7.27273 5.344 6.92108 5.344 6.56943C5.344 6.21778 5.408 5.86613 5.552 5.54645C5.696 5.22677 5.888 4.93906 6.128 4.6993C6.368 4.45954 6.656 4.26773 6.976 4.12388C7.296 3.98002 7.648 3.91608 8 3.91608C8.368 3.91608 8.704 3.98002 9.024 4.12388C9.344 4.26773 9.632 4.45954 9.872 4.6993C10.112 4.93906 10.304 5.22677 10.448 5.54645C10.592 5.86613 10.656 6.21778 10.656 6.56943C10.656 6.93706 10.592 7.27273 10.448 7.59241C10.304 7.91209 10.112 8.1998 9.872 8.43956C9.632 8.67932 9.344 8.87113 9.024 9.01499C8.384 9.28671 7.6 9.28671 6.96 9.01499C6.64 8.87113 6.352 8.67932 6.112 8.43956C5.872 8.1998 5.68 7.91209 5.552 7.59241ZM12.976 12.8991C12.976 12.8671 12.96 12.8511 12.96 12.8192C12.8 12.3237 12.576 11.8442 12.272 11.4126C11.968 10.981 11.616 10.5974 11.184 10.2777C10.864 10.038 10.512 9.83017 10.144 9.67033C10.32 9.55844 10.48 9.41459 10.608 9.28671C10.848 9.04695 11.056 8.79121 11.232 8.5035C11.408 8.21578 11.536 7.91209 11.632 7.57642C11.728 7.24076 11.76 6.90509 11.76 6.56943C11.76 6.04196 11.664 5.54645 11.472 5.0989C11.28 4.65135 11.008 4.25175 10.656 3.9001C10.32 3.56444 9.904 3.29271 9.456 3.1009C9.008 2.90909 8.512 2.81319 7.984 2.81319C7.456 2.81319 6.96 2.90909 6.512 3.1009C6.064 3.29271 5.648 3.56444 5.312 3.91608C4.976 4.25175 4.704 4.66733 4.512 5.11489C4.32 5.56244 4.224 6.05794 4.224 6.58541C4.224 6.93706 4.272 7.27273 4.368 7.59241C4.464 7.92807 4.592 8.23177 4.768 8.51948C4.928 8.80719 5.152 9.06294 5.392 9.3027C5.536 9.44655 5.696 9.57443 5.872 9.68631C5.488 9.86214 5.136 10.0699 4.832 10.3097C4.416 10.6294 4.048 11.013 3.744 11.4286C3.44 11.8601 3.216 12.3237 3.056 12.8352C3.04 12.8671 3.04 12.8991 3.04 12.9151C1.776 11.6364 0.992 9.91009 0.992 7.99201C0.992 4.13986 4.144 0.991009 8 0.991009C11.856 0.991009 15.008 4.13986 15.008 7.99201C15.008 9.91009 14.224 11.6364 12.976 12.8991Z"/>
            </svg>
            <svg role="img" class="vscode_side_bar_icon vscode_side_bar_icon_end" width="24" height="24" viewBox="0 0 24 24" fill="#888" xmlns="http://www.w3.org/2000/svg">
                <title>Manage</title>
            	<path fill-rule="evenodd" clip-rule="evenodd" d="M19.85 8.75L24 9.57996V14.42L19.85 15.25L22.2 18.77L18.77 22.2L15.25 19.85L14.42 24H9.57996L8.75 19.85L5.22998 22.2L1.80005 18.77L4.15002 15.25L0 14.42V9.57996L4.15002 8.75L1.80005 5.22998L5.22998 1.80005L8.75 4.15002L9.57996 0H14.42L15.25 4.15002L18.77 1.80005L22.2 5.22998L19.85 8.75ZM18.28 13.8199L22.28 13.01V11.01L18.28 10.2L17.74 8.90002L20.03 5.46997L18.6 4.04004L15.17 6.32996L13.87 5.79004L13.0601 1.79004H11.0601L10.25 5.79004L8.94995 6.32996L5.52002 4.04004L4.08997 5.46997L6.38 8.90002L5.83997 10.2L1.83997 11.01V13.01L5.83997 13.8199L6.38 15.12L4.08997 18.55L5.52002 19.98L8.94995 17.6899L10.25 18.23L11.0601 22.23H13.0601L13.87 18.23L15.17 17.6899L18.6 19.98L20.03 18.55L17.74 15.12L18.28 13.8199ZM10.0943 9.14807C10.6584 8.77118 11.3216 8.56995 12 8.56995C12.9089 8.57258 13.7798 8.93484 14.4225 9.57751C15.0652 10.2202 15.4274 11.0911 15.43 12C15.43 12.6784 15.2288 13.3416 14.8519 13.9056C14.475 14.4697 13.9394 14.9093 13.3126 15.1689C12.6859 15.4286 11.9962 15.4965 11.3308 15.3641C10.6654 15.2318 10.0543 14.9051 9.57457 14.4254C9.09488 13.9457 8.7682 13.3345 8.63585 12.6692C8.50351 12.0038 8.57143 11.3141 8.83104 10.6874C9.09065 10.0606 9.53029 9.52496 10.0943 9.14807ZM11.0499 13.4218C11.3311 13.6097 11.6618 13.71 12 13.71C12.2249 13.7113 12.4479 13.668 12.656 13.5825C12.8641 13.4971 13.0531 13.3712 13.2121 13.2122C13.3712 13.0531 13.497 12.8641 13.5825 12.656C13.668 12.4479 13.7113 12.2249 13.7099 12C13.7099 11.6618 13.6096 11.3311 13.4217 11.0499C13.2338 10.7687 12.9669 10.5496 12.6544 10.4202C12.3419 10.2907 11.9981 10.2569 11.6664 10.3229C11.3347 10.3889 11.03 10.5517 10.7909 10.7909C10.5517 11.03 10.3888 11.3347 10.3229 11.6664C10.2569 11.9981 10.2907 12.342 10.4202 12.6544C10.5496 12.9669 10.7687 13.2339 11.0499 13.4218Z"/>
            </svg>
        `;
        var mainInner = document.getElementsByClassName('main_inner')[0];
        mainInner.insertBefore(vscodeSideBar, mainInner.getElementsByClassName('panel give_me')[0]);
    }

    function renderBottomStatusBar() {
        // left side
        var remote = document.createElement('span');
        remote.classList.add('vscode_status_item');
        remote.classList.add('vscode_remote');
        remote.innerHTML = `
           <svg width="16" height="16" viewBox="0 0 16 16" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9041 9.57067L8.9281 5.59463L12.9041 1.6186L12.2854 0.999878L8.00002 5.28527V5.90399L12.2854 10.1894L12.9041 9.57067ZM3 5.61874L7.07191 9.69064L3 13.7626L3.61872 14.3813L7.99999 10V9.38128L3.61872 5.00002L3 5.61874Z"></path>
           </svg>
        `;
        var gitInfo = document.createElement('span');
        gitInfo.classList.add('vscode_status_item');
        gitInfo.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.0067 8.22168C21.0102 7.52792 20.8205 6.84689 20.4589 6.25485C20.0971 5.66281 19.5778 5.18315 18.959 4.86957C18.3401 4.556 17.6461 4.42091 16.9548 4.47941C16.2635 4.53793 15.6022 4.78773 15.0448 5.20085C14.4875 5.61397 14.0561 6.17409 13.7991 6.8185C13.5421 7.4629 13.4695 8.16613 13.5895 8.84944C13.7096 9.53274 14.0174 10.1692 14.4787 10.6874C14.94 11.2056 15.5365 11.5852 16.2012 11.7836C15.9558 12.2824 15.576 12.703 15.1047 12.9979C14.6334 13.2929 14.0892 13.4505 13.5331 13.4532H10.5437C9.43702 13.4571 8.37138 13.8727 7.55427 14.6191V7.39809C8.46159 7.21288 9.26783 6.69737 9.81668 5.95151C10.3655 5.20565 10.6178 4.28256 10.5248 3.36121C10.4317 2.43987 9.99985 1.5859 9.31292 0.964873C8.62599 0.343845 7.73295 0 6.80691 0C5.88087 0 4.98783 0.343845 4.3009 0.964873C3.61397 1.5859 3.18211 2.43987 3.08904 3.36121C2.99596 4.28256 3.24831 5.20565 3.79715 5.95151C4.34599 6.69737 5.15223 7.21288 6.05955 7.39809V16.5159C5.15393 16.6891 4.34299 17.1877 3.77969 17.9176C3.21639 18.6476 2.93968 19.5585 3.00173 20.4785C3.06379 21.3984 3.46033 22.2639 4.11656 22.9115C4.77279 23.5592 5.64335 23.9444 6.56403 23.9944C7.48472 24.0445 8.39187 23.7558 9.1144 23.183C9.83693 22.6102 10.3249 21.7928 10.4862 20.885C10.6475 19.9771 10.4712 19.0417 9.99023 18.255C9.50932 17.4683 8.75717 16.8848 7.87564 16.6145C8.12152 16.1162 8.50142 15.6963 8.97272 15.4019C9.44401 15.1074 9.98803 14.9503 10.5437 14.9479H13.5331C14.4658 14.9436 15.3739 14.6486 16.1311 14.1039C16.8882 13.5592 17.4566 12.792 17.7572 11.9091C18.6531 11.7914 19.476 11.3528 20.0735 10.6748C20.671 9.9968 21.0025 9.12533 21.0067 8.22168ZM4.56483 3.73752C4.56483 3.29408 4.69633 2.8606 4.94269 2.4919C5.18906 2.12319 5.53922 1.83581 5.9489 1.66611C6.3586 1.49642 6.8094 1.45202 7.24432 1.53854C7.67924 1.62504 8.07874 1.83857 8.3923 2.15214C8.70586 2.4657 8.9194 2.8652 9.00591 3.30012C9.09241 3.73504 9.04802 4.18585 8.87832 4.59553C8.70862 5.00521 8.42125 5.35539 8.05254 5.60175C7.68383 5.84811 7.25035 5.9796 6.80691 5.9796C6.21227 5.9796 5.642 5.74339 5.22152 5.32291C4.80105 4.90245 4.56483 4.33216 4.56483 3.73752ZM9.04899 20.1794C9.04899 20.6229 8.91749 21.0563 8.67113 21.425C8.42476 21.7937 8.0746 22.0811 7.66492 22.2508C7.25523 22.4205 6.80442 22.4649 6.36951 22.3784C5.93458 22.292 5.53509 22.0784 5.22152 21.7648C4.90796 21.4512 4.69443 21.0517 4.60791 20.6169C4.52141 20.1819 4.5658 19.7311 4.7355 19.3214C4.9052 18.9117 5.19258 18.5615 5.56128 18.3152C5.92999 18.0689 6.36347 17.9373 6.80691 17.9373C7.40155 17.9373 7.97183 18.1736 8.3923 18.594C8.81277 19.0145 9.04899 19.5848 9.04899 20.1794ZM17.2699 10.4638C16.8265 10.4638 16.393 10.3322 16.0243 10.0859C15.6556 9.83954 15.3683 9.48937 15.1986 9.07969C15.0289 8.67 14.9844 8.2192 15.0709 7.78427C15.1574 7.34935 15.3709 6.94985 15.6845 6.63629C15.9981 6.32273 16.3976 6.10919 16.8325 6.02268C17.2674 5.93617 17.7183 5.98058 18.1279 6.15027C18.5377 6.31997 18.8878 6.60734 19.1341 6.97605C19.3805 7.34476 19.512 7.77823 19.512 8.22168C19.512 8.81632 19.2757 9.3866 18.8553 9.80706C18.4348 10.2275 17.8645 10.4638 17.2699 10.4638Z"/>
            </svg>
            main
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00583 8.26691L0.78 9.50003L0 8.73003L2.09 6.66003L2.85 6.67003L4.94 8.79003L4.18 9.55003L3.01348 8.36995C3.2028 10.9586 5.363 13 8 13C9.91062 13 11.571 11.9283 12.4127 10.3533L13.226 10.9499C12.1959 12.7709 10.2415 14 8 14C4.77573 14 2.14547 11.4568 2.00583 8.26691ZM12.9961 7.80051L11.76 6.55005L11 7.31005L13.09 9.42005L13.85 9.43005L15.94 7.36005L15.19 6.60005L13.996 7.78004C13.8803 4.56823 11.2401 2 8 2C5.83727 2 3.94179 3.14427 2.88597 4.86043L3.69563 5.45436C4.56647 3.98506 6.1682 3 8 3C10.6946 3 12.8914 5.13157 12.9961 7.80051Z"/>
            </svg>
        `;
        var problemInfo = document.createElement('span');
        problemInfo.classList.add('vscode_status_item');
        problemInfo.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.59975 0.999985C10.1998 1.09999 11.6998 1.89999 12.7998 2.99999C14.0998 4.39999 14.7998 6.09999 14.7998 8.09999C14.7998 9.69999 14.1998 11.2 13.1998 12.5C12.1998 13.7 10.7998 14.6 9.19975 14.9C7.59975 15.2 5.99975 15 4.59975 14.2C3.19975 13.4 2.09975 12.2 1.49975 10.7C0.899753 9.19999 0.799753 7.49999 1.29975 5.99999C1.79975 4.39999 2.69975 3.09999 4.09975 2.19999C5.39975 1.29999 6.99975 0.899985 8.59975 0.999985ZM9.09975 13.9C10.3998 13.6 11.5998 12.9 12.4998 11.8C13.2998 10.7 13.7998 9.39999 13.6998 7.99999C13.6998 6.39999 13.0998 4.79999 11.9998 3.69999C10.9998 2.69999 9.79975 2.09999 8.39975 1.99999C7.09975 1.89999 5.69975 2.19999 4.59975 2.99999C3.49975 3.79999 2.69975 4.89999 2.29975 6.29999C1.89975 7.59999 1.89975 8.99999 2.49975 10.3C3.09975 11.6 3.99975 12.6 5.19975 13.3C6.39975 14 7.79975 14.2 9.09975 13.9ZM7.89974 7.5L10.2997 5L10.9997 5.7L8.59974 8.2L10.9997 10.7L10.2997 11.4L7.89974 8.9L5.49974 11.4L4.79974 10.7L7.19974 8.2L4.79974 5.7L5.49974 5L7.89974 7.5Z"/>
            </svg>
            0
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.55976 1H8.43976L14.9798 13.26L14.5398 14H1.43976L0.999756 13.26L7.55976 1ZM7.99976 2.28L2.27976 13H13.6998L7.99976 2.28ZM8.62476 12V11H7.37476V12H8.62476ZM7.37476 10V6H8.62476V10H7.37476Z"/>
            </svg>
            0
        `;
        var portsInfo = document.createElement('span');
        portsInfo.classList.add('vscode_status_item');
        portsInfo.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.99841 5.57996C3.00865 4.12421 3.59044 2.73077 4.61841 1.69995L3.90839 1C3.30369 1.59963 2.82376 2.31304 2.49622 3.09912C2.16867 3.88521 2 4.72836 2 5.57996C2 6.43155 2.16867 7.27471 2.49622 8.06079C2.82376 8.84688 3.30369 9.56028 3.90839 10.1599L4.61841 9.45996C3.59044 8.42915 3.00865 7.0357 2.99841 5.57996ZM4.05839 5.57996C4.05581 6.16968 4.17129 6.75392 4.39799 7.29834C4.62469 7.84276 4.95803 8.33639 5.3784 8.75L6.08842 8.03992C5.75975 7.72367 5.50086 7.34217 5.32841 6.91992C5.14994 6.49573 5.05812 6.04016 5.05839 5.57996C5.05699 5.12287 5.14888 4.67035 5.32841 4.25C5.49829 3.82346 5.75742 3.43817 6.08842 3.12L5.3784 2.40991C4.95983 2.82487 4.62767 3.31868 4.4011 3.86279C4.17454 4.4069 4.05804 4.99056 4.05839 5.57996ZM11.7084 8.78992L10.9984 8.07996C11.3282 7.7608 11.5872 7.37578 11.7584 6.94995C11.9369 6.52576 12.0287 6.07019 12.0284 5.60999C12.0298 5.1529 11.938 4.70026 11.7584 4.27991C11.5885 3.85337 11.3294 3.46808 10.9984 3.1499L11.7084 2.44995C12.1263 2.86536 12.4579 3.35929 12.6841 3.90332C12.9104 4.44735 13.0269 5.03079 13.0269 5.62C13.0269 6.2092 12.9104 6.79252 12.6841 7.33655C12.4579 7.88058 12.1263 8.3745 11.7084 8.78992ZM13.0684 1L12.3584 1.70996C12.8718 2.21526 13.2796 2.81765 13.5579 3.48206C13.8362 4.14647 13.9795 4.85961 13.9795 5.57996C13.9795 6.3003 13.8362 7.01345 13.5579 7.67786C13.2796 8.34227 12.8718 8.94466 12.3584 9.44995L13.0684 10.1599C13.6731 9.56028 14.1531 8.84688 14.4807 8.06079C14.8082 7.27471 14.9768 6.43155 14.9768 5.57996C14.9768 4.72836 14.8082 3.88521 14.4807 3.09912C14.1531 2.31304 13.6731 1.59963 13.0684 1ZM9.99274 5.4303C10.027 5.77529 9.94063 6.12139 9.74841 6.40991C9.6654 6.49442 9.57503 6.57149 9.47839 6.64001L12.9184 14.37L11.9984 14.7699L11.2284 13.0399H5.68842L4.9184 14.7699L3.99841 14.37L7.43842 6.64001C7.22945 6.42892 7.08694 6.16121 7.02844 5.86999C6.96962 5.58172 6.99741 5.28249 7.1084 5.01001C7.22537 4.73395 7.41989 4.49769 7.6684 4.32995C7.95691 4.13774 8.30314 4.05136 8.64813 4.08557C8.99313 4.11978 9.31559 4.27243 9.56073 4.51758C9.80587 4.76272 9.95852 5.0853 9.99274 5.4303ZM8.39844 5.08996C8.30364 5.1123 8.21702 5.16082 8.14844 5.22998C8.09471 5.29346 8.05694 5.36888 8.03839 5.44995C8.00849 5.5443 8.00849 5.64563 8.03839 5.73999C8.07779 5.83075 8.13975 5.90991 8.21838 5.96997C8.30263 6.02177 8.39951 6.0494 8.49841 6.04993C8.63022 6.04737 8.7559 5.99385 8.84912 5.90063C8.94234 5.80741 8.99585 5.68173 8.99841 5.54993C8.99789 5.45103 8.9702 5.35414 8.9184 5.2699C8.85834 5.19126 8.77918 5.12936 8.68842 5.08996C8.59406 5.06006 8.49279 5.06006 8.39844 5.08996ZM8.62842 7.14001H8.3584L7.4884 9.07995H9.4884L8.62842 7.14001ZM10.8284 12.08L9.93842 10.08H7.05841L6.1684 12.08H10.8284Z"/>
            </svg>
            0
        `;
        // right side
        var posInfo = document.createElement('span');
        posInfo.classList.add('vscode_status_item');
        posInfo.classList.add('vscode_status_item_right');
        posInfo.innerHTML = 'Ln 4, Col 1';
        var indentInfo = document.createElement('span');
        indentInfo.classList.add('vscode_status_item');
        indentInfo.innerHTML = 'Spaces: 4';
        var encodingInfo = document.createElement('span');
        encodingInfo.classList.add('vscode_status_item');
        encodingInfo.innerHTML = 'UTF-8';
        var endOfLineInfo = document.createElement('span');
        endOfLineInfo.classList.add('vscode_status_item');
        endOfLineInfo.innerHTML = 'CRLF';
        var langInfo = document.createElement('span');
        langInfo.classList.add('vscode_status_item');
        langInfo.innerHTML = 'JavaScript';
        var notificationInfo = document.createElement('span');
        notificationInfo.classList.add('vscode_status_item');
        notificationInfo.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3772 10.5735C13.126 9.80788 12.9944 9.00633 12.9944 8.19282V6.19493C13.0063 4.92681 12.5637 3.69457 11.7263 2.74946C10.8888 1.79239 9.74033 1.18226 8.48417 1.02673C7.79029 0.954953 7.08445 1.02673 6.4145 1.25404C5.74455 1.46938 5.13441 1.82828 4.61999 2.30682C4.10556 2.77339 3.68684 3.34764 3.41168 3.9817C3.13652 4.61576 2.981 5.29767 2.981 6.00351V8.20478C2.981 9.00633 2.8494 9.80788 2.59817 10.5735L2 12.3441L2.47854 13.0021H5.98382C5.98382 13.5285 6.19916 14.0429 6.57002 14.4138C6.94089 14.7847 7.45532 15 7.98171 15C8.5081 15 9.02252 14.7847 9.39339 14.4138C9.76425 14.0429 9.9796 13.5285 9.9796 13.0021H13.4849L13.9634 12.3441L13.3772 10.5735ZM8.68755 13.7199C8.49613 13.9113 8.2449 14.019 7.98171 14.019C7.71851 14.019 7.46728 13.9113 7.27586 13.7199C7.08445 13.5285 6.97678 13.2773 6.97678 13.0141H8.97467C8.98663 13.2773 8.87896 13.5285 8.68755 13.7199ZM3.17241 12.0091L3.54328 10.8965C3.8304 10.0232 3.98593 9.114 3.98593 8.20478V6.00351C3.98593 5.44123 4.10556 4.89092 4.33287 4.38845C4.56017 3.87403 4.88318 3.41942 5.3019 3.04855C5.72062 2.66572 6.21112 2.3786 6.73751 2.21111C7.27586 2.03166 7.83815 1.97184 8.38846 2.03166C9.39339 2.16326 10.3265 2.66572 10.9845 3.43138C11.6545 4.19704 12.0014 5.19 11.9894 6.20689V8.21675C11.9894 9.12596 12.133 10.0352 12.4321 10.9085L12.803 12.0211H3.17241V12.0091Z"/>
            </svg>
        `;
        var statusBar = document.createElement('div');
        statusBar.setAttribute('id', 'vscode_bottom_bar');
        statusBar.appendChild(remote);
        statusBar.appendChild(gitInfo);
        statusBar.appendChild(problemInfo);
        statusBar.appendChild(portsInfo);
        statusBar.appendChild(posInfo);
        statusBar.appendChild(indentInfo);
        statusBar.appendChild(encodingInfo);
        statusBar.appendChild(endOfLineInfo);
        statusBar.appendChild(langInfo);
        statusBar.appendChild(notificationInfo);
        // add to dom
        var mainInner = document.getElementsByClassName('main_inner')[0];
        mainInner.appendChild(statusBar);
    }

    function renderTopMenuBar() {
        var topMenuBar = document.createElement('div');
        topMenuBar.setAttribute('id', 'vscode_top_menu_bar');
        // vscode logo
        var logo = document.createElement('a');
        logo.setAttribute('id', 'vscode_logo');
        logo.setAttribute('href', 'https://code.visualstudio.com/');
        logo.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    	   	    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
    	   	    	<path fill-rule="evenodd" clip-rule="evenodd" d="M70.9119 99.3171C72.4869 99.9307 74.2828 99.8914 75.8725 99.1264L96.4608 89.2197C98.6242 88.1787 100 85.9892 100 83.5872V16.4133C100 14.0113 98.6243 11.8218 96.4609 10.7808L75.8725 0.873756C73.7862 -0.130129 71.3446 0.11576 69.5135 1.44695C69.252 1.63711 69.0028 1.84943 68.769 2.08341L29.3551 38.0415L12.1872 25.0096C10.589 23.7965 8.35363 23.8959 6.86933 25.2461L1.36303 30.2549C-0.452552 31.9064 -0.454633 34.7627 1.35853 36.417L16.2471 50.0001L1.35853 63.5832C-0.454633 65.2374 -0.452552 68.0938 1.36303 69.7453L6.86933 74.7541C8.35363 76.1043 10.589 76.2037 12.1872 74.9905L29.3551 61.9587L68.769 97.9167C69.3925 98.5406 70.1246 99.0104 70.9119 99.3171ZM75.0152 27.2989L45.1091 50.0001L75.0152 72.7012V27.2989Z" fill="white"></path>
    	   	    </mask>
    	   	    <g mask="url(#mask0)">
    	   	    	<path d="M96.4614 10.7962L75.8569 0.875542C73.4719 -0.272773 70.6217 0.211611 68.75 2.08333L1.29858 63.5832C-0.515693 65.2373 -0.513607 68.0937 1.30308 69.7452L6.81272 74.754C8.29793 76.1042 10.5347 76.2036 12.1338 74.9905L93.3609 13.3699C96.086 11.3026 100 13.2462 100 16.6667V16.4275C100 14.0265 98.6246 11.8378 96.4614 10.7962Z" fill="#0065A9"></path>
    	   	    	<g filter="url(#filter0_d)">
    	   	    		<path d="M96.4614 89.2038L75.8569 99.1245C73.4719 100.273 70.6217 99.7884 68.75 97.9167L1.29858 36.4169C-0.515693 34.7627 -0.513607 31.9063 1.30308 30.2548L6.81272 25.246C8.29793 23.8958 10.5347 23.7964 12.1338 25.0095L93.3609 86.6301C96.086 88.6974 100 86.7538 100 83.3334V83.5726C100 85.9735 98.6246 88.1622 96.4614 89.2038Z" fill="#007ACC"></path>
    	   	    	</g>
    	   	    	<g filter="url(#filter1_d)">
    	   	    		<path d="M75.8578 99.1263C73.4721 100.274 70.6219 99.7885 68.75 97.9166C71.0564 100.223 75 98.5895 75 95.3278V4.67213C75 1.41039 71.0564 -0.223106 68.75 2.08329C70.6219 0.211402 73.4721 -0.273666 75.8578 0.873633L96.4587 10.7807C98.6234 11.8217 100 14.0112 100 16.4132V83.5871C100 85.9891 98.6234 88.1786 96.4586 89.2196L75.8578 99.1263Z" fill="#1F9CF0"></path>
    	   	    	</g>
    	   	    	<g style="mix-blend-mode:overlay" opacity="0.25">
    	   	    		<path fill-rule="evenodd" clip-rule="evenodd" d="M70.8511 99.3171C72.4261 99.9306 74.2221 99.8913 75.8117 99.1264L96.4 89.2197C98.5634 88.1787 99.9392 85.9892 99.9392 83.5871V16.4133C99.9392 14.0112 98.5635 11.8217 96.4001 10.7807L75.8117 0.873695C73.7255 -0.13019 71.2838 0.115699 69.4527 1.44688C69.1912 1.63705 68.942 1.84937 68.7082 2.08335L29.2943 38.0414L12.1264 25.0096C10.5283 23.7964 8.29285 23.8959 6.80855 25.246L1.30225 30.2548C-0.513334 31.9064 -0.515415 34.7627 1.29775 36.4169L16.1863 50L1.29775 63.5832C-0.515415 65.2374 -0.513334 68.0937 1.30225 69.7452L6.80855 74.754C8.29285 76.1042 10.5283 76.2036 12.1264 74.9905L29.2943 61.9586L68.7082 97.9167C69.3317 98.5405 70.0638 99.0104 70.8511 99.3171ZM74.9544 27.2989L45.0483 50L74.9544 72.7012V27.2989Z" fill="url(#paint0_linear)"></path>
    	   	    	</g>
    	   	    </g>
    	   	    <defs>
    	   	    	<filter id="filter0_d" x="-8.39411" y="15.8291" width="116.727" height="92.2456" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    	   	    		<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
    	   	    		<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
    	   	    		<feOffset></feOffset>
    	   	    		<feGaussianBlur stdDeviation="4.16667"></feGaussianBlur>
    	   	    		<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
    	   	    		<feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
    	   	    		<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
    	   	    	</filter>
    	   	    	<filter id="filter1_d" x="60.4167" y="-8.07558" width="47.9167" height="116.151" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    	   	    		<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
    	   	    		<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
    	   	    		<feOffset></feOffset>
    	   	    		<feGaussianBlur stdDeviation="4.16667"></feGaussianBlur>
    	   	    		<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
    	   	    		<feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
    	   	    		<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
    	   	    	</filter>
    	   	    	<linearGradient id="paint0_linear" x1="49.9392" y1="0.257812" x2="49.9392" y2="99.7423" gradientUnits="userSpaceOnUse">
    	   	    		<stop stop-color="white"></stop>
    	   	    		<stop offset="1" stop-color="white" stop-opacity="0"></stop>
    	   	    	</linearGradient>
    	   	    </defs>
    	    </svg>
        `;
        topMenuBar.appendChild(logo);

        // vscode menu
        var menu = document.createElement('ul');
        var menuList = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'];
        menuList.forEach((e) => {
            var li = document.createElement('li');
            li.innerHTML = e;
            menu.appendChild(li);
        });
        topMenuBar.appendChild(menu);

        // vscode arrows
        var vsArrows = [
            `<div class="vscode_nav vscode_center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#999" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99999 3.0929L2 8.09288L2 8.79999L6.99999 13.8L7.7071 13.0929L3.56066 8.94644L14 8.94644L14 7.94644L3.56066 7.94644L7.7071 3.8L6.99999 3.0929Z"/>
                </svg>
            </div>`,
            `<div class="vscode_nav">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#999" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00001 13.8871L14 8.8871L14 8.17999L9.00001 3.17999L8.2929 3.8871L12.4393 8.03354L2 8.03354L2 9.03354L12.4393 9.03354L8.2929 13.18L9.00001 13.8871Z"/>
                </svg>
            </div>`
        ];
        vsArrows.forEach((arr) => {
            var temp = document.createElement('template');
            temp.innerHTML = arr;
            topMenuBar.appendChild(temp.content);
        });

        // vscode search
        var vsSearch = document.createElement('div');
        vsSearch.classList.add('vscode_search');
        vsSearch.innerHTML = `
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#999" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.25 1.02546e-06C13.6605 -0.000791296 12.1046 0.457574 10.7694 1.32007C9.43422 2.18256 8.37657 3.4124 7.72375 4.8617C7.07094 6.31099 6.85077 7.91801 7.0896 9.4895C7.32843 11.061 8.01604 12.5301 9.06995 13.72L1 22.88L2.12 23.88L10.17 14.76C11.2055 15.5693 12.4192 16.1196 13.7103 16.365C15.0014 16.6104 16.3325 16.5437 17.5927 16.1707C18.8528 15.7976 20.0055 15.1288 20.955 14.2201C21.9044 13.3114 22.623 12.1891 23.0509 10.9465C23.4789 9.70396 23.6038 8.37703 23.4153 7.07642C23.2267 5.77581 22.7302 4.53915 21.967 3.46924C21.2039 2.39933 20.1962 1.52711 19.0278 0.925416C17.8595 0.323719 16.5642 0.00991516 15.25 0.0100108V1.02546e-06ZM15.25 15C13.915 15 12.6099 14.6041 11.4999 13.8624C10.3898 13.1207 9.52469 12.0665 9.01379 10.8331C8.5029 9.59973 8.36919 8.24248 8.62964 6.93311C8.89009 5.62373 9.53305 4.42106 10.4771 3.47705C11.4211 2.53305 12.6237 1.89009 13.9331 1.62964C15.2425 1.36919 16.5997 1.5029 17.8331 2.01379C19.0665 2.52469 20.1207 3.38985 20.8624 4.49988C21.6041 5.60991 22 6.91498 22 8.25C22 10.0402 21.2888 11.7571 20.0229 13.023C18.7571 14.2888 17.0402 15 15.25 15Z"/>
            </svg>
            <span class="vscode_search_hint">microsoft-vscode</span>
        `;
        topMenuBar.appendChild(vsSearch);
        // vscode window actions
        var vsWinActions = [
            // chrome-minimize
            `<div class="vscode_chrome_button vscode_right">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#999" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 7.99994V8.99994H3V7.99994H14Z" fill="#C5C5C5"/>
                </svg>
            </div>`,
            // chrome-restore
            `<div class="vscode_chrome_button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#999" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5V14H12V5H3ZM11 13H4V6H11V13Z" fill="#C5C5C5"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 5H6V4H13V11H12V12H14V5V3H12H5V5Z" fill="#C5C5C5"/>
                </svg>
            </div>`,
            // chrome-close
            `<div class="vscode_chrome_button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#999" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.1161 7.99992L2.55804 12.558L3.44193 13.4419L7.99999 8.88381L12.558 13.4419L13.4419 12.558L8.88387 7.99992L13.4419 3.44187L12.558 2.55798L7.99999 7.11604L3.44193 2.55798L2.55804 3.44187L7.1161 7.99992Z"/>
                </svg>
            </div>`
        ];
        vsWinActions.forEach((act) => {
            var temp = document.createElement('template');
            temp.innerHTML = act;
            topMenuBar.appendChild(temp.content);
        });

        // add to main window
        var mainInner = document.getElementsByClassName('main_inner')[0];
        mainInner.insertBefore(topMenuBar, mainInner.getElementsByClassName('panel give_me')[0]);
    }

})();