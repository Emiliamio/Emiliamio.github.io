/**
 * Realistic & Elegant Canvas Sakura Falling Petals Engine
 * - Genuine single cherry blossom petal shape with top notch cleft & slender base
 * - Graceful 3D tumbling & fluttering in breeze
 * - Sparse, serene density (12~14 petals on desktop, 6 on mobile)
 */
(function () {
  function initSakura() {
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

    // Sparse, peaceful count (12 on desktop, 6 on mobile)
    var petalCount = window.innerWidth < 768 ? 6 : 12;
    var petals = [];

    function Petal(initial) {
      this.reset(initial);
    }

    Petal.prototype.reset = function (initial) {
      this.x = Math.random() * (width + 60) - 30;
      this.y = initial ? Math.random() * height : -20 - Math.random() * 40;
      this.size = Math.random() * 6 + 10; // 10px ~ 16px
      this.speedX = Math.random() * 0.8 + 0.2; // gentle natural wind drift to the right
      this.speedY = Math.random() * 0.6 + 0.6; // slow, gentle falling speed (0.6 ~ 1.2 px/frame)
      this.rotation = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 1.2;
      this.flipAngle = Math.random() * Math.PI * 2;
      this.flipSpeed = Math.random() * 0.02 + 0.015; // 3D flip flutter
      this.swayStep = Math.random() * Math.PI * 2;
      this.swaySpeed = Math.random() * 0.015 + 0.01;
      this.opacity = Math.random() * 0.25 + 0.7; // 0.7 ~ 0.95 opacity
      
      // Soft Sakura color variations
      var colorType = Math.random();
      if (colorType > 0.6) {
        this.baseColor = { r: 255, g: 175, b: 198 }; // Blossom Pink
      } else if (colorType > 0.3) {
        this.baseColor = { r: 255, g: 190, b: 210 }; // Soft Sakura
      } else {
        this.baseColor = { r: 255, g: 155, b: 185 }; // Rose Sakura
      }
    };

    Petal.prototype.update = function () {
      this.swayStep += this.swaySpeed;
      this.flipAngle += this.flipSpeed;
      this.x += this.speedX + Math.sin(this.swayStep) * 0.8;
      this.y += this.speedY;
      this.rotation += this.rotationSpeed;

      if (this.y > height + 30 || this.x > width + 40 || this.x < -40) {
        this.reset(false);
      }
    };

    Petal.prototype.draw = function () {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      
      // 3D Fluttering scale
      var scaleX = Math.cos(this.flipAngle);
      var scaleY = 1;
      ctx.scale(scaleX, scaleY);

      var r = this.size;
      var c = this.baseColor;
      
      // Petal gradient from base to tip
      var grad = ctx.createLinearGradient(0, r, 0, -r);
      grad.addColorStop(0, 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + this.opacity + ')');
      grad.addColorStop(0.6, 'rgba(' + (c.r) + ',' + (c.g + 15) + ',' + (c.b + 15) + ',' + (this.opacity * 0.85) + ')');
      grad.addColorStop(1, 'rgba(255, 230, 238,' + (this.opacity * 0.7) + ')');
      ctx.fillStyle = grad;

      // Realistic single Sakura Petal (with classic top notch & tapered stem base)
      ctx.beginPath();
      // Stem base
      ctx.moveTo(0, r);
      // Right side curve up to right lobe
      ctx.bezierCurveTo(r * 0.7, r * 0.5, r * 0.75, -r * 0.4, r * 0.28, -r);
      // Sakura apex notch (small gentle indent)
      ctx.quadraticCurveTo(0, -r * 0.75, -r * 0.28, -r);
      // Left side curve down to stem base
      ctx.bezierCurveTo(-r * 0.75, -r * 0.4, -r * 0.7, r * 0.5, 0, r);
      ctx.closePath();
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
