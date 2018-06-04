window.clv = window.clv || {};

if ( ( typeof Shopify ) === 'undefined' ) {
  Shopify = {};
}



// Init slick slider
clv.SlickSlider = function( el ) {
  if ( 'undefined' != typeof $.fn.slick && 'undefined' ) {
    $( el ).not( '.slick-initialized' ).slick();
  }
}

// Multipe variant control
clv.MultipleVariants = function( options ) {
  var moneyFormat = options.money_format,
      variant     = options.variant,
      price       = $( '.product-single__content .product__price' ),
      price_html  = '';

  if ( variant ) {
    // Update variant image, if one is set
    if ( variant.featured_image ) {
      setTimeout( function() {
        $( '.product-single__thumbnail-variant:not(.slick-cloned)[data-variant-id="' + variant.id + '"]' ).trigger( 'click' );
      });
    }
  }
}



// Init Photoswipe
clv.ImageGallery = function () {
  var initPhotoSwipeFromDOM = function( gallerySelector ) {
    var parseThumbnailElements = function( el ) {
      var thumbElements = el.childNodes,
          numNodes = thumbElements.length,
          items = [],
          el,
          childElements,
          size,
          item;

      for ( var i = 0; i < numNodes; i++ ) {
        el = thumbElements[i];

        // Include only element nodes 
        if ( el.nodeType !== 1 ) {
          continue;
        }

        childElements = el.children;

        size = el.getAttribute( 'data-size' ).split( 'x' );

        // Create slide object
        item = {
          src: el.getAttribute( 'data-image' ),
          w: parseInt(size[0], 10),
          h: parseInt(size[1], 10)
        };

        item.el = el; // Save link to element for getThumbBoundsFn

        if ( childElements.length > 0 ) {
          item.msrc = childElements[0].getAttribute( 'src' );
          if ( childElements.length > 1 ) {
            item.title = childElements[1].innerHTML;
          }
        }

        // Original image
        item.o = {
          src: item.src,
          w: item.w,
          h: item.h
        };

        items.push( item );
      }

      return items;
    };

    // Find nearest parent element
    var closest = function closest( el, fn ) {
      return el && ( fn( el ) ? el : closest( el.parentNode, fn ) );
    };

    // Triggers when user clicks on thumbnail
    var onThumbnailsClick = function( e ) {
      e = e || window.event;
      e.preventDefault ? e.preventDefault() : e.returnValue = false;

      var eTarget = e.target || e.srcElement;

      // Find root element of slide
      var clickedListItem = closest( eTarget, function( el ) {
        return ( el.tagName && el.tagName.toUpperCase() === 'A' );
      });

      if ( ! clickedListItem ) {
        return;
      }

      // Find index of clicked item by looping through all child nodes
      var clickedGallery = clickedListItem.parentNode,
          childNodes = clickedListItem.parentNode.childNodes,
          numChildNodes = childNodes.length,
          nodeIndex = 0,
          index;

      for ( var i = 0; i < numChildNodes; i++ ) {
        if ( childNodes[i].nodeType !== 1 ) {
          continue;
        }

        if ( childNodes[i] === clickedListItem ) {
          index = nodeIndex;
          break;
        }
        nodeIndex++;
      }



      if ( index >= 0 ) {
        // Open PhotoSwipe if valid index found
        openPhotoSwipe( index, clickedGallery );
      }
      return false;
    };

    // Parse picture index and gallery index from URL 
    var photoswipeParseHash = function() {
      var hash = window.location.hash.substring( 1 ),
          params = {};

      if ( hash.length < 5 ) {
        return params;
      }

      var vars = hash.split( '&' );
      for ( var i = 0; i < vars.length; i++ ) {
        if ( ! vars[i] ) {
          continue;
        }
        var pair = vars[i].split( '=' );
        if ( pair.length < 2 ) {
          continue;
        }
        params[pair[0]] = pair[1];
      }

      if ( params.gid ) {
        params.gid = parseInt( params.gid, 10 );
      }

      return params;
    };

    var openPhotoSwipe = function( index, galleryElement, disableAnimation, fromURL ) {
      var pswpElement = document.querySelectorAll( '.pswp' )[0],
          gallery,
          options,
          items;

      items = parseThumbnailElements( galleryElement );

      // Define options (if needed)
      options = {
        // Define gallery index ( for URL )
        galleryUID: galleryElement.getAttribute( 'data-photoswipe-index' ),

        getThumbBoundsFn: function(index) {
          // See Options -> getThumbBoundsFn section of documentation for more info
          var thumbnail = items[index].el.getElementsByTagName( 'img' )[0], // find thumbnail
              pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
              rect = thumbnail.getBoundingClientRect();

          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
        }

      };

      // PhotoSwipe opened from URL
      if ( fromURL ) {
        if ( options.galleryPIDs ) {
          // Parse real index when custom PIDs are used 
          for ( var j = 0; j < items.length; j++ ) {
            if ( items[j].pid == index ) {
              options.index = j;
              break;
            }
          }
        } else {
          // in URL indexes start from 1
          options.index = parseInt( index, 10 ) - 1;
        }
      } else {
        options.index = parseInt( index, 10 );
      }

      // Exit if index not found
      if ( isNaN( options.index ) ) {
        return;
      }

      if ( disableAnimation ) {
        options.showAnimationDuration = 0;
      }

    };

    // Loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for ( var i = 0, l = galleryElements.length; i < l; i++ ) {
      galleryElements[i].setAttribute( 'data-photoswipe-index', i + 1 );
      galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains 
    var hashData = photoswipeParseHash();
    if ( hashData.pid && hashData.gid ) {
      openPhotoSwipe( hashData.pid, galleryElements[hashData.gid - 1], true, true );
    }
  };
  // Execute above functions
  initPhotoSwipeFromDOM( '.jas-photoswipe' );
}




// Init Slick slider for product detail in theme customize
clv.ProductDetail = (function () {
  function ProductDetail() {
    // Init slick
    $( '.slick' ).slick();
  }
  return ProductDetail;
})();

/**
 * Theme init.
 */
clv.init = function() {
  clv.SlickSlider( '.slick' );
  clv.ImageGallery();
};
// Initialize clv's JS on document ready
$( clv.init );