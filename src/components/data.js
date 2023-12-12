const playlist1 = {
    title: 'Hip-Hop Hits',
    coverImage: 'assets/images/hipHopHits/hipHopHitsCover.png',
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 733,

    },
    tracks: [
        {artistName: 'Eminem', trackCover: 'assets/images/hipHopHits/rapGods.png', title: 'Rap God', isHot: true, fileUrl: 'assets/music/Eminem_-_Rap_God.mp3',},
        {artistName: '50 cent', trackCover: 'assets/images/hipHopHits/inDaClub.png', title: 'In da Club', isHot: false, fileUrl: 'assets/music/indaclub.mp3',},
        {artistName: 'DMX', trackCover: 'assets/images/hipHopHits/dmx.png', title: "X Gon' Give It To Ya", isHot: true, fileUrl: 'assets/music/dmx.mp3',},
        {artistName: 'Eminem feat 50 Cent, Cashis, Lloyd Banks', trackCover: "assets/images/hipHopHits/youDontKnow.png", title: 'You Don\'t Know', isHot: false, fileUrl: 'assets/music/eminem50centothers.mp3',},
    ]
}

const playlist2 = {
    title: 'Rap Hits 1990s',
    coverImage: 'assets/images/rapHits/rapHitsCover.png',
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 931,

    },
    tracks: [
        {artistName: 'Public Enemy', trackCover: 'assets/images/rapHits/publickEnemy.png', title: 'Fight the Power', isHot: true, fileUrl: 'assets/music/public.mp3',},
        {artistName: 'Vanila Ice', trackCover: 'assets/images/rapHits/vanillaIce.png', title: 'Ice Ice Baby', isHot: true, fileUrl: 'assets/music/Vanilla_Ice_-_Ice_Ice_Baby.mp3',},
        {artistName: 'MC Hammer', trackCover: 'assets/images/rapHits/mcHammer.png', title: "You Can’t Touch This", isHot: false, fileUrl: 'assets/music/hammer.mp3',},
        {artistName: 'Brand Nubian', trackCover: "assets/images/rapHits/brand.png", title: 'Brand Nubian', isHot: false, fileUrl: 'assets/music/brand.mp3',},
    ]
}

const state = [playlist1, playlist2]
export function getState() {
    return state
}