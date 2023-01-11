# QMK Firmware for Moon60

---

## Wykonał: Przemysław Paciorek

---

Folder ten zawiera pliki do kompilacji firmware do klawiatury Moon60.

Github: (<https://github.com/Tymut/Insequor>)

***Firmware został wykonany z myślą o kontrolerze ProMicro z mikrokontrolerem Atmega32U4 i nie będzie współpracował z kontrolerami opartymi o inny mikrokotnroler bądź inna architekturę***

Z tego źródła nauczyłem się zrobić własny firmware: (<https://docs.qmk.fm/#/>)

### Link do wizualizacji keymapy zapisanej w pliku "info.json"

---

Url: (<http://www.keyboard-layout-editor.com/##@_backcolor=%23ffffff&name=Moon60&author=Przemys%C5%82aw%20Paciorek%3B&@_x:3&c=%23f53d3d&a:7%3B&=3&_x:8.25%3B&=8%3B&@_y:-0.75&x:2%3B&=2&_x:1%3B&=4&_x:6.25%3B&=7&_x:1%3B&=9%3B&@_y:-0.75%3B&=Esc&=1&_x:3%3B&=5&_x:4.25%3B&=6&_x:3%3B&=0&=%CB%9C%3B&@_y:-0.5&x:3%3B&=E&_x:8.25%3B&=I%3B&@_y:-0.75&x:2%3B&=W&_x:1%3B&=R&_x:6.25%3B&=U&_x:1%3B&=O%3B&@_y:-0.75%3B&=Tab&=Q&_x:3%3B&=T&_x:4.25%3B&=Y&_x:3%3B&=P&_a:5%3B&=-%0A%0A%0A%0A%0A%0A%2F_%3B&@_y:-0.5&x:3&a:7%3B&=D&_x:8.25%3B&=K%3B&@_y:-0.75&x:2%3B&=S&_x:1%3B&=F&_x:6.25%3B&=J&_x:1%3B&=L%3B&@_y:-0.75%3B&=Shift&=A&_x:3%3B&=G&_x:4.25%3B&=H&_x:3&a:5%3B&=%2F:%0A%0A%0A%0A%0A%0A%2F%3B&=%22%0A%0A%0A%0A%0A%0A'%3B&@_y:-0.75&x:6%3B&=%7B%0A%0A%0A%0A%0A%0A%5B&_x:2.25%3B&=%7D%0A%0A%0A%0A%0A%0A%5D%3B&@_y:-0.75&x:3&a:7%3B&=C&_x:8.25&a:5%3B&=%3C%0A%0A%0A%0A%0A%0A,%3B&@_y:-0.75&x:2&a:7%3B&=X&_x:1%3B&=V&_x:6.25%3B&=M&_x:1&a:5%3B&=%3E%0A%0A%0A%0A%0A%0A.%3B&@_y:-0.75&a:7%3B&=Ctrl&=Z&_x:3%3B&=B&_x:4.25%3B&=N&_x:3&a:5%3B&=%3F%0A%0A%0A%0A%0A%0A%2F%2F&_a:7%3B&=Shift%3B&@_y:-0.25&x:2.65%3B&=Alt&=Fn&_x:7%3B&=Fn&=Gui%3B&@_y:-0.75&x:4.65%3B&=Gui&_x:5%3B&=Bspc%3B&@_y:1.25&x:3&c=%23ff9414%3B&=&_x:8.25%3B&=%3B&@_y:-0.75&x:2%3B&=&_x:1%3B&=&_x:6.25%3B&=&_x:1%3B&=%3B&@_y:-0.75%3B&=&=&_x:3%3B&=&_x:4.25%3B&=&_x:3%3B&=&=%3B&@_y:-0.5&x:3%3B&=F4&_x:8.25%3B&=F9%3B&@_y:-0.75&x:2%3B&=F3&_x:1%3B&=F5&_x:6.25%3B&=F8&_x:1%3B&=F10%3B&@_y:-0.75%3B&=F1&=F2&_x:3%3B&=F6&_x:4.25%3B&=F7&_x:3%3B&=F11&=F12%3B&@_y:-0.5&x:3%3B&=%23&_x:8.25%3B&=*%3B&@_y:-0.75&x:2%3B&=%2F@&_x:1%3B&=$&_x:6.25%3B&=%2F&&_x:1%3B&=(%3B&@_y:-0.75%3B&=%60&=!&_x:3%3B&=%25&_x:4.25%3B&=%5E&_x:3%3B&=)&=-%3B&@_y:-0.75&x:6%3B&=&_x:2.25%3B&=%3B&@_y:-0.75&x:3%3B&=&_x:8.25%3B&=+%3B&@_y:-0.75&x:2%3B&=&_x:1%3B&=&_x:6.25%3B&=%2F_&_x:1%3B&=%7B%3B&@_y:-0.75%3B&=&=&_x:3%3B&=&_x:4.25%3B&=&_x:3%3B&=%7D&=%7C%3B&@_y:-0.25&x:2.65%3B&=Alt&=Fn&_x:7%3B&=Fn&=Gui%3B&@_y:-0.75&x:4.65%3B&=Gui&_x:5%3B&=Bspc%3B&@_y:0.5&x:3&c=%23c4b427%3B&=&_x:8.25%3B&=%3B&@_y:-0.75&x:2%3B&=&_x:1%3B&=&_x:6.25%3B&=&_x:1%3B&=%3B&@_y:-0.75%3B&=&=&_x:3%3B&=&_x:4.25%3B&=&_x:3%3B&=&=%3B&@_y:-0.5&x:3%3B&=3&_x:8.25%3B&=8%3B&@_y:-0.75&x:2%3B&=2&_x:1%3B&=4&_x:6.25%3B&=7&_x:1%3B&=9%3B&@_y:-0.75%3B&=%60&=1&_x:3%3B&=5&_x:4.25%3B&=6&_x:3%3B&=0&=%3B&@_y:-0.5&x:3%3B&=F4&_x:8.25%3B&=%E2%86%93%3B&@_y:-0.75&x:2%3B&=F3&_x:1%3B&=F5&_x:6.25%3B&=%E2%86%90&_x:1%3B&=%E2%86%91%3B&@_y:-0.75%3B&=F1&=F2&_x:3%3B&=F6&_x:4.25%3B&=&_x:3%3B&=%E2%86%92&=%3B&@_y:-0.75&x:6%3B&=&_x:2.25%3B&=%3B&@_y:-0.75&x:3%3B&=F10&_x:8.25%3B&=%2F=%3B&@_y:-0.75&x:2%3B&=F9&_x:1%3B&=F11&_x:6.25%3B&=-&_x:1%3B&=%5B%3B&@_y:-0.75%3B&=F7&=F8&_x:3%3B&=F12&_x:4.25%3B&=+&_x:3%3B&=%5D&=%5C%3B&@_y:-0.25&x:2.65%3B&=Alt&=Fn&_x:7%3B&=Fn&=Gui%3B&@_y:-0.75&x:4.65%3B&=Gui&_x:5%3B&=Bspc%3B&@_r:25&rx:8.5&ry:4.75&y:0.5&x:-2.25&c=%23f53d3d%3B&=Space%3B&@_ry:11.5&y:0.5&x:-2.25&c=%23ff9414%3B&=Space%3B&@_ry:17.5&y:0.5&x:-2.25&c=%23c4b427%3B&=Space%3B&@_r:50&ry:4.75&y:1&x:-0.4499999999999993&c=%23f53d3d%3B&=%E2%86%90%3B&@_ry:11.5&y:1&x:-0.4499999999999993&c=%23ff9414%3B&=%E2%86%90%3B&@_ry:17.5&y:1&x:-0.4499999999999993&c=%23c4b427%3B&=%E2%86%90%3B&@_r:-50&ry:4.75&y:0.5&x:-1&c=%23f53d3d%3B&=%E2%86%92%3B&@_ry:11.5&y:0.5&x:-1&c=%23ff9414%3B&=%E2%86%92%3B&@_ry:17.5&y:0.5&x:-1&c=%23c4b427%3B&=%E2%86%92%3B&@_r:-25&ry:4.75&y:0.25&x:0.6500000000000004&c=%23f53d3d%3B&=Enter%3B&@_ry:11.5&y:0.25&x:0.6500000000000004&c=%23ff9414%3B&=Enter%3B&@_ry:17.5&y:0.25&x:0.6500000000000004&c=%23c4b427%3B&=Enter>)
