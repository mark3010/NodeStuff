<script>
    let numbers = [1, 2, 3, 4];
    $: sum = numbers.reduce((t, n) => t + n, 0);

    function addNumber() {
            numbers = [...numbers, numbers.length +1]
        }
</script>

<p>{numbers.join(' + ')} = {sum}</p>
<button on:click={addNumber}>
	Add a number
</button>