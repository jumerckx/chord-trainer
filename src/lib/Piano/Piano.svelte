<script lang="ts">
    const isTouch = matchMedia('(hover: none)').matches;

    import { Notes, play } from "$lib/sounds";
    import Ear from "./Ear.svelte";
    export let selected : Notes[] = [];
    export let isCorrect: Boolean = false;
    const select_note = (note: Notes): void => {
        if (selected.includes(note)) {
            selected = selected.filter(n => n != note);
        }
        else {
            selected.push(note);
        }
        selected = selected;
    }
    const notes = [
        {note: Notes.F0, c: "white f", text: "F"},
        {note: Notes.F0sharp, c: "black fs", text: ""},
        {note: Notes.G0, c: "white g", text: "G"},
        {note: Notes.G0sharp, c: "black gs", text: ""},
        {note: Notes.A1, c: "white a", text: "A"},
        {note: Notes.A1sharp, c: "black as", text: ""},
        {note: Notes.B1, c: "white b", text: "B"},
        {note: Notes.C1, c: "white c", text: "C"},
        {note: Notes.C1sharp, c: "black cs", text: ""},
        {note: Notes.D1, c: "white d", text: "D"},
        {note: Notes.D1sharp, c: "black ds", text: ""},
        {note: Notes.E1, c: "white e", text: "E"},
    ]
    const getColor = (isCorrect: Boolean) => isCorrect ? "rgba(91, 178, 77, 0.597)" : "#ffdc5144";
    const playSelected = () => {
        selected.forEach(note => play(note));
    }

</script>
<div>
    <button on:click={playSelected}>
        <Ear/>
    </button>
    
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <ul style="--select-color: {getColor(isCorrect)}" class="set">
        {#each notes as {note, c, text}}
            <li
            on:touchstart={()=>play(note)}
            on:mousedown={()=>!isTouch && play(note)}
            on:click={()=>select_note(note)}
            class:selected={selected.includes(note)} class={c}>
                <span class="notename">{text}</span>
            </li>
        {/each}
    </ul>
</div>

<style>
    :root {
        --number-of-whites: 7;
        --white-height: 12em;
    }
    div {
        position: absolute;
        bottom: 1px;
        text-align: right;
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

    ul {
        background-color: #eee;
        padding: 0;
        margin: 0;
        height: var(--white-height);
        /* position: absolute;
        bottom: 1px; */
    }

    li {
        margin: 0;
        padding: 0;
        list-style: none;
        position: relative;
        float: left;
        text-align: center;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    ul .white {
        height: var(--white-height);
        width: calc(100vw / (var(--number-of-whites) + 0.25));
        z-index: 1;
        border-left: 1px solid #bbb;
        border-bottom: 1px solid #bbb;
        border-radius: 0 0 5px 5px;
        box-shadow:
            -1px 0 0 rgba(255, 255, 255, 0.8) inset,
            0 0 5px #ccc inset,
            0 0 3px rgba(0, 0, 0, 0.2);
        background: linear-gradient(to bottom, #eee 0%, #fff 100%);
        /* color: rgba(91, 178, 77, 0.597) */
    }

    ul .white:active {
        border-top: 1px solid #777;
        border-left: 1px solid #999;
        border-bottom: 1px solid #999;
        box-shadow:
            2px 0 3px rgba(0, 0, 0, 0.1) inset,
            -5px 5px 20px rgba(0, 0, 0, 0.2) inset,
            0 0 3px rgba(0, 0, 0, 0.2);
        background: linear-gradient(to bottom, #fff 0%, #e9e9e9 100%);
    }

    ul .selected .white:active,
    ul .selected.white {
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
    
    ul .selected .black:active,
    ul .selected.black {
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

    .black {
        height: calc(var(--white-height) * 0.5);
        /* width: 2em; */
        width: calc(2*100vw / (3*var(--number-of-whites) + 0.2));
        margin: 0 0 0 calc(-2*50vw / (3*var(--number-of-whites) + 0.25));
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

    .g,
    .a,
    .b,
    .d,
    .e {
        margin: 0 0 0 calc(-2*50vw / (3*var(--number-of-whites) + 0.25));
    }

    .notename {
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: bolder;
        padding-bottom: 10px;
        color: rgba(139, 146, 136, 0.504);
    }
</style>
