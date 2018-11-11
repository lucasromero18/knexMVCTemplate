
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {name: "How i met your mother", description: "A story about how i met your mother", author_id: 2, img_url:"https://www.hungryhowies.com/sites/default/files/styles/menu_item_280x175/public/images/menu-items/thumbnails/01._build_your_own_pizza_0.png?itok=JwtE20s8"},
        {name: "Wee Man gets sent off of a 5 story building", description: "Lil guy gets sent off of a 5 story building...legendary.", author_id: 1, img_url:"http://media.liveauctiongroup.net/i/15843/16556138_5.jpg?v=8D036A955745460"},
        {name: "Between Two Ferns", description: "Newest Novel featuring Justin Belieber", author_id: 3, img_url:"https://www.billboard.com/files/styles/article_main_image/public/media/justin-bieber-ferns-650-430.jpg"}
      ]);
    });
};
