<script lang="ts">
  import {play, Notes} from "./sounds";
  export let notes: Notes[];

  const playChord = () => {
    notes.forEach(note => play(note));
  }

</script>

<div>
  <button on:click={playChord}>
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
        clip-rule="evenodd"
      />
    </svg>
    <span style="font-weight:bolder;font-family:sans-serif">LISTEN</span>
  </button>
</div>

<style>
  div {
    text-align: center;
  }
  button {
    background: WhiteSmoke;
    color: #000;
    padding: 9px 15px;
    border: 0;
    border-radius: 5px;
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
  }
  /* button pressed: */
  button:active {
    background: #eee;
    box-shadow: none;
    transition: 0.1s;
  }
</style>
