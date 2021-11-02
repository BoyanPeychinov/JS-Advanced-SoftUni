class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {'picture': 200, 'photo': 50, 'item': 250};
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        quantity = Number(quantity);
        articleModel = articleModel.toLowerCase();
        
        if (this.possibleArticles.hasOwnProperty(articleModel) == false) {
            throw new Error('This article model is not included in this gallery!');
        }
        const currentArticle = this.listOfArticles.find(a => 
            a.articleName == articleName && a.articleModel == articleModel);
        
        if (currentArticle == undefined) {
            this.listOfArticles.push({
                'articleModel': articleModel,
                'articleName': articleName,
                'quantity': quantity
            });
        } else {
            currentArticle.quantity += quantity;
        }
        
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;

    }

    inviteGuest(guestName, personality) {
        if (this.guests.some(g => g.guestName == guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }
        
        let points = 50;
        if (personality == 'Vip') {
            points = 500;
        } else if (personality == 'Middle') {
            points = 250;
        }

        this.guests.push({
            'guestName': guestName,
            'points': points,
            'purchaseArticle': 0
        });

        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        articleModel = articleModel.toLowerCase();

        if (this.listOfArticles.some(a => a.articleName == articleName && a.articleModel == articleModel) == false)  {
            throw new Error('This article is not found.');
        }
        let currentArticle = this.listOfArticles.find(a => a.articleName == articleName);
        
        if (currentArticle.quantity == 0) {
            return `The ${articleName} is not available.`;
        }

        if (this.guests.some(g => g.guestName == guestName) == false) {
            return 'This guest is not invited.';
        }

        let currentGuest = this.guests.find(g => g.guestName == guestName);

        if (currentGuest.points < this.possibleArticles[articleModel]) {
            return 'You need to more points to purchase the article.';
        }

        currentArticle.quantity -= 1;
        currentGuest.points -= this.possibleArticles[articleModel];
        currentGuest.purchaseArticle += 1;

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;

    }

    showGalleryInfo(criteria) {
        let result = ''
        
        if (criteria == 'article') {
            result += 'Articles information:';
            for (let article of this.listOfArticles) {
                result += `\n${article.articleModel} - ${article.articleName} - ${article.quantity}`;
            }

            return result;

        } else {
            result += 'Guests information:'
            for (let guest of this.guests) {
                result += `\n${guest.guestName} - ${guest.purchaseArticle}`;
            }

            return result;
        }
    }
}


// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// console.log('---------------------------------');

// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// console.log('---------------------------------');

// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// console.log('---------------------------------');


const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));


