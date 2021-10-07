/*==================== TWEMOJI ====================*/
twemoji.parse(document.body);

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show')
        })
    }
}
showMenu('toggle','menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.link')

function linkAction(){
    const navMenu = document.getElementById('menu')
    // When we click on each link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.add(`active-link`)
        }else{
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove(`active-link`)
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*==================== TEAM ====================*/
var teamMemberArray = [
    {
        title: 'Barry / Berry',
        username: 'bawwub',
        discriminator: '0001',
        description: '👋 Hey, I\'m Barry, a graphic designer/artist, as well as a kindergarden teacher in training! I also run the Owners Hub community & produce the Communities on Discord podcast.',
        role: 'Founder',
        avatar: 'assets/img/team/avatars/bawwub.png',
        banner: 'assets/img/team/banners/bawwub.gif'
    },
    {
        title: 'Vanished',
        username: 'Vanished',
        discriminator: '9049',
        description: `<div id="gameContainer" style="text-align: center;">
    0️⃣<br />
    <br />
    🟩🟩🟩🟩🟩<br />
    🟩🟩🟩🟩🟩<br />
    🟩🟩🟩🟩🟩<br />
    🟩🟩🟩🟩🟩<br />
    🟩🟩🟩🟩🟩<br />
</div>
<script async defer>
    var game = {
        score: 0,
        region: {
            width: 7,
            height: 7,
        },
        emojis: {
            background: '⬛',
            body: '🟩',
            apple: '🟥',
            numbers: [
                '0️⃣',
                '1️⃣',
                '2️⃣',
                '3️⃣',
                '4️⃣',
                '5️⃣',
                '6️⃣',
                '7️⃣',
                '8️⃣',
                '9️⃣',
            ]
        },
        snake: {
            velocities: { x: 1, y: 0 },
            body: [
                { x: 2, y: 1 },
                { x: 1, y: 1 },
                { x: 0, y: 1 },
            ],
            default: {
                velocities: { x: 1, y: 0 },
                body: [
                    { x: 2, y: 1 },
                    { x: 1, y: 1 },
                    { x: 0, y: 1 },
                ],
            },
        },
        apple: { x: -1, y: -1 },
    }

    var updateFrame = (frame) => {
        var gameContainer = document.getElementById('gameContainer');

        var frame = [];
        for (let y = 0; y < (game.region.height); y++) {
            frame.push([]);

            for (let x = 0; x < (game.region.width); x++) {
                if (game.snake.body.some((bodyPart) => bodyPart.x == x && bodyPart.y == y)) {
                    frame[y].push(game.emojis.body);
                } else if (game.apple.x == x && game.apple.y == y) {
                    frame[y].push(game.emojis.apple);
                } else {
                    frame[y].push(game.emojis.background);
                }
            }
            frame[y] = frame[y].join('');
        }
        frame = frame.join('<br />');

        gameContainer.innerHTML = game.score.toString().split('').map((scoreNumber) => game.emojis.numbers[new Number(scoreNumber)]).join('')+'<br /><br />'+frame;
    }
    var updateSnake = () => {
        game.snake.body.pop();

        var head = { x: game.snake.body[0].x, y: game.snake.body[0].y };
        head.x += game.snake.velocities.x;
        head.y += game.snake.velocities.y;

        game.snake.body.unshift(head);

        if (head.x == game.apple.x & head.y == game.apple.y) {
            game.score += 1;

            spawnApple();
        }
        updateFrame();
    }
    var spawnApple = () => {
        game.apple = { x: Math.floor(Math.random() * ((0 + 1) - game.region.width) + game.region.width), y: Math.floor(Math.random() * ((0 + 1) - game.region.height) + game.region.height) }
        if (game.snake.body.some((bodyPart) => bodyPart.x == game.apple.x && bodyPart.y == game.apple.y)) spawnApple();
    }
    spawnApple();

    var typed = [];
    document.addEventListener('keydown', (event) => {
        var monkey = 'monkey';
        if (monkey.includes(event.key)) {
            typed += event.key;

            if (typed.endsWith(monkey)) {
                game.emojis = {
                    background: '🌲',
                    body: '🦍',
                    apple: '🍌',
                    numbers: [
                        '0️⃣',
                        '1️⃣',
                        '2️⃣',
                        '3️⃣',
                        '4️⃣',
                        '5️⃣',
                        '6️⃣',
                        '7️⃣',
                        '8️⃣',
                        '9️⃣',
                    ]
                }
                updateFrame();
            }
        }

        const goingUp = game.snake.velocities.y == -1,
            goingDown = game.snake.velocities.y == 1,
            goingLeft = game.snake.velocities.x == -1,
            goingRight = game.snake.velocities.x == 1;

        switch(event.key) {
            case 'ArrowUp':
                event.returnValue = false;
                
                if (goingDown) return;
                game.snake.velocities = { x: 0, y: -1 };

                updateSnake();
                break;
            case 'ArrowDown':
                event.returnValue = false;
                
                if (goingUp) return;
                game.snake.velocities = { x: 0, y: 1 };
                
                updateSnake();
                break;
            case 'ArrowLeft':
                event.returnValue = false;
                
                if (goingRight) return;
                game.snake.velocities = { x: -1, y: 0 };
                
                updateSnake();
                break;
            case 'ArrowRight':
                event.returnValue = false;
                
                if (goingLeft) return;
                game.snake.velocities = { x: 1, y: 0 };
                
                updateSnake();
                break;
        }
        updateFrame();
    });
    updateFrame();
</script>`,
        role: 'Administrator/Developer',
        avatar: 'assets/img/team/avatars/vanished.png',
        banner: 'assets/img/team/banners/vanished.gif',
        twemoji: false
    },
    {
        title: 'Dei',
        username: 'Dei',
        discriminator: '2411',
        description: 'My name is Deividas, but you may call me Dei for short.',
        role: 'Administrator',
        avatar: 'assets/img/team/avatars/dei.png',
        banner: 'assets/img/team/banners/dei.gif'
    },  
    {
        title: 'Arie',
        username: 'Arie',
        discriminator: '2222',
        description: '👋 Hai! My name\'s Arie and I\'m a digital artist & femboy. I also help out with administrating a safe community over at <b>Owners Hub</b>.',
        role: 'Administrator',
        avatar: 'assets/img/team/avatars/qynx.png',
        banner: 'assets/img/team/banners/qynx.png'
    }, 
    {
        title: 'Drag',
        username: 'Mogu',
        discriminator: '8588',
        description: `<div class="hey">i'm drag, hi.<div class="drago"><a href="#"><img src="assets/img/hoponamongus.gif" class="monkey" alt=""></a></div></div>`,
        role: 'Web Developer',
        avatar: 'assets/img/team/avatars/drag.gif',
        banner: 'assets/img/team/banners/drag.jpg'
    },
    {
        title: 'Pauel',
        username: 'pauel',
        discriminator: '0001',
        description: 'shbzt',
        role: 'Bot Developer',
        avatar: 'assets/img/team/avatars/pauel.gif',
        banner: 'assets/img/team/banners/pauel.png'
    },   
    {
        title: 'Tunic Fox',
        username: 'Tunic Fox',
        discriminator: '1312',
        description: 'Hi! The names Tunic. I\'m 24 and am apart of the Discord Moderator Ecosystem. I have made many contributions to the Ecosystem, in the form of writing DMA articles, working in the DMP, or helping fellow moderators.<br>I can\'t wait to help Owners Hub and their podcast!',
        role: 'Moderator/Podcast Host',
        avatar: 'assets/img/team/avatars/tunic.gif',
        banner: 'assets/img/team/banners/tunic.png'
    },   
    {
        title: 'Grammsay',
        username: 'Grammsay',
        discriminator: '0001',
        description: 'Hello I\'m Grammsay, a professional <b>Meme Lord</b>.',
        role: 'Moderator',
        avatar: 'assets/img/team/avatars/grammsay.gif',
        banner: 'assets/img/team/banners/grammsay.png'
    },  
    {
        title: 'Ben',
        username: 'Ben!',
        discriminator: '0002',
        description: 'i wanna hug a red panda',
        role: 'Moderator',
        avatar: 'assets/img/team/avatars/ben.png',
        banner: 'assets/img/team/banners/ben.gif'
    },   
    {
        title: 'Light',
        username: 'Light',
        discriminator: '9999',
        description: 'i\'m <b>light</b>',
        role: 'Moderator/Writer',
        avatar: 'assets/img/team/avatars/light.gif',
        banner: 'assets/img/team/banners/light.gif'
    }
];

var updateTeamMemberCard = () => {
    var teamMemberCardInformation = {
        username: document.getElementById('teamMemberCardName'),
        discriminator: document.getElementById('teamMemberCardTag'),
        title: document.getElementById('teamMemberCardTitle'),
        description: document.getElementById('teamMemberCardDescription'),
        role: document.getElementById('teamMemberCardRole'),
        avatar: document.getElementById('teamMemberCardAvatar'),
        banner: document.getElementById('teamMemberCardBanner')
    };
    
    Object.keys(teamMemberArray[currentMember]).forEach((teamMemberInformation) => {
        var teamMemberObject = teamMemberArray[currentMember];
        if (!teamMemberObject) return;

        switch(teamMemberInformation) {
            case 'username':
                teamMemberCardInformation[teamMemberInformation].innerHTML = `${teamMemberObject.username}<span class="teamMemberCardTag">#${teamMemberObject.discriminator}</span>`;
                break;
            case 'discriminator':
                break;
            case 'avatar':
                teamMemberCardInformation[teamMemberInformation].setAttribute('src', teamMemberObject.avatar);
                break;
            case 'banner':
                teamMemberCardInformation[teamMemberInformation].setAttribute('style', `background-image: url(${teamMemberObject.banner});`);
                break;
            default:
                if (teamMemberInformation == 'twemoji') return;
                teamMemberCardInformation[teamMemberInformation].innerHTML = teamMemberObject[teamMemberInformation];

                var scriptTags = teamMemberCardInformation[teamMemberInformation].getElementsByTagName("script");   
                for(var i = 0; i < scriptTags.length; i++) {  
                    eval(scriptTags[i].text);  
                }  
                break;
        }

        if (teamMemberObject.twemoji) twemoji.parse(document.body, { folder: 'svg', ext: '.svg' });
    });
};

var currentMember = -1;
var cycleTeamMember = (reverse = false) => {
    var newCurrentMember = (reverse ? currentMember - 1 : currentMember + 1);

    if (teamMemberArray[newCurrentMember]) {
        currentMember = newCurrentMember;
        updateTeamMemberCard();
    } else {
        if (reverse) {
            currentMember = teamMemberArray.length;
            updateTeamMemberCard();
        } else {
            currentMember = 0;
            updateTeamMemberCard();
        }
    };
};
cycleTeamMember();



/*==================== SCROLLREVEAL ====================*/

const sr = ScrollReveal({
    distance: '60px',
    duration: '2600',
    // reset: true,
})

sr.reveal(`.data`,{
    origin: 'top',
    interval: 50,
})



sr.reveal(`.featureContainerImage.ar, .featureContainerText.ar`,{
    origin: 'left',
})
sr.reveal(`.featureContainerImage.al, .featureContainerText.al`,{
    origin: 'right',
})

sr.reveal(`.teamMemberCard, .sectionCenter`,{
    origin: 'top',
    interval: 50,
})

sr.reveal(`.arrowRight, .arrowLeft`,{
    origin: 'top', 
})

sr.reveal(`.arrowContainer`,{
    origin: 'top', 
})

sr.reveal(`.footer-container`,{
    origin: 'top', 
    interval: 90,
})
