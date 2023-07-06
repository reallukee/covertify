function setLanguage()
{
    
}

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
    
    coverPreview();
}

function coverBackgroundColor()
{
    var coverBackground = document.getElementById('cover');
    var coverBackgroundColor = document.getElementById('coverBackgroundColor');

    coverBackground.style.background = `var(${coverBackgroundColor.value})`;

    coverPreview();
}

function coverBackgroundCustomColor()
{
    var coverBackground = document.getElementById('cover');
    var coverBackgroundCustomColor = document.getElementById('coverBackgroundCustomColor');
    var coverBackgroundColor = document.getElementById('coverBackgroundColor');

    coverBackground.style.background = coverBackgroundCustomColor.value;

    coverBackgroundColor.value = 'custom';
    
    coverPreview();
}

function coverBackgroundGradient()
{
    var coverBackground = document.getElementById('cover');
    var coverBackgroundGradient = document.getElementById('coverBackgroundGradient');
    var coverBackgroundFirstColor = document.getElementById('coverBackgroundFirstColor');
    var coverBackgroundSecondColor = document.getElementById('coverBackgroundSecondColor');
    var coverBackgroundFirstStop = document.getElementById('coverBackgroundFirstStop');
    var coverBackgroundSecondStop = document.getElementById('coverBackgroundSecondStop');

    if (coverBackgroundGradient.value == 'circle')
    {
        coverBackground.style.background = 'radial-gradient(' + coverBackgroundGradient.value + ', ' + coverBackgroundFirstColor.value + ' ' + coverBackgroundFirstStop.value + '%, ' + coverBackgroundSecondColor.value + ' ' + coverBackgroundSecondStop.value + '%)';
    }
    else
    {
        coverBackground.style.background = 'linear-gradient(' + coverBackgroundGradient.value + ', ' + coverBackgroundFirstColor.value + ' ' + coverBackgroundFirstStop.value + '%, ' + coverBackgroundSecondColor.value + ' ' + coverBackgroundSecondStop.value + '%)';
    }
    
    coverPreview();
}



function coverTitleValue()
{
    var coverTitle = document.getElementById('coverTitle');
    var coverTitleValue = document.getElementById('coverTitleValue');

    coverTitle.innerText = coverTitleValue.value;

    coverTitlePosition();
    coverPreview();
}

function coverTitleColor()
{
    var coverTitle = document.getElementById('coverTitle');
    var coverTitleColor = document.getElementById('coverTitleColor');

    coverTitle.style.color = `var(${coverTitleColor.value})`;

    coverPreview();
}

function coverTitleCustomColor()
{
    var coverTitle = document.getElementById('coverTitle');
    var coverTitleCustomColor = document.getElementById('coverTitleCustomColor');
    var coverTitleColor = document.getElementById('coverTitleColor');

    coverTitle.style.color = coverTitleCustomColor.value;

    coverTitleColor.value = 'custom';

    coverPreview();
}

function coverTitlePosition()
{
    var cover = document.getElementById('cover');
    var coverTitle = document.getElementById('coverTitle');
    var coverTitleMargin = document.getElementById('coverTitleMargin');
    var coverTitlePosition = document.getElementById('coverTitlePosition');
    var _coverTitlePositionX = document.getElementById('coverTitlePositionX');
    var _coverTitlePositionY = document.getElementById('coverTitlePositionY');

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

        case '3apple':
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

        case 'custom':
            _coverTitlePositionX.disabled = false;
            _coverTitlePositionY.disabled = false;

            //coverTitlePositionX();
            //coverTitlePositionY();

            return;
            break;

        default:
            break;
    }

    _coverTitlePositionX.disabled = true;
    _coverTitlePositionY.disabled = true;

    coverPreview();
}

function coverTitlePositionX()
{
    var coverTitle = document.getElementById('coverTitle');
    var coverTitlePosition = document.getElementById('coverTitlePosition');
    var coverTitlePositionX = document.getElementById('coverTitlePositionX');

    coverTitle.style.right = 'unset';
    coverTitle.style.left = coverTitlePositionX.value + 'px';

    if (coverTitlePosition.value != 'custom')
    {
        coverTitlePosition.value = 'custom';
    }

    coverPreview();
}

function coverTitlePositionY()
{
    var coverTitle = document.getElementById('coverTitle');
    var coverTitlePosition = document.getElementById('coverTitlePosition');
    var coverTitlePositionY = document.getElementById('coverTitlePositionY');

    coverTitle.style.bottom = 'unset';
    coverTitle.style.top = coverTitlePositionY.value + 'px';

    if (coverTitlePosition.value != 'custom')
    {
        coverTitlePosition.value = 'custom';
    }

    coverPreview();
}

function coverTitleCharsSpace()
{
    var coverTitle = document.getElementById('coverTitle');
    var coverTitleCharsSpace = document.getElementById('coverTitleCharsSpace');

    coverTitle.style.letterSpacing = coverTitleCharsSpace.value + 'px';

    coverTitlePosition();
    coverPreview();
}

function coverTitleLinesSpace()
{
    var coverTitle = document.getElementById('coverTitle');
    var coverTitleLinesSpace = document.getElementById('coverTitleLinesSpace');

    coverTitle.style.lineHeight = coverTitleLinesSpace.value + 'px';

    coverTitlePosition();
    coverPreview();
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
    coverPreview();
}

function coverTitleSize()
{
    var coverTitle = document.getElementById('coverTitle');
    var coverTitleSize = document.getElementById('coverTitleSize');

    coverTitle.style.fontSize = `${coverTitleSize.value}rem`;

    coverTitlePosition();
    coverPreview();
}



function coverCovertifyShow()
{
    var coverCovertify = document.getElementById('coverCovertify');
    var coverCovertifyShow = document.getElementById('coverCovertifyShow');
    
    coverCovertify.hidden = !coverCovertifyShow.checked;
    
    coverPreview();
}

function coverCovertifyColor()
{
    var coverCovertify = document.getElementById('coverCovertify');
    var coverCovertifyColor = document.getElementById('coverCovertifyColor');

    coverCovertify.src = coverCovertifyColor.value;
    
    coverPreview();
}

function coverCovertifyPosition()
{
    var cover = document.getElementById('cover');
    var coverCovertify = document.getElementById('coverCovertify');
    var coverCovertifyMargin = document.getElementById('coverCovertifyMargin');
    var coverCovertifyPosition = document.getElementById('coverCovertifyPosition');
    var _coverCovertifyPositionX = document.getElementById('coverCovertifyPositionX');
    var _coverCovertifyPositionY = document.getElementById('coverCovertifyPositionY');

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

        case 'custom':
            _coverCovertifyPositionX.disabled = false;
            _coverCovertifyPositionY.disabled = false;

            //coverCovertifyPositionX();
            //coverCovertifyPositionY();

            return;
            break;

        default:
            break;
    }

    _coverCovertifyPositionX.disabled = true;
    _coverCovertifyPositionY.disabled = true;
    
    coverPreview();
}

function coverCovertifyPositionX()
{
    var coverCovertify = document.getElementById('coverCovertify');
    var coverCovertifyPosition = document.getElementById('coverCovertifyPosition');
    var coverCovertifyPositionX = document.getElementById('coverCovertifyPositionX');

    coverCovertify.style.right = 'unset';
    coverCovertify.style.left = coverCovertifyPositionX.value + 'px';
    
    if (coverCovertifyPosition.value != 'custom')
    {
        coverCovertifyPosition.value = 'custom';
    }

    coverPreview();
}

function coverCovertifyPositionY()
{
    var coverCovertify = document.getElementById('coverCovertify');
    var coverCovertifyPosition = document.getElementById('coverCovertifyPosition');
    var coverCovertifyPositionY = document.getElementById('coverCovertifyPositionY');

    coverCovertify.style.bottom = 'unset';
    coverCovertify.style.top = coverCovertifyPositionY.value + 'px';
    
    if (coverCovertifyPosition.value != 'custom')
    {
        coverCovertifyPosition.value = 'custom';
    }

    coverPreview();
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
    coverPreview();
}

function coverCovertifySize()
{
    var coverCovertify = document.getElementById('coverCovertify');
    var coverCovertifySize = document.getElementById('coverCovertifySize');

    coverCovertify.style.height = coverCovertifySize.value + 'px';

    coverCovertifyPosition();
    coverPreview();
}



function downloadCover()
{
    var cover = document.getElementById('cover');
    var coverName = document.getElementById('coverName');

    html2canvas(cover, { allowTaint: true }).then(function (canvas) {
        var link = document.createElement('a');

        document.body.appendChild(link);

        if (coverName.value == null || coverName.value == "")
        {
            link.download = 'untitled.png';
        }
        else
        {
            link.download = `${coverName.value}.png`;
        }

        link.href = canvas.toDataURL();
        link.target = '_blank';
        link.click();

        document.body.removeChild(link);
    });
}

function coverPreview()
{
    var cover = document.getElementById('cover');
    var playlistCover = document.getElementById('playlistCover');

    html2canvas(cover, { allowTaint: true }).then(function (canvas) {
        playlistCover.src = canvas.toDataURL();
    });
}



function switchPreview()
{
    var coverPreview = document.getElementById('coverPreview');
    var playlistPreview = document.getElementById('playlistPreview');
    var coverPreviewActive = document.getElementById('coverPreviewActive');
    var playlistPreviewActive = document.getElementById('playlistPreviewActive');

    if (!coverPreviewActive.checked)
    {
        coverPreview.hidden = true;
        playlistPreview.hidden = false;
    }

    if (!playlistPreviewActive.checked)
    {
        coverPreview.hidden = false;
        playlistPreview.hidden = true;
    }
}

function switchBackground()
{
    var picture = document.getElementById('picture');
    var color = document.getElementById('color');
    var gradient = document.getElementById('gradient');
}



function defaultProject()
{
    window.location.reload();
}

function importProject()
{

}

function exportProject()
{

}
