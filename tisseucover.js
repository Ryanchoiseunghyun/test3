function openSidebar() {
    document.querySelector('.sidebar').style.width = '250px';
    document.querySelector('.content').style.marginLeft = '250px';
    document.querySelector('.content').target = 'show';
  }
  
  function closeSidebar() {
    document.querySelector('.sidebar').style.width = '0';
    document.querySelector('.content').style.marginLeft = '0';
    document.querySelector('.content').target = 'hidden';
    document.querySelector('.content').close = '0';
  }

