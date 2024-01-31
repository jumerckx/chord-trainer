<script lang="ts">
    import Piano from "$lib/Piano/Piano.svelte";
    import Play from "$lib/Play.svelte";
    import { Notes } from "$lib/sounds";
    import { fade } from "svelte/transition";

    const pickChord = () => {
        const shuffled = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16].sort(()=>{return 0.5 - Math.random()});
        return shuffled.slice(0, 3);
    }
    const next = () => {
        picked = pickChord();
        selected = [];
    }
    const checkSelected = (selected: Notes[]) => {
        if (selected.length == 3) {
            for (let i = 0; i < 3; i++) {
                if (!picked.includes(selected[i])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    let picked = pickChord();
    let selected : Notes[] = picked;
    let transitionEnded: Boolean = false;
</script>
<div>
    <h1>Chord</h1>
</div>
<Play notes={picked}/>
{#if checkSelected(selected)}
<div in:fade out:fade={{delay: 100}} style="text-align:center; margin-top:50px">
    <button on:transitionend={()=>transitionEnded=true} on:touchend={()=>{
        if (transitionEnded) {
            next();
        }
        transitionEnded = false;
        }}>
        NEXT
    </button>
</div>
{/if}
<Piano bind:selected={selected} isCorrect={checkSelected(selected)}/>
<style>
    :root {
        --text-color: #246a22;
    }
    div {
        text-align: center;
    }
    h1 {
        padding: 3px;
        display:inline-block; 
        color: var(--text-color);
        text-align: center;
        font-size: 3em;
        letter-spacing: 0.3ch;
        margin-top: 20px;
        margin-bottom: 100px;
        font-style: oblique;
        border: 3px solid var(--text-color);
    }
    button {
        user-select: none;
        background: rgb(91, 178, 77);
        font-size: 3em;
        color: var(--text-color);
        color: #e5f6d6;
        padding: 9px 15px;
        font-weight:bolder;
        font-family:sans-serif;
        border: 0;
        border-radius: 5px;
        box-shadow:
            0 10px 30px rgba(114, 255, 58, 0.473);
    }
    /* button pressed: */
    button:active {
        margin-top: 7px;
        background: rgb(91, 178, 77);
        box-shadow:
            0 5px 10px rgba(114, 255, 58, 0.473);
        transition: 0.2s;
    }
</style>
