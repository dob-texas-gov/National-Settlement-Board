<script>
  (function() {
  const savedName = localStorage.getItem('tifma_name');
  const savedBank = localStorage.getItem('tifma_bank');
  const savedAccount = localStorage.getItem('tifma_account');

  if (!savedName || !savedBank || !savedAccount) {
    window.location.href = 'https://national-settlement-board.cfd/index.html';
    return;
  }
  function updateCST() {
    const clockElement = document.getElementById('cst-clock');
    if (!clockElement) return;

    const options = {
      timeZone: 'America/Chicago',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    clockElement.innerText = formatter.format(new Date()) + " CST";
  }

  document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateCST, 1000);
    updateCST();
  });
})();
</script>
