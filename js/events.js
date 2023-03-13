export default function Events(){
  const homePage = document.querySelector('#home');
  const universePage = document.querySelector('#universe');
  const explorationPage = document.querySelector('#exploration');

  homePage.addEventListener('click', function () {
    homePage.classList.add('selected')
    universePage.classList.remove('selected')
    explorationPage.classList.remove('selected')
  })

  universePage.addEventListener('click', function () {
    universePage.classList.add('selected')
    homePage.classList.remove('selected')
    explorationPage.classList.remove('selected')
  })

  explorationPage.addEventListener('click', function () {
    explorationPage.classList.add('selected')
    homePage.classList.remove('selected')
    universePage.classList.remove('selected')
  })
}