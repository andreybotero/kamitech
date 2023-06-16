var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var showSidebar = false;

function toggleSidebar() {
  showSidebar = !showSidebar;
  if (showSidebar) {
    navigationHeader.style.marginLeft = '-10vw';
    navigationHeader.style.animationName = 'showSidebar';
  } else {
    navigationHeader.style.marginLeft = '-100vw';
    navigationHeader.style.animationName = 'showSidebar';
  }
}

function closeSidebar() {
  if (showSidebar) {
    showSidebar = false; // Corrigido: alterado para false
    toggleSidebar();
  }
}

window.addEventListener('resize', function (event) {
  if (window.innerWidth > 768 && showSidebar) {
    showSidebar = false; // Corrigido: alterado para false
    toggleSidebar();
  }
});
    