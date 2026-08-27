/**
 * High Performance Canvas Sakura Petal System
 * Spans 100% of viewport width and height with smooth 60fps float & flutter
 */
(function () {
  function initSakura() {
    // Remove any existing sakura canvas or old elements
    var oldCanvas = document.getElementById('sakura-canvas');
    if (oldCanvas) oldCanvas.remove();
    var oldPetals = document.querySelectorAll('.sakura');
    oldPetals.forEach(function (el) { el.remove(); });

    var canvas = document.createElement('canvas');
    canvas.id = 'sakura-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '99999';
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    var width = (canvas.width = window.innerWidth);
    var height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', function () {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    var petalCount = 35;
    var petals = [];

    function Petal(initial) {
      this.reset(initial);
    }

    Petal.prototype.reset = function (initial) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : -20 - Math.random() * 40;
      this.size = Math.random() * 7 + 7; // 7px ~ 14px
      this.speedX = Math.random() * 1.0 - 0.2; // gentle rightward drift
      this.speedY = Math.random() * 1.0 + 0.7; // fall speed
      this.rotation = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 1.8;
      this.oscillationSpeed = Math.random() * 0.02 + 0.01;
      this.oscillationDistance = Math.random() * 30 + 15;
      this.initialX = this.x;
      this.step = Math.random() * Math.PI * 2;
      this.opacity = Math.random() * 0.35 + 0.65;
      // Vibrant pink sakura colors
      var colorType = Math.random();
      if (colorType > 0.6) {
        this.color = 'rgba(255, 170, 195, ';
      } else if (colorType > 0.3) {
        this.color = 'rgba(255, 185, 205, ';
      } else {
        this.color = 'rgba(255, 140, 180, ';
      }
    };

    Petal.prototype.update = function () {
      this.step += this.oscillationSpeed;
      this.x += this.speedX + Math.sin(this.step) * 0.6;
      this.y += this.speedY;
      this.rotation += this.rotationSpeed;

      if (this.y > height + 25 || this.x > width + 30 || this.x < -30) {
        this.reset(false);
      }
    };

    Petal.prototype.draw = function () {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.fillStyle = this.color + this.opacity + ')';
      ctx.beginPath();
      // Draw standard petal shape
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(this.size * 0.5, -this.size * 0.5, this.size, 0, this.size, this.size * 0.5);
      ctx.bezierCurveTo(this.size, this.size, this.size * 0.5, this.size * 1.3, 0, this.size * 1.5);
      ctx.bezierCurveTo(-this.size * 0.5, this.size * 1.3, -this.size, this.size, -this.size, this.size * 0.5);
      ctx.bezierCurveTo(-this.size, 0, -this.size * 0.5, -this.size * 0.5, 0, 0);
      ctx.fill();
      ctx.restore();
    };

    for (var i = 0; i < petalCount; i++) {
      petals.push(new Petal(true));
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (var i = 0; i < petals.length; i++) {
        petals[i].update();
        petals[i].draw();
      }
      requestAnimationFrame(animate);
    }
    animate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSakura);
  } else {
    initSakura();
  }
})();
