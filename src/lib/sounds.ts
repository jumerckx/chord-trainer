import { Howl } from 'howler';
import { base } from '$app/paths';

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

const filenames = [
    "220-A.mp3",
    "246-B.mp3",
    "261-C.mp3",
    "277-C-sharp.mp3",
    "293-D.mp3",
    "311-D-sharp.mp3",
    "329-E.mp3",
    "349-F.mp3",
    "369F-sharp.mp3",
    "391-G.mp3",
    "415-G-sharp.mp3",
    "440-A.mp3",
    "466-A-sharp.mp3",
    "495-B.mp3",
    "523-C.mp3",
    "545-C-sharp.mp3",
    "587-D.mp3",
    "622-D-sharp.mp3",
    "659-E.mp3",
    "698-F-sharp.mp3",
    "698-F.mp3",
    "783-G.mp3",
    "830-G-sharp.mp3",
    "880-A.mp3",
    "932-A-sharp.mp3",
    "987-B.mp3",
    "1046-C.mp3",
]

const sounds = filenames.map((filename, i) => {
    return new Howl({
        src: [`${base}/samples/${filename}`],
        volume: 0.9,
    });
});

const play = (note: Notes) => sounds[note].play("__default", false);

export {Notes, play};
