const domUpdates = {

  welcomeUser(user) {
    const welcomeMessage = document.querySelector('#welcome');
    const [ firstName ] = user.name.split(' ');
    welcomeMessage.innerHTML = `Welcome, ${firstName}!`;
  }

}

export default domUpdates;