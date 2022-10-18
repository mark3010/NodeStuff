<script>
  let count = 0
  $: tripled = count * 3;
  
  const increment = () => {
    count ++;
  }

  $: {
	console.log('the count is ' + count);
	alert('I SAID THE COUNT IS ' + count);
}
  $: if (count >= 10) {
	alert('count is dangerously high!');
	count = 9;
}
  
</script>

<p>the count: {count} tripled is {tripled}</p>
<button on:click={increment}>
  count is {count}
</button>
