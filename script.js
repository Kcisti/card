const DOM = {
  profile : document.querySelector('.profile'),
  profileHead : document.querySelector('.profile_head'),
  profileFooterCodes : document.querySelector('.profile_codes'),
  profileBody : document.querySelector('.profile_body'),
}

function fullprofile(){
  DOM.profileBody.classList.toggle('profile_body_close');
  DOM.profileFooterCodes.classList.toggle('profile_codes_close');
  DOM.profile.classList.toggle('profile_close');
}

DOM.profile.addEventListener('click',fullprofile);
window.addEventListener('load',fullprofile)
