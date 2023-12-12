export function renderAudio(playlist) {
    const audioElement = document.createElement("audio")
    audioElement.src = playlist.fileUrl
    audioElement.volume = .2
    return audioElement
}

export function renderCustomAudio(audioElement) {
    const containerElement = document.createElement('div')
    containerElement.classList.add('containerElement')

    const playButton = createPlayButton(audioElement)

    const durationElement = document.createElement('div')
    durationElement.style.whiteSpace = 'nowrap'
    setInterval(() => {
        durationElement.innerText = `${getCurrentTime(audioElement)} / ${getDurationTime(audioElement)}`;
    }, 1000)

    const lineElement = document.createElement('div')
    lineElement.addEventListener('click', function (e) {
        const width = this.clientWidth
        const click = e.offsetX
        const duration = audioElement.duration
        console.log(width, click, duration)
        audioElement.currentTime = click / width * duration
    })

    const childLineElement = document.createElement('div')
    childLineElement.classList.add('childElement')
    audioElement.addEventListener('timeupdate', (e) => {
        const progressPercent = updateProgress(e)
        childLineElement.style.width = `${progressPercent}%`
    })
    lineElement.classList.add('lineElement')
    lineElement.appendChild(childLineElement)


    const volumeButton = createVolumeButton(audioElement)
    const speedElement = createDotsButton(audioElement)

    containerElement.append(playButton, durationElement, lineElement, volumeButton, speedElement)
    return containerElement
}

function createPlayButton(audioElement) {
    const playButtonElement = document.createElement('img')
    playButtonElement.src = 'assets/images/icon/play.png';
    playButtonElement.classList.add('pointer');

    playButtonElement.addEventListener('click', (e) => {

        document.querySelectorAll('audio').forEach(audio => audio.pause());

        // playButtonElement.classList.toggle('play');
        const current = e.currentTarget
        if (!current.classList.contains('play')) {
            document.querySelectorAll('.play').forEach(element => {
                element.classList.remove('play') //
                element.src = 'assets/images/icon/play.png';
            });
            current.classList.add('play')
            audioElement.play();
            playButtonElement.src = 'assets/images/icon/pause.png';
        } else if (current.classList.contains('play')) {
            current.classList.remove('play')
            audioElement.pause();
            playButtonElement.src = 'assets/images/icon/play.png';
        }

        console.log(current.classList.contains(('play')))
        // if (e.currentTarget.classList.contains('play')) {
        //     audioElement.play()
        //     playButtonElement.src = 'assets/images/icon/pause.png';
        // } else {
        //     audioElement.pause()
        //     playButtonElement.src = 'assets/images/icon/play.png';
        // }
    })
    return playButtonElement
}
function createVolumeButton(audioElement) {
    const volumeButton = document.createElement('img');
    volumeButton.classList.add('volume')
    const wrapper = document.createElement('div');
    wrapper.classList.add('volume__wrapper')
    const input = document.createElement('input');
    input.type = 'range'
    input.max = '1'
    input.min = '0'
    input.step = '0.1'
    input.oninput = () =>  audioElement.volume = input.value
    volumeButton.classList.add('pointer')
    volumeButton.src = 'assets/images/icon/volume.png';
    wrapper.append(volumeButton, input)
    return wrapper
}
function createDotsButton(audioElement) {
    const dotsButton = document.createElement('img');
    dotsButton.classList.add('pointer')
    dotsButton.src = 'assets/images/icon/dot.png';
    return dotsButton
}
function updateProgress(e) {
    const {duration, currentTime} = e.currentTarget
    return currentTime / duration  * 100
}

function getDurationTime(audio) {
    return `${Math.floor(audio.duration / 60)}:${Math.floor(audio.duration % 60).toString().padStart(2, '0')}`
}

function getCurrentTime(audio) {
    return `${Math.floor(audio.currentTime / 60)}:${Math.floor(audio.currentTime % 60).toString().padStart(2, '0')}`
}