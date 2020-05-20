function js_run() {
  var input_lyrics = document.getElementById("inp_lyrics");
  var input_prompt = document.getElementById("inp_prompt");
  var input_recontextualize = document.getElementById("inp_recontextualize");
  var input_near_rhymes = document.getElementById("inp_near_rhymes");
  if (input_lyrics.value.length == 0) {
    return;
  }
  if (input_prompt.value.length == 0) {
    return;
  }
  recontextualize = input_recontextualize.checked;
  use_near_rhymes = input_near_rhymes.checked;
  the_text = input_lyrics.value;
  prompt = input_prompt.value;
  // Call python
  (async function() {
    const result = await google.colab.kernel.invokeFunction(
      'notebook.python_run_hook', // The callback name.
      [prompt, the_text, use_near_rhymes, recontextualize], // The arguments.
      {}); // kwargs
    const res = result.data['application/json'];
    //document.querySelector("#output-area").appendChild(document.createTextNode(text.result));
  })();
}