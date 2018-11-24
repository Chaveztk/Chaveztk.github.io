function toggle() {
  const linkButton = document.getElementById('link');
  if(linkButton.innerText === 'Read More >>'){
    document.getElementById('more').style.display = 'block';
    linkButton.innerHTML = 'Read Less';

  } else {
    linkButton.innerHTML = 'Read More >>';
    document.getElementById('more').style.display = 'none';

  }


}
