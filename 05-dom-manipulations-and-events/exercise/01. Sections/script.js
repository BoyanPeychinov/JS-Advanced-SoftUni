function create(words) {
   // create <div>
   // create <p>
   // set <p> content
   // configure <p> to be hidden (display:none)
   // add <p> to <div>
   // add <div> to page
   // configure <div> eventListener

   const content = document.getElementById('content');
   content.addEventListener('click', reveal);

   for (let word of words) {
      const div = document.createElement('div');
      const para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';
      div.appendChild(para);

      div.addEventListener('click', reveal);

      content.appendChild(div);
   }

   function reveal(e) {
      if (e.target.tagName == "DIV" && e.target != content) {
         e.target.children[0].style.display = '';
      }
   }

}

// for closure example
/*
function create(words) {
   const content = document.getElementById('content');

   for (let word of words) {
      const div = document.createElement('div');
      const para = document.createElement('p');

      para.textContent = word;
      para.style.display = 'none';
      div.appendChild(para);
      div.addEventListener('click', reveal.bind(para));

      content.appendChild(div);

   }
   
   function reveal() {
      this.style.display = '';
   }

}
*/