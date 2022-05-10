const keyboard = document.createElement('div');
keyboard.className = "wrapper";
keyboard.innerHTML = `
<textarea class="textarea" rows="5" cols="33" autofocus></textarea>
<div class="keyboard">
  <div class="keyboard__row">
    <div>
      <span class="eng" id="chackButton">
        <span class="keyboard__key span backquote">&#96;</span>
        <span class="keyboard__key spanHidden backquote hidden">&#126</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span backquote">ё</span>
        <span class="keyboard__key spanHidden backquote hidden">Ё</span>
      </span>
    </div>
    <div>
      <span class="keyboard__key span">1</span>
      <span class="keyboard__key spanHidden hidden">&#33</span>
    </div>
    <div>
      <span class="keyboard__key span">2</span>
      <span class="keyboard__key spanHidden hidden">&#64</span>
    </div>
    <div>
      <span class="keyboard__key span">3</span>
      <span class="keyboard__key spanHidden hidden">&#35</span>
    </div>
    <div>
      <span class="keyboard__key span">4</span>
      <span class="keyboard__key spanHidden hidden">&#36</span>
    </div>
    <div>
      <span class="keyboard__key span">5</span>
      <span class="keyboard__key spanHidden hidden">&#37</span>
    </div>
    <div>
      <span class="keyboard__key span">6</span>
      <span class="keyboard__key spanHidden hidden">&#94</span>
    </div>
    <div>
      <span class="keyboard__key span">7</span>
      <span class="keyboard__key spanHidden hidden">&#38</span>
    </div>
    <div>
      <span class="keyboard__key span">8</span>
      <span class="keyboard__key spanHidden hidden">&#42</span>
    </div>
    <div>
      <span class="keyboard__key span">9</span>
      <span class="keyboard__key spanHidden hidden">&#40</span>
    </div>
    <div>
      <span class="keyboard__key span">0</span>
      <span class="keyboard__key spanHidden hidden">&#41</span>
    </div>
    <div>
      <span class="keyboard__key span">-</span>
      <span class="keyboard__key spanHidden hidden">&#95</span>
    </div>
    <div>
      <span class="keyboard__key span">&#61</span>
      <span class="keyboard__key spanHidden hidden">&#43</span>
    </div>
    <div class="keyboard__key backspace">Backspace</div>
  </div>
  <div class="keyboard__row">
    <div class="keyboard__key tab">Tab</div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">q</span>
        <span class="keyboard__key spanHidden hidden">Q</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">й</span>
        <span class="keyboard__key spanHidden hidden">Й</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">w</span>
        <span class="keyboard__key spanHidden hidden">W</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">ц</span>
        <span class="keyboard__key spanHidden hidden">Ц</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">e</span>
        <span class="keyboard__key spanHidden hidden">E</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">у</span>
        <span class="keyboard__key spanHidden hidden">У</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">r</span>
        <span class="keyboard__key spanHidden hidden">R</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">к</span>
        <span class="keyboard__key spanHidden hidden">К</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">t</span>
        <span class="keyboard__key spanHidden hidden">T</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">е</span>
        <span class="keyboard__key spanHidden hidden">Е</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">y</span>
        <span class="keyboard__key spanHidden hidden">Y</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">н</span>
        <span class="keyboard__key spanHidden hidden">Н</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">u</span>
        <span class="keyboard__key spanHidden hidden">U</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">г</span>
        <span class="keyboard__key spanHidden hidden">Г</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">i</span>
        <span class="keyboard__key spanHidden hidden">I</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">ш</span>
        <span class="keyboard__key spanHidden hidden">Ш</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">o</span>
        <span class="keyboard__key spanHidden hidden">O</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">щ</span>
        <span class="keyboard__key spanHidden hidden">Щ</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">p</span>
        <span class="keyboard__key spanHidden hidden">P</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">з</span>
        <span class="keyboard__key spanHidden hidden">З</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span">&#91</span>
        <span class="keyboard__key spanHidden hidden">&#123</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">х</span>
        <span class="keyboard__key spanHidden hidden">Х</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span">&#93</span>
        <span class="keyboard__key spanHidden hidden">&#125</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">ъ</span>
        <span class="keyboard__key spanHidden hidden">Ъ</span>
      </span>
    </div>
    <div>
      <span class="keyboard__key span">&#92</span>
      <span class="keyboard__key spanHidden hidden">&#124</span>
    </div>
    <div class="keyboard__key delete">DEL</div>
  </div>
  <div class="keyboard__row">
    <div class="keyboard__key caps-lock">Caps Lock</div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">a</span>
        <span class="keyboard__key spanHidden hidden">A</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">ф</span>
        <span class="keyboard__key spanHidden hidden">Ф</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">s</span>
        <span class="keyboard__key spanHidden hidden">S</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">ы</span>
        <span class="keyboard__key spanHidden hidden">Ы</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">d</span>
        <span class="keyboard__key spanHidden hidden">D</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">в</span>
        <span class="keyboard__key spanHidden hidden">В</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">f</span>
        <span class="keyboard__key spanHidden hidden">F</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">а</span>
        <span class="keyboard__key spanHidden hidden">А</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">g</span>
        <span class="keyboard__key spanHidden hidden">G</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">п</span>
        <span class="keyboard__key spanHidden hidden">П</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">h</span>
        <span class="keyboard__key spanHidden hidden">H</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">р</span>
        <span class="keyboard__key spanHidden hidden">Р</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">j</span>
        <span class="keyboard__key spanHidden hidden">J</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">о</span>
        <span class="keyboard__key spanHidden hidden">О</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">k</span>
        <span class="keyboard__key spanHidden hidden">K</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">л</span>
        <span class="keyboard__key spanHidden hidden">Л</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">l</span>
        <span class="keyboard__key spanHidden hidden">L</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">д</span>
        <span class="keyboard__key spanHidden hidden">Д</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span">;</span>
        <span class="keyboard__key spanHidden hidden">&#58</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">ж</span>
        <span class="keyboard__key spanHidden hidden">Ж</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span">&#39</span>
        <span class="keyboard__key spanHidden hidden">"</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">э</span>
        <span class="keyboard__key spanHidden hidden">Э</span>
      </span>
    </div>
    <div class="keyboard__key enter">ENTER</div>
  </div>
  <div class="keyboard__row">
    <div class="keyboard__key shift-left" id="shift">Shift</div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">z</span>
        <span class="keyboard__key spanHidden hidden">Z</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">я</span>
        <span class="keyboard__key spanHidden hidden">Я</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">x</span>
        <span class="keyboard__key spanHidden hidden">X</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">ч</span>
        <span class="keyboard__key spanHidden hidden">Ч</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">c</span>
        <span class="keyboard__key spanHidden hidden">C</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">с</span>
        <span class="keyboard__key spanHidden hidden">С</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">v</span>
        <span class="keyboard__key spanHidden hidden">V</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">м</span>
        <span class="keyboard__key spanHidden hidden">М</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">b</span>
        <span class="keyboard__key spanHidden hidden">B</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">и</span>
        <span class="keyboard__key spanHidden hidden">И</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">n</span>
        <span class="keyboard__key spanHidden hidden">N</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">т</span>
        <span class="keyboard__key spanHidden hidden">Т</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span letter">m</span>
        <span class="keyboard__key spanHidden hidden">M</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">ь</span>
        <span class="keyboard__key spanHidden hidden">Ь</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span">&#44</span>
        <span class="keyboard__key spanHidden hidden">&#60</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">б</span>
        <span class="keyboard__key spanHidden hidden">Б</span>
      </span>
    </div>
    <div>
      <span class="eng">
        <span class="keyboard__key span">&#46</span>
        <span class="keyboard__key spanHidden hidden">&#62</span>
      </span>
      <span class="ru hidden">
        <span class="keyboard__key span">ю</span>
        <span class="keyboard__key spanHidden hidden">Ю</span>
      </span>
    </div>
    <div>
      <span class="keyboard__key span">&#47</span>
      <span class="keyboard__key spanHidden hidden">&#63</span>
    </div>
    <div class="keyboard__key arrow-up">&#9650</div>
    <div class="keyboard__key shift-right" id="shift">Shift</div>
  </div>
  <div class="keyboard__row">
    <div class="keyboard__key ctrl-left">Ctrl</div>
    <div class="keyboard__key meta-left">Win</div>
    <div class="keyboard__key alt-left" id="alt">Alt</div>
    <div class="keyboard__key space"></div>
    <div class="keyboard__key alt-right" id="alt">Alt</div>
    <div class="keyboard__key arrow-left">&#9668</div>
    <div class="keyboard__key arrow-down">&#9660</div>
    <div class="keyboard__key arrow-right">&#9658</div>
    <div class="keyboard__key ctrl-right">Ctrl</div>
  </div>
</div>
<p class="text">Для переключения языка комбинация: левыe ctrl + alt</p>
`
;
document.body.append(keyboard);

const textarea = document.querySelector("textarea");
const keys = document.querySelectorAll('.keyboard__key');
const letters = document.querySelectorAll('.letter');
const spans = document.querySelectorAll('.span');
const spansHidden = document.querySelectorAll('.spanHidden');
const deleteKey = document.querySelector('.delete');
const capsLock = document.querySelector('.caps-lock');
const enter = document.querySelector('.enter');
const shiftLeft = document.querySelector('.shift-left');
const shiftRight = document.querySelector('.shift-right');
const ctrlLeft = document.querySelector('.ctrl-left');
const ctrlRight = document.querySelector('.ctrl-right');
const metaLeft = document.querySelector('.meta-left');
const altLeft = document.querySelector('.alt-left');
const altRight = document.querySelector('.alt-right');
const space = document.querySelector('.space');
const arrowUp = document.querySelector('.arrow-up');
const arrowLeft = document.querySelector('.arrow-left');
const arrowDown = document.querySelector('.arrow-down');
const arrowRight = document.querySelector('.arrow-right');
const tab = document.querySelector('.tab');
const backspace = document.querySelector('.backspace');
const eng = document.querySelectorAll('.eng');
const ru = document.querySelectorAll('.ru');
const chackButton = document.getElementById('chackButton')

for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase())
}

window.addEventListener('keydown', function(event) {
    for (let i = 0; i < keys.length; i++) {
        if(event.key == keys[i].getAttribute('keyname') || event.key == keys[i].getAttribute('lowerCaseName')) {
          keys[i].classList.add('active');
        }
        if(event.code == 'Delete') {
            deleteKey.classList.add('active');
        }
        if(event.code == 'Enter') {
            enter.classList.add('active');
        }
        if(event.code == 'ShiftLeft') {
            shiftLeft.classList.add('active');
            shiftRight.classList.remove('active');
            for (let i = 0; i < letters.length; i++) {
                letters[i].innerText = letters[i].innerText.toUpperCase();
            }
            for (let i = 0; i < spans.length; i++) {
                spans[i].classList.add('hidden');
            }
            for (let i = 0; i < spansHidden.length; i++) {
                spansHidden[i].classList.remove('hidden');
            }
        }
        if(event.code == 'ShiftRight') {
            shiftRight.classList.add('active');
            shiftLeft.classList.remove('active');
            for (let i = 0; i < letters.length; i++) {
                letters[i].innerText = letters[i].innerText.toUpperCase();
            }
            for (let i = 0; i < spans.length; i++) {
                spans[i].classList.add('hidden');
            }
            for (let i = 0; i < spansHidden.length; i++) {
                spansHidden[i].classList.remove('hidden');
            }
        }
        if(event.code == 'ControlLeft') {
            ctrlLeft.classList.add('active');
        }
        if(event.code == 'ControlRight') {
            ctrlRight.classList.add('active');
        }
        if(event.code == 'MetaLeft') {
            metaLeft.classList.add('active');
        }
        if(event.code == 'AltLeft') {
            altLeft.classList.add('active');
            altRight.classList.remove('active');
        }
        if(event.code == 'AltRight') {
            altRight.classList.add('active');
            altLeft.classList.remove('active');
        }
        if(event.code == 'Space') {
            space.classList.add('active');
        }
        if(event.code == 'ArrowUp') {
            arrowUp.classList.add('active');
        }
        if(event.code == 'ArrowLeft') {
            arrowLeft.classList.add('active');
        }
        if(event.code == 'ArrowDown') {
            arrowDown.classList.add('active');
        }
        if(event.code == 'ArrowRight') {
            arrowRight.classList.add('active');
        }
        if(event.code == 'Backspace') {
          backspace.classList.add('active');
        }
        if(event.code == 'Tab') {
          let textLeft = textarea.value.substring(0, textarea.selectionStart);
          let textRight = textarea.value.substring(textarea.selectionEnd, textarea.length);
          textarea.value = `${textLeft}    ${textRight}`;
          tab.classList.add('active');
        }
    }
});

window.addEventListener('keydown', function(event) {
    if(event.code == 'CapsLock' && capsLock.classList.contains('active')) {
        capsLock.classList.remove('active');
        for (let i = 0; i < letters.length; i++) {
            letters[i].innerText = letters[i].innerText.toLowerCase()
        }
        for (let i = 0; i < spans.length; i++) {
          spans[i].classList.remove('hidden');
        }
        for (let i = 0; i < spansHidden.length; i++) {
          spansHidden[i].classList.add('hidden');
        }
    } else if(event.code == 'CapsLock') {
        capsLock.classList.add('active');
        for (let i = 0; i < letters.length; i++) {
            letters[i].innerText = letters[i].innerText.toUpperCase()
        }
        for (let i = 0; i < spans.length; i++) {
          spans[i].classList.add('hidden');
        }
        for (let i = 0; i < spansHidden.length; i++) {
          spansHidden[i].classList.remove('hidden');
        }
    }
})

window.addEventListener('keyup', function(event) {
    for (let i = 0; i < keys.length; i++) {
        if(event.key == keys[i].getAttribute('keyname') || event.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active');
        }
        if(event.code == 'Delete') {
            deleteKey.classList.remove('active');
        }
        if(event.code == 'Enter') {
            enter.classList.remove('active');
        }
        if(event.code == 'ShiftLeft') {
            shiftLeft.classList.remove('active');
            for (let i = 0; i < letters.length; i++) {
                letters[i].innerText = letters[i].innerText.toLowerCase()
            }
            for (let i = 0; i < spans.length; i++) {
                spans[i].classList.remove('hidden');
            }
            for (let i = 0; i < spansHidden.length; i++) {
                spansHidden[i].classList.add('hidden');
            }
        }
        if(event.code == 'ShiftRight') {
            shiftRight.classList.remove('active');
            for (let i = 0; i < letters.length; i++) {
                letters[i].innerText = letters[i].innerText.toLowerCase()
            }
            for (let i = 0; i < spans.length; i++) {
                spans[i].classList.remove('hidden');
            }
            for (let i = 0; i < spansHidden.length; i++) {
                spansHidden[i].classList.add('hidden');
            }
        }
        if(event.code == 'ControlLeft') {
            ctrlLeft.classList.remove('active');
        }
        if(event.code == 'ControlRight') {
            ctrlRight.classList.remove('active');
        }
        if(event.code == 'MetaLeft') {
            metaLeft.classList.remove('active');
        }
        if(event.code == 'AltLeft') {
            altLeft.classList.remove('active');
        }
        if(event.code == 'AltRight') {
            altRight.classList.remove('active');
        }
        if(event.code == 'Space') {
            space.classList.remove('active');
        }
        if(event.code == 'ArrowUp') {
            arrowUp.classList.remove('active');
        }
        if(event.code == 'ArrowLeft') {
            arrowLeft.classList.remove('active');
        }
        if(event.code == 'ArrowDown') {
            arrowDown.classList.remove('active');
        }
        if(event.code == 'ArrowRight') {
            arrowRight.classList.remove('active');
        }
        if(event.code == 'Tab') {
          tab.classList.remove('active');
        }
    }
});

window.addEventListener('mousedown', function(event) {
    for (let i = 0; i < keys.length; i++) {
        if(event.target.getAttribute('keyname') == keys[i].getAttribute('keyname') || event.target.getAttribute('lowerCaseName') == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active');
        }
        if(event.target.getAttribute('keyname') == 'Shift') {
            for (let i = 0; i < letters.length; i++) {
                letters[i].innerText = letters[i].innerText.toUpperCase()
            }
            for (let i = 0; i < spans.length; i++) {
                spans[i].classList.add('hidden');
            }
            for (let i = 0; i < spansHidden.length; i++) {
                spansHidden[i].classList.remove('hidden');
            }
        }
        if(event.target.classList.contains('shift-left')) {
            shiftLeft.classList.add('active');
            shiftRight.classList.remove('active');
        }
        if(event.target.classList.contains('shift-right')) {
            shiftLeft.classList.remove('active');
            shiftRight.classList.add('active');
        }
        if(event.target.classList.contains('ctrl-left')) {
            ctrlLeft.classList.add('active');
            ctrlRight.classList.remove('active');
        }
        if(event.target.classList.contains('ctrl-right')) {
            ctrlLeft.classList.remove('active');
            ctrlRight.classList.add('active');
        }
        if(event.target.classList.contains('alt-left')) {
            altLeft.classList.add('active');
            altRight.classList.remove('active');
        }
        if(event.target.classList.contains('alt-right')) {
            altLeft.classList.remove('active');
            altRight.classList.add('active');
        }
    }
});

window.addEventListener('mouseup', function(event) {
    for (let i = 0; i < keys.length; i++) {
        if(event.target.getAttribute('keyname') == keys[i].getAttribute('keyname') || event.target.getAttribute('lowerCaseName') == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active');
        }
        if(event.target.getAttribute('keyname') == 'Shift') {
            for (let i = 0; i < letters.length; i++) {
                letters[i].innerText = letters[i].innerText.toLowerCase()
            }
            for (let i = 0; i < spans.length; i++) {
                spans[i].classList.remove('hidden');
            }
            for (let i = 0; i < spansHidden.length; i++) {
                spansHidden[i].classList.add('hidden');
            }
        }
    }
});

const handleClick = event => {
  const value = event.target.textContent;
  if(event.target.getAttribute('keyname') == 'Backspace') {
    let textLeft = textarea.value.substring(0, textarea.selectionStart);
    let textRight = textarea.value.substring(textarea.selectionEnd, textarea.length);
    textarea.value = textLeft.substring(0, textLeft.length  -1).concat(textRight)
} else if (event.target.getAttribute('keyname') == 'DEL') {
    let textLeft = textarea.value.substring(0, textarea.selectionStart);
    let textRight = textarea.value.substring(textarea.selectionEnd, textarea.length);
    textarea.value = textLeft.concat(textRight.substring(1, textRight.length))
} else if (event.target.getAttribute('keyname') == 'Caps Lock') {
    if(capsLock.classList.contains('caps-lock_active')) {
        for (let i = 0; i < letters.length; i++) {
            letters[i].innerText = letters[i].innerText.toLowerCase()
        }
        for (let i = 0; i < spans.length; i++) {
          spans[i].classList.remove('hidden');
        }
        for (let i = 0; i < spansHidden.length; i++) {
          spansHidden[i].classList.add('hidden');
        }
    } else {
        for (let i = 0; i < letters.length; i++) {
            letters[i].innerText = letters[i].innerText.toUpperCase()
        }
        for (let i = 0; i < spans.length; i++) {
          spans[i].classList.add('hidden');
        }
        for (let i = 0; i < spansHidden.length; i++) {
          spansHidden[i].classList.remove('hidden');
        }
    }
} else if (event.target.getAttribute('keyname') == 'ENTER') {
    let textLeft = textarea.value.substring(0, textarea.selectionStart);
    let textRight = textarea.value.substring(textarea.selectionEnd, textarea.length);
    textarea.value = textLeft;
    textarea.value += `\n${textRight}`;
} else if (event.target.getAttribute('keyname') == 'Shift') {
    textarea.value += ``;
} else if (event.target.getAttribute('keyname') == 'Ctrl') {
    textarea.value += ``;
} else if (event.target.getAttribute('keyname') == 'Win') {
    textarea.value += ``;
} else if (event.target.getAttribute('keyname') == 'Alt') {
    textarea.value += ``;
} else if (event.target.getAttribute('keyname') == 'Tab') {
    let textLeft = textarea.value.substring(0, textarea.selectionStart);
    let textRight = textarea.value.substring(textarea.selectionEnd, textarea.length);
    textarea.value = `${textLeft}    ${textRight}`;
} else if (event.target.getAttribute('keyname') == '') {
    textarea.value += ` `;
} else {
    let textLeft = textarea.value.substring(0, textarea.selectionStart);
    let textRight = textarea.value.substring(textarea.selectionEnd, textarea.length);
    textarea.value = `${textLeft}${value}${textRight}`;
}
}

keys.forEach(item => item.addEventListener("click", handleClick));

const toggleCapsLock = function() {
    capsLock.classList.toggle('caps-lock_active');
};

capsLock.addEventListener('click', toggleCapsLock);

const buttons = ['AltLeft', 'ControlLeft'];

const  hideEng = function() {
  for (let i = 0; i < ru.length; i++) {
    ru[i].classList.remove('hidden');
  }
  for (let i = 0; i < eng.length; i++) {
    eng[i].classList.add('hidden');
  }
}

const  showEng = function() {
  for (let i = 0; i < ru.length; i++) {
    ru[i].classList.add('hidden');
  }
  for (let i = 0; i < eng.length; i++) {
    eng[i].classList.remove('hidden');
  }
}

function runOnKeys(showEng, buttons) {
  let array = [];

  document.addEventListener("keydown", function (event) {
      if (event.repeat) return;
      array.push(event.code);
  });

  document.addEventListener("keyup", function () {
      if (array.length == 0) return;
      let isCombinathionCotrrect = true;
      for (let button of buttons) {
          if (!array.includes(button)) {
            isCombinathionCotrrect = false;
              break;
          }
      }
      if (isCombinathionCotrrect) {
        if (chackButton.classList.contains('hidden')) {
          showEng()
        } else {
          hideEng();
        }
      }
      array.length = 0;
  });
}

runOnKeys(showEng, buttons);