const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d')

c.fillStyle = 'rgba(222 , 255, 11, 70)';
c.fillRect(80, 100, 100, 100);
c.fillStyle = 'green' 
c.fillRect(100, 300, 100, 100);
c.fillStyle = 'blue'
c.fillRect(700, 100, 100, 100);

// Line
c.beginPath();
c.moveTo(50, 350);
c.lineTo(300, 100);
c.lineTo(15, 200)
c.strokeStyle = 'green';
c.stroke();

//Arc / Circle
c.beginPath();
c.arc(300, 300, 40,  0, Math.PI * 2, false);
c.strokeStyle = 'purple';
c.stroke();

// USE FOR LOOP FOR REPEAT CREATE CIRCLE AND PUT IT RANDOMLY IN SCREEN
for ( let i = 0; i < 50; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight; 
    c.beginPath();
    c.arc(x, y, 40,  0, Math.PI * 2, false);
    c.strokeStyle = 'purple';
    c.stroke();
}


