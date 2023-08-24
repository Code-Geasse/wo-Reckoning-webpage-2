(function ($) {
	
	"use strict";

	// Page loading animation
	$(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });


	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	});
	
	$('.filters ul li').click(function(){
        $('.filters ul li').removeClass('active');
        $(this).addClass('active');
          
          var data = $(this).attr('data-filter');
          $grid.isotope({
            filter: data
          })
        });

        var $grid = $(".grid").isotope({
          	itemSelector: ".all",
          	percentPosition: true,
          	masonry: {
            columnWidth: ".all"
        }
    })

	var width = $(window).width();
		$(window).resize(function() {
			if (width > 992 && $(window).width() < 992) {
				location.reload();
			}
			else if (width < 992 && $(window).width() > 992) {
				location.reload();
			}
	})



	$(document).on("click", ".naccs .menu div", function() {
		var numberIndex = $(this).index();
	
		if (!$(this).is("active")) {
			$(".naccs .menu div").removeClass("active");
			$(".naccs ul li").removeClass("active");
	
			$(this).addClass("active");
			$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");
	
			var listItemHeight = $(".naccs ul")
				.find("li:eq(" + numberIndex + ")")
				.innerHeight();
			$(".naccs ul").height(listItemHeight + "px");
		}
	});

	$('.owl-features').owlCarousel({
		items:3,
		loop:true,
		dots: false,
		nav: true,
		autoplay: true,
		margin:30,
		responsive:{
			  0:{
				  items:1
			  },
			  800:{
				  items:2
			  },
			  1000:{
				  items:3
			  },
			  1800:{
				items:4
			}
		}
	})

	$('.owl-collection').owlCarousel({
		items:3,
		loop:true,
		dots: false,
		nav: true,
		autoplay: true,
		margin:30,
		responsive:{
			  0:{
				  items:1
			  },
			  800:{
				  items:2
			  },
			  1000:{
				  items:3
			}
		}
	})

	$('.owl-banner').owlCarousel({
		items:1,
		loop:true,
		dots: false,
		nav: true,
		autoplay: true,
		margin:30,
		responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:1
			  },
			  1000:{
				  items:1
			}
		}
	})

	
	
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});

	// $(document).ready(function () {
	//     $(document).on("scroll", onScroll);
	    
	//     //smoothscroll
	//     $('.scroll-to-section a[href^="#"]').on('click', function (e) {
	//         e.preventDefault();
	//         $(document).off("scroll");
	        
	//         $('.scroll-to-section a').each(function () {
	//             $(this).removeClass('active');
	//         })
	//         $(this).addClass('active');
	      
	//         var target = this.hash,
	//         menu = target;
	//        	var target = $(this.hash);
	//         $('html, body').stop().animate({
	//             scrollTop: (target.offset().top) - 79
	//         }, 500, 'swing', function () {
	//             window.location.hash = target;
	//             $(document).on("scroll", onScroll);
	//         });
	//     });
	// });

	// function onScroll(event){
	//     var scrollPos = $(document).scrollTop();
	//     $('.nav a').each(function () {
	//         var currLink = $(this);
	//         var refElement = $(currLink.attr("href"));
	//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	//             $('.nav ul li a').removeClass("active");
	//             currLink.addClass("active");
	//         }
	//         else{
	//             currLink.removeClass("active");
	//         }
	//     });
	// }


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});

	

	const dropdownOpener = $('.main-nav ul.nav .has-sub > a');

    // Open/Close Submenus
    if (dropdownOpener.length) {
        dropdownOpener.each(function () {
            var _this = $(this);

            _this.on('tap click', function (e) {
                var thisItemParent = _this.parent('li'),
                    thisItemParentSiblingsWithDrop = thisItemParent.siblings('.has-sub');

                if (thisItemParent.hasClass('has-sub')) {
                    var submenu = thisItemParent.find('> ul.sub-menu');

                    if (submenu.is(':visible')) {
                        submenu.slideUp(450, 'easeInOutQuad');
                        thisItemParent.removeClass('is-open-sub');
                    } else {
                        thisItemParent.addClass('is-open-sub');

                        if (thisItemParentSiblingsWithDrop.length === 0) {
                            thisItemParent.find('.sub-menu').slideUp(400, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        } else {
                            thisItemParent.siblings().removeClass('is-open-sub').find('.sub-menu').slideUp(250, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        }
                    }
                }

                e.preventDefault();
            });
        });
    }


	


})(window.jQuery);

// Function to fetch the "config.json" file and update the title tag
function updateTitleTag() {
	// Fetch the "config.json" file
	fetch('config.json')
	  .then(response => response.json())
	  .then(data => {
		// Update the title tag with the value from "config.json"
		document.title = data.title;
	  })
	  .catch(error => {
		console.error('Error fetching config.json:', error);
	  });
  }

  // Call the function to update the title tag
  updateTitleTag();
  document.addEventListener('DOMContentLoaded', function() {
	const url = 'http://seisonetwork.optikl.ink/topmoney.php?action=getTop10Players';
	const url2 = 'http://seisonetwork.optikl.ink/topbungeetime.php?action=getTop10Players';
  
	// Fetch top 10 players by economy
	fetch(url)
	  .then(response => response.json())
	  .then(players => {
		displayPlayers(players, 'economy');
	  });
  
	// Fetch top 10 players by playtime
	fetch(url2)
	  .then(response => response.json())
	  .then(players => {
		displayPlayers(players, 'playtime');
	  });
  });
  
  async function displayPlayers(players, type) {
	let html = '';
  
	for (const player of players) {
	  const skinUrl = await getSkinByUuid(player.player_name);
	  if (type === 'economy') {
		html += `
		  <div class="col-lg-6 currently-market-item msc">
			<div class="item">
			  <div class="left-image">
				<img src="${skinUrl}" alt="" style="border-radius: 20px; min-width: 195px;">
			  </div>
			  <div class="right-content">
				<h4>${player.player_name}</h4>
				<div class="line-dec"></div>
				<span class="bid">
				  Minecoins<br><strong>${player.money}</strong><br><em>($8,240.50)</em>
				</span>
			  </div>
			</div>
		  </div>`;
	  } else if (type === 'playtime') {
		html += `
		  <div class="col-lg-6 currently-market-item blc" style="display: none;">
			<div class="item">
			  <div class="left-image">
				<img src="${skinUrl}" alt="" style="border-radius: 20px; min-width: 195px;">
			  </div>
			  <div class="right-content">
				<h4>${player.player_name}</h4>
				<div class="line-dec"></div>
				<span class="bid">
				  Play Time<br><strong>${player.play_time}</strong><br><em>($8,240.50)</em>
				</span>
			  </div>
			</div>
		  </div>`;
	  }
	}
  
	// Append player list to HTML
	document.getElementById('playerList').innerHTML += html;
  }
  
  // Filter players by type
  const filters = document.querySelectorAll('.filters li');
  filters.forEach(filter => {
	filter.addEventListener('click', () => {
	  const type = filter.getAttribute('data-filter').substring(1);
	  const items = document.querySelectorAll(`.currently-market-item:not(.${type})`);
	  items.forEach(item => {
		item.style.display = 'none';
	  });
	  const showItems = document.querySelectorAll(`.${type}`);
	  showItems.forEach(item => {
		item.style.display = 'block';
	  });
	});
  });
  const getUuidByUsername = async (username) => {
    try {
        const usernameToUuidApi = `https://api.minetools.eu/uuid/${username}`;
        let response = await fetch(usernameToUuidApi);
        let data = await response.json();

        if(!data.id) return "None";
        else return await data.id;
    } catch (e) {
        return "None";
    }
}
const getSkinByUuid = async (username) => {
    try {
        const skinByUuidApi = `https://visage.surgeplay.com/full/512/${await getUuidByUsername(username)}`;
        let response = await fetch(skinByUuidApi);

        if(response.status === 400) return `https://visage.surgeplay.com/full/512/ec561538f3fd461daff5086b22154bce`;
        else return skinByUuidApi;
    } catch (e) {
        return "None";
    }
}
    // Fetch the config.json file
    fetch('../../config.json')
      .then(response => response.json())
      .then(data => {
        // Get the Bungeeservers object
        const servers = data.Bungeeservers;
  
        // Iterate over each server
        for (const server in servers) {
          // Get the server IP
          const ip = servers[server].ip;
  
          // Create the server item HTML
          const serverItem = `
            <div class="col-lg-4 col-sm-6">
              <div class="item">
                <div class="icon">
                  <img src="assets/images/icon-04.png" alt="">
                </div>
                <h4>${server}</h4>
                <div class="icon-button">
                  <button id="${server}-button" class="btn btn-outline-secondary" data-ip="${ip}">LOADING</button>
                </div>
              </div>
            </div>
          `;
  
          // Append the server item to the server container
          $('#server-container').append(serverItem);
  
          // Query the server status
          fetch(`https://api.mcsrvstat.us/2/${ip}`)
            .then(response => response.json())
            .then(data => {
              // Get the server status
              const status = data.online;
  
              // Get the server button
              const button = $(`#${server}-button`);
  
              // Update the button color and text based on the server status
              if (status) {
                button.removeClass('btn-outline-secondary').addClass('btn-outline-success');
                button.text('Copy IP Address');
              } else {
                button.removeClass('btn-outline-secondary').addClass('btn-outline-danger');
                button.text('Not Online');
              }
            })
            .catch(error => {
              // Handle any errors
              const button = $(`#${server}-button`);
              button.removeClass('btn-outline-secondary').addClass('btn-outline-danger');
              button.text('Not Online');
            });
        }
  
        // Add a click event handler to the server buttons
        $(document).on('click', '.btn', function() {
          // Get the server IP
          const ip = $(this).data('ip');
  
          // Create a temporary input element
          const tempInput = document.createElement('input');
          document.body.appendChild(tempInput);
  
          // Set the input value to the server IP
          tempInput.value = ip;
  
          // Select the input value
          tempInput.select();
  
          // Copy the input value to the clipboard
          document.execCommand('copy');
  
          // Remove the temporary input element
          document.body.removeChild(tempInput);
        });
      });
     