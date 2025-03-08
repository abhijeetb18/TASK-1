// Example script to display an alert when a user clicks a project link
document.querySelectorAll('.project a').forEach(link => {
  link.addEventListener('click', event => {
    alert('You clicked on a project link!');
  });
});
