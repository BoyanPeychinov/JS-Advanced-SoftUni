function solve() {
   const inputForm = document.getElementsByTagName('form');
   const paragraphs = Array.from(inputForm[0].children);

   const createBtn = document.getElementsByClassName('btn create')[0];
   createBtn.addEventListener('click', createPost);

   const postSection = document.querySelector('.site-content main section');
   const archiveSection = document.querySelector('.archive-section ol');

   const fields = {
      author: paragraphs[0].children[1],
      title: paragraphs[1].children[1],
      category: paragraphs[2].children[1],
      content: paragraphs[3].children[1]
   };

   function createPost(e) {
      e.preventDefault();

      const creator = fields['author'].value;
      const title = fields['title'].value;
      const category = fields['category'].value;
      const content = fields['content'].value;

      const deleteBtn = createEl('button', { className: 'btn delete' }, 'Delete');
      const archiveBtn = createEl('button', { className: 'btn archive' }, 'Archive');


      const post = createEl('article', {},
         createEl('h1', {}, title,),
         createEl('p', {}, 'Category: ',
            createEl('strong', {}, category,)
         ),
         createEl('p', {}, 'Creator: ',
            createEl('strong', {}, creator)
         ),
         createEl('p', {}, content),
         createEl('div', { className: 'buttons' },
            deleteBtn, archiveBtn
         ),
      );

      deleteBtn.addEventListener('click', deletePost);

      postSection.appendChild(post);

      archiveBtn.addEventListener('click', archivePost);

      fields['author'].value = '';
      fields['title'].value = '';
      fields['category'].value = '';
      fields['content'].value = '';
   }

   function deletePost(e) {
      article = e.target.parentNode.parentNode;
      article.remove();
   }

   function archivePost(e) {
      const article = e.target.parentNode.parentNode;
      const currentTitle = article.querySelector('h1').textContent;
      archiveSection.appendChild(createEl('li', {}, currentTitle));
      
      const arrArticle = Array.from(archiveSection.children);

      while (archiveSection.firstChild) {
         archiveSection.removeChild(archiveSection.firstChild);
      }

      arrArticle.sort((a, b) => a.textContent.localeCompare(b.textContent));

      for (let art of arrArticle) {
         archiveSection.appendChild(art);
      }

      article.remove();
   }



   function createEl(type, attr, ...content) {
      element = document.createElement(type);

      for (let prop in attr) {
         element[prop] = attr[prop];
      }

      for (let item of content) {
         if (typeof item == 'string' || typeof item == 'number') {
            item = document.createTextNode(item);
         }
         element.appendChild(item);
      }

      return element;
   }
}
