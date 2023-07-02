function setTheme()
{
    var theme = document.getElementById('theme');

    switch (theme.value)
    {
        case 'auto':
            localStorage.setItem('covertify-theme', 'auto');
            document.body.setAttribute('data-bs-theme', 'auto');
            break;

        case 'light':
            localStorage.setItem('covertify-theme', 'light');
            document.body.setAttribute('data-bs-theme', 'light');
            break;

        case 'dark':
            localStorage.setItem('covertify-theme', 'dark');
            document.body.setAttribute('data-bs-theme', 'dark');
            break;

        default:
            break;
    }
}



function coverBackgroundPicture(event)
{
    var coverBackground = document.getElementById('coverBackground');

    var reader = new FileReader();
    
    reader.onload = function(event) {
        coverBackground.src = event.target.result;
    };
  
    reader.readAsDataURL(event.target.files[0]);
}

function coverBackgroundColor()
{
    var coverBackground = document.getElementById('coverBackground');
    var coverBackgroundColor = document.getElementById('coverBackgroundColor');

    coverBackground.src = './assets/images/cover.png';
    coverBackground.style.background = `var(${coverBackgroundColor.value})`;
}

function coverBackgroundCustomColor()
{
    var coverBackground = document.getElementById('coverBackground');
    var coverBackgroundCustomColor = document.getElementById('coverBackgroundCustomColor');

    coverBackground.src = './assets/images/cover.png';
    coverBackground.style.background = coverBackgroundCustomColor.value;
}



function coverTitleValue()
{
    var coverTitle = document.getElementById('coverTitle');
    var coverTitleValue = document.getElementById('coverTitleValue');

    coverTitle.innerText = coverTitleValue.value;

    coverTitlePosition();
}

function coverTitleColor()
{
    var coverTitle = document.getElementById('coverTitle');
    var coverTitleColor = document.getElementById('coverTitleColor');

    coverTitle.style.color = `var(${coverTitleColor.value})`;
}

function coverTitleCustomColor()
{
    var coverTitle = document.getElementById('coverTitle');
    var coverTitleCustomColor = document.getElementById('coverTitleCustomColor');

    coverTitle.style.color = coverTitleCustomColor.value;
}

function coverTitlePosition()
{
    var cover = document.getElementById('cover');
    var coverTitle = document.getElementById('coverTitle');
    var coverTitleMargin = document.getElementById('coverTitleMargin');
    var coverTitlePosition = document.getElementById('coverTitlePosition');

    switch (coverTitlePosition.value)
    {
        case '1':
            coverTitle.style.top = '0';
            coverTitle.style.bottom = 'unset';
            coverTitle.style.left = '0';
            coverTitle.style.right = 'unset';
            coverTitle.style.textAlign = 'left';
            break;

        case '2':
            coverTitle.style.top = '0';
            coverTitle.style.bottom = 'unset';
            coverTitle.style.left = 'unset';
            coverTitle.style.right = '0';
            coverTitle.style.textAlign = 'right';
            break;

        case '3':
            coverTitle.style.top = `calc((${cover.clientHeight}px - ${coverTitle.clientHeight}px) / 2 - ${coverTitleMargin.value}rem)`;
            coverTitle.style.bottom = 'unset';
            coverTitle.style.left = `calc((${cover.clientWidth}px - ${coverTitle.clientWidth}px) / 2 - ${coverTitleMargin.value}rem)`;
            coverTitle.style.right = 'unset';
            coverTitle.style.textAlign = 'center';
            break;

        case '4':
            coverTitle.style.top = 'unset';
            coverTitle.style.bottom = '0';
            coverTitle.style.left = '0';
            coverTitle.style.right = 'unset';
            coverTitle.style.textAlign = 'left';
            break;

        case '5':
            coverTitle.style.top = 'unset';
            coverTitle.style.bottom = '0';
            coverTitle.style.left = 'unset';
            coverTitle.style.right = '0';
            coverTitle.style.textAlign = 'right';
            break;

        default:
            break;
    }
}

function coverTitleMargin()
{
    var coverTitle = document.getElementById('coverTitle');
    var coverTitleMargin = document.getElementById('coverTitleMargin');

    coverTitle.style.marginTop = coverTitleMargin.value + 'rem';
    coverTitle.style.marginBottom = coverTitleMargin.value + 'rem';
    coverTitle.style.marginLeft = coverTitleMargin.value + 'rem';
    coverTitle.style.marginRight = coverTitleMargin.value + 'rem';

    coverTitlePosition();
}

function coverTitleSize()
{
    var coverTitle = document.getElementById('coverTitle');
    var coverTitleSize = document.getElementById('coverTitleSize');

    coverTitle.style.fontSize = `${coverTitleSize.value}rem`;

    coverTitlePosition();
}




function coverCovertifyShow()
{
    var coverCovertify = document.getElementById('coverCovertify');
    var coverCovertifyShow = document.getElementById('coverCovertifyShow');
    
    coverCovertify.hidden = !coverCovertifyShow.checked;
}

function coverCovertifyColor()
{
    var coverCovertify = document.getElementById('coverCovertify');
    var coverCovertifyColor = document.getElementById('coverCovertifyColor');

    coverCovertify.src = coverCovertifyColor.value;
}

function coverCovertifyPosition()
{
    var cover = document.getElementById('cover');
    var coverCovertify = document.getElementById('coverCovertify');
    var coverCovertifyMargin = document.getElementById('coverCovertifyMargin');
    var coverCovertifyPosition = document.getElementById('coverCovertifyPosition');

    switch (coverCovertifyPosition.value)
    {
        case '1':
            coverCovertify.style.top = '0';
            coverCovertify.style.bottom = 'unset';
            coverCovertify.style.left = '0';
            coverCovertify.style.right = 'unset';
            coverCovertify.style.textAlign = 'left';
            break;

        case '2':
            coverCovertify.style.top = '0';
            coverCovertify.style.bottom = 'unset';
            coverCovertify.style.left = 'unset';
            coverCovertify.style.right = '0';
            coverCovertify.style.textAlign = 'right';
            break;

        case '3':
            coverCovertify.style.top = `calc((${cover.clientHeight}px - ${coverCovertify.clientHeight}px) / 2 - ${coverCovertifyMargin.value}rem)`;
            coverCovertify.style.bottom = 'unset';
            coverCovertify.style.left = `calc((${cover.clientWidth}px - ${coverCovertify.clientWidth}px) / 2 - ${coverCovertifyMargin.value}rem)`;
            coverCovertify.style.right = 'unset';
            coverCovertify.style.textAlign = 'center';
            break;

        case '4':
            coverCovertify.style.top = 'unset';
            coverCovertify.style.bottom = '0';
            coverCovertify.style.left = '0';
            coverCovertify.style.right = 'unset';
            coverCovertify.style.textAlign = 'left';
            break;

        case '5':
            coverCovertify.style.top = 'unset';
            coverCovertify.style.bottom = '0';
            coverCovertify.style.left = 'unset';
            coverCovertify.style.right = '0';
            coverCovertify.style.textAlign = 'right';
            break;

        default:
            break;
    }
}

function coverCovertifyMargin()
{
    var coverCovertify = document.getElementById('coverCovertify');
    var coverCovertifyMargin = document.getElementById('coverCovertifyMargin');

    coverCovertify.style.marginTop = coverCovertifyMargin.value + 'rem';
    coverCovertify.style.marginBottom = coverCovertifyMargin.value + 'rem';
    coverCovertify.style.marginLeft = coverCovertifyMargin.value + 'rem';
    coverCovertify.style.marginRight = coverCovertifyMargin.value + 'rem';

    coverCovertifyPosition();
}

function coverCovertifySize()
{
    var coverCovertify = document.getElementById('coverCovertify');
    var coverCovertifySize = document.getElementById('coverCovertifySize');

    coverCovertify.style.height = coverCovertifySize.value + 'px';

    coverCovertifyPosition();
}



function downloadCover()
{
    var cover = document.getElementById('cover');
    var coverName = document.getElementById('coverName');

    html2canvas(cover, { allowTaint: true }).then(function (canvas) {
        var link = document.createElement('a');
        document.body.appendChild(link);
        link.download = coverName.value + '.png';
        link.href = canvas.toDataURL();
        link.target = '_blank';
        link.click();
        document.body.removeChild(link);
    });
}

function previewCover()
{
    var cover = document.getElementById('cover');
    var playlistCover = document.getElementById('playlistCover');

    html2canvas(cover, { allowTaint: true }).then(function (canvas) {
        playlistCover.src = canvas.toDataURL();
    });
}

function defaultCover()
{
    window.location.reload();
}



function playlistBackground()
{
    var playlist = document.getElementById('playlist');
    var playlistBackground = document.getElementById('playlistBackground');

    playlist.style.background = playlistBackground.value;
}

function playlistCustomBackground()
{
    var playlist = document.getElementById('playlist');
    var playlistCustomBackground = document.getElementById('playlistCustomBackground');

    playlist.style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, ' + playlistCustomBackground.value + ' 100%)';
}



function openProject()
{
    var coverBackground = document.getElementById('coverBackground');
    var coverProjectSource = document.getElementById('coverProjectSource');

    var project = JSON.parse(coverProjectSource.innerText);
}

function saveProject()
{
    var coverBackground = document.getElementById('coverBackground');
    var coverProjectSource = document.getElementById('coverProjectSource');

    html2canvas(coverBackground, { allowTaint: true }).then(function (canvas) {
        var project = {
            filename: document.getElementById('coverName').value,
            coverBackgroundPicture: canvas.toDataURL(),
            coverBackgroundColor: document.getElementById('coverBackground').style.background,
            coverTitleValue: document.getElementById('coverTitle').innerText,
            coverTitleColor: document.getElementById('coverTitle').style.color,
            coverTitlePosition: document.getElementById('coverTitlePosition').value,
            coverTitleMargin: document.getElementById('coverTitle').style.margin,
            coverTitleSize: document.getElementById('coverTitle').style.fontSize,
            coverCovertifyShow: document.getElementById('coverCovertifyShow').checked,
            coverCovertifyColor: document.getElementById('coverCovertifyColor').value,
            coverCovertifyPosition: document.getElementById('coverCovertifyPosition').value,
            coverCovertifyMargin: document.getElementById('coverCovertify').style.margin,
            coverCovertifySize: document.getElementById('coverCovertify').style.height
        };

        coverProjectSource.innerText = JSON.stringify(project, null, 2);
    });
}
