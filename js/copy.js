function copy(e) {
    let transfer = document.createElement('input');
    document.body.appendChild(transfer);
    transfer.value = target.value;  // 这里表示想要复制的内容
    transfer.focus();
    transfer.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
    }
    transfer.blur();
    console.log('复制成功');
    document.body.removeChild(transfer);
    
}
​
$('#copyBtn').addEventListener('click', copy);