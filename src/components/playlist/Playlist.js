import {renderAudio, renderCustomAudio} from "./audio/Audio.js";

export function renderPlaylist(playlist) {
    const wrapperElement = document.createElement('div');
    wrapperElement.classList.add('wrap');
    const playlistContainerElement = document.createElement('div');
    playlistContainerElement.classList.add('playlistContainerElement');

    const renderAllTracksElement = renderTracks(playlist)



    playlistContainerElement.append(renderPlaylistHeader(playlist), renderAllTracksElement);
    wrapperElement.append(playlistContainerElement);
    return wrapperElement
}

function renderPlaylistHeader(playlist) {
    const containerElement = document.createElement('div');
    containerElement.classList.add('playlistHeader')
    const infoElement = document.createElement('div');
    infoElement.append(renderPlaylistTitle(playlist))
    containerElement.append(renderPlaylistImageCover(playlist), infoElement)
    return containerElement
}
function renderPlaylistTitle(playlist) {
    const wrapper = document.createElement('div')
    const playlistTitleElement = document.createElement('h2');
    const lengthTrack = document.createElement('div')
    lengthTrack.style.color = 'grey'
    lengthTrack.style.fontSize = '13px'
    lengthTrack.style.margin = '13px 0'
    lengthTrack.innerText = `${playlist.tracks.length} tracks, ${Math.floor(playlist.info.totalTracksDurationInSeconds/60)}m ${playlist.info.totalTracksDurationInSeconds%60}s`
    playlistTitleElement.innerText = playlist.title;
    wrapper.append(playlistTitleElement, lengthTrack)
    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span')
        span.innerText = ` ${playlist.tracks[i].artistName} /`
        wrapper.append(span)
    }
    return wrapper
}
function renderPlaylistImageCover(playlist) {
    const playlistImageCoverElement = document.createElement('img');
    playlistImageCoverElement.src = playlist.coverImage;
    return playlistImageCoverElement
}
function renderTracks(playlist) {
    const tracksListElement = document.createElement('ul')
    for (let i = 0; i < playlist.tracks.length; i++) {
        const track = renderTrack(playlist.tracks[i])
        tracksListElement.append(track)
    }
    return tracksListElement
}
function renderTrack(playlist) {
    //контейнер
    const liElement = document.createElement('li')
    //левая половина
    const leftElement = document.createElement('div')
    //правая половина
    const rightElement = document.createElement('div')
    rightElement.classList.add('trackRight')
    //обложка трека
    const imageCoverElement = document.createElement('img')
    imageCoverElement.src = playlist.trackCover
    //исполнитель и название трека
    const infoElement = document.createElement('div')
    infoElement.classList.add('infoElement')
    console.log(playlist.isHot)
    if (playlist.isHot) {
        const Hot =  document.createElement('img')
        Hot.style.width = '15px'
        Hot.src = 'assets/images/icon/hot.png'
        infoElement.innerText = `${playlist.artistName} - ${playlist.title}`
        infoElement.append(Hot)
    } else {
        infoElement.innerText = `${playlist.artistName} - ${playlist.title}`
    }
    //проигрыватель
    const audioEl = renderAudio(playlist)
    //append
    leftElement.append(imageCoverElement)
    rightElement.append(infoElement, audioEl, renderCustomAudio(audioEl))
    liElement.append(leftElement, rightElement)

    return liElement
}