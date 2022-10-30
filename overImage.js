
function overImage(x, y, radius) {
    if (dist(x, y, mouseX, mouseY) < radius) {
      return true;
    } else {
      return false;
    }
  }