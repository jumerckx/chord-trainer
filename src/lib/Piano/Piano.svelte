<script lang="ts">
    const isTouch = matchMedia("(hover: none)").matches;

    import { Notes, play } from "$lib/sounds";
    import Ear from "./Ear.svelte";
    export let selected: Notes[] = [];
    export let isCorrect: Boolean = false;
    const select_note = (note: Notes): void => {
        if (selected.includes(note)) {
            selected = selected.filter((n) => n != note);
        } else {
            selected.push(note);
        }
        selected = selected;
    };
    const notes = [
        { note: Notes.C1, c: "white c", text: "C", gridArea: "1 / 1 / 3 / 4" },
        {
            note: Notes.C1sharp,
            c: "black cs",
            text: "",
            gridArea: " 1 / 3 / 2 / 5",
        },
        { note: Notes.D1, c: "white d", text: "D", gridArea: " 1 / 4 / 3 / 7" },
        {
            note: Notes.D1sharp,
            c: "black ds",
            text: "",
            gridArea: "1 / 6 / 2 / 8",
        },
        {
            note: Notes.E1,
            c: "white e",
            text: "E",
            gridArea: "1 / 7 / 3 / 10",
        },
        {
            note: Notes.F1,
            c: "white f",
            text: "F",
            gridArea: " 1 / 10 / 3 / 13",
        },
        {
            note: Notes.F1sharp,
            c: "black fs",
            text: "",
            gridArea: " 1 / 12 / 2 / 14",
        },
        { note: Notes.G1, c: "white g", text: "G", gridArea: "1 / 13 / 3 / 16" },
        {
            note: Notes.G1sharp,
            c: "black gs",
            text: "",
            gridArea: " 1 / 15 / 2 / 17",
        },
        {
            note: Notes.A2,
            c: "white a",
            text: "A",
            gridArea: "1 / 16 / 3 / 19",
        },
        {
            note: Notes.A2sharp,
            c: "black as",
            text: "",
            gridArea: "1 / 18 / 2 / 20",
        },
        {
            note: Notes.B2,
            c: "white b",
            text: "B",
            gridArea: "1 / 19 / 3 / 22",
        },
    ];
    const getColor = (isCorrect: Boolean) =>
        isCorrect ? "rgba(91, 178, 77, 0.597)" : "#ffdc5144";
    const playSelected = () => {
        selected.forEach((note) => play(note));
    };
</script>

<div class="anchor">
    <button on:click={playSelected}>
        <Ear />
    </button>
    <div class="pianocontainer" style="--select-color: {getColor(isCorrect)}">
        {#each notes as { note, c, text, gridArea }}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                class={c}
                class:selected={selected.includes(note)}
                style="grid-area: {gridArea}"
                on:touchstart={() => play(note)}
                on:mousedown={() => !isTouch && play(note)}
                on:click={() => select_note(note)}
            >
                <span class="notename">{text}</span>
            </div>
        {/each}
    </div>
</div>

<style>
    :root {
        --number-of-whites: 7;
        --white-height: 12em;
    }
    .anchor {
        width:100%;
        position: absolute;
        bottom: 1px;
        text-align: right;
    }
    .pianocontainer {
        width: 100%;
        height: 12em;
        display: grid;
        grid-template-columns: repeat(21, 1fr);
        grid-template-rows: 55% 45%;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    button {
        background: WhiteSmoke;
        padding: 10px;
        color: #000;
        box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);

        width: 3em;
        height: 3em;
        margin: 20px;
        border: none;
        border-radius: 50%;
        /* background: none; */
    }
    /* button pressed: */
    button:active {
        background: #eee;
        box-shadow: none;
        transition: 0.1s;
    }

    .white {
        z-index: 1;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        border-left: 1px solid #bbb;
        border-bottom: 1px solid #bbb;
        border-radius: 0 0 5px 5px;
        box-shadow:
            -1px 0 0 rgba(255, 255, 255, 0.8) inset,
            0 0 5px #ccc inset,
            0 0 3px rgba(0, 0, 0, 0.2);
        background: linear-gradient(to bottom, #eee 0%, #fff 100%);
    }
    .white:active {
        border-top: 1px solid #777;
        border-left: 1px solid #999;
        border-bottom: 1px solid #999;
        box-shadow:
            2px 0 3px rgba(0, 0, 0, 0.1) inset,
            -5px 5px 20px rgba(0, 0, 0, 0.2) inset,
            0 0 3px rgba(0, 0, 0, 0.2);
        background: linear-gradient(to bottom, #fff 0%, #e9e9e9 100%);
    }
    .black {
        z-index: 2;
        border: 1px solid #000;
        border-radius: 0 0 3px 3px;
        box-shadow:
            -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
            0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset,
            0 2px 4px rgba(0, 0, 0, 0.5);
        background: linear-gradient(45deg, #222 0%, #555 100%);
    }
    .black:active {
        box-shadow:
            -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
            0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset,
            0 1px 2px rgba(0, 0, 0, 0.5);
        background: linear-gradient(to right, #444 0%, #222 100%);
    }
    .notename {
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: bolder;
        padding-bottom: 10px;
        color: rgba(139, 146, 136, 0.504);
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */        
    }

    .selected.white {
        background:
            repeating-linear-gradient(
                45deg,
                #00000000,
                #00000000 10px,
                var(--select-color) 10px,
                var(--select-color) 20px
                ),
            linear-gradient(to bottom, #eee 0%, #fff 100%);
    }

    .selected.black {
        background:
            repeating-linear-gradient(
                45deg,
                #00000000,
                #00000000 10px,
                var(--select-color) 10px,
                var(--select-color) 20px
                ),
            linear-gradient(45deg, #222 0%, #555 100%);
        transition: 0.7s;
    }

</style>
