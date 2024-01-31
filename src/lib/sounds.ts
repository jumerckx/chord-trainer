import { Howl } from 'howler';

enum Notes {
    A0 = 0,
    B0,
    C0,
    C0sharp,
    D0,
    D0sharp,
    E0,
    F0,
    F0sharp,
    G0,
    G0sharp,
    A1,
    A1sharp,
    B1,
    C1,
    C1sharp,
    D1,
    D1sharp,
    E1,
    F1sharp,
    F1,
    G1,
    G1sharp,
    A2,
    A2sharp,
    B2,
    C2,
    __LENGTH
}

const paths = [
    "/samples/220-A.mp3",
    "/samples/246-B.mp3",
    "/samples/261-C.mp3",
    "/samples/277-C-sharp.mp3",
    "/samples/293-D.mp3",
    "/samples/311-D-sharp.mp3",
    "/samples/329-E.mp3",
    "/samples/349-F.mp3",
    "/samples/369F-sharp.mp3",
    "/samples/391-G.mp3",
    "/samples/415-G-sharp.mp3",
    "/samples/440-A.mp3",
    "/samples/466-A-sharp.mp3",
    "/samples/495-B.mp3",
    "/samples/523-C.mp3",
    "/samples/545-C-sharp.mp3",
    "/samples/587-D.mp3",
    "/samples/622-D-sharp.mp3",
    "/samples/659-E.mp3",
    "/samples/698-F-sharp.mp3",
    "/samples/698-F.mp3",
    "/samples/783-G.mp3",
    "/samples/830-G-sharp.mp3",
    "/samples/880-A.mp3",
    "/samples/932-A-sharp.mp3",
    "/samples/987-B.mp3",
    "/samples/1046-C.mp3",
]

const sounds = paths.map((path, i) => {
    return new Howl({
        src: [path],
        volume: 0.9,
        // html5: true
    });
});

const play = (note: Notes) => sounds[note].play("__default", false);

export {Notes, play};
