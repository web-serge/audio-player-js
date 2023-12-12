//data
import {getState} from "./components/data.js";
import {renderHeader} from "./components/header/Header.js";
import {renderPlaylist} from "./components/playlist/Playlist.js";

//render
renderApp()

function renderApp() {
    const rootElement = document.querySelector('#root')

    const playList = getState()

    const bodyCont = document.createElement('div')
    bodyCont.classList.add('wrapper')
    bodyCont.style.display = 'flex'
    bodyCont.append(renderPlaylist(playList[0]), renderPlaylist(playList[1]))
    rootElement.append(renderHeader(), bodyCont)
}

