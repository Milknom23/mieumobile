document.querySelectorAll('.add-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const product = btn.dataset.name;
    showPopup('cartPopup');
  });
});

// ฟังก์ชันโชว์ popup
function showPopup(id) {
  document.getElementById(id).classList.remove('hidden');
}
function hidePopup(id) {
  document.getElementById(id).classList.add('hidden');
}

// หลังปิด popup ตะกร้า แล้วเปิดจีบ
document.getElementById('popupConfirm').addEventListener('click', () => {
  hidePopup('cartPopup');
  showPopup('loverPopup');
});

// ตอบเลือก "รักสิ"
document.getElementById('yesLove').addEventListener('click', () => {
  hidePopup('loverPopup');
  document.getElementById('answerText').innerText = 'ขอบคุณนะ เค้าก็รักเธอมาตลอดเหมือนกัน';
  showPopup('answerPopup');
});

// ตอบเลือก "ไม่รัก"
document.getElementById('noLove').addEventListener('click', () => {
  hidePopup('loverPopup');
  document.getElementById('answerText').innerText = 'ไอ้อ้วน';
  showPopup('answerPopup');
});

// ปิด popup สุดท้าย
document.getElementById('answerOk').addEventListener('click', () => {
  hidePopup('answerPopup');
});