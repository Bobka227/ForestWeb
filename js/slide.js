( () => {

    const slideImages = [
        { 
          img: 'imageStories/slide-1.jpg', 
          title: '"MAGICKÁ RUKA"', 
          description: 'Tajemný čaj "Magická ruka" se vaří ze sběru bylin a květů z kouzelné zahrady. Jeho lahodná chuť a aroma vyvolávají pocit klidu a harmonie.' 
        },
        { 
          img: 'imageStories/slide-2.jpg', 
          title: '"MODRÝ OHEŇ"', 
          description: 'Tajemný čaj "Modrý oheň" pochází z hlubin kouzelného lesa, kde rostou byliny s neuvěřitelnými schopnostmi léčit tělo i duši.' 
        },
        { 
          img: 'https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl90frp7e1090832vmqy3pcqfbcm/public', 
          title: '"ELFOVA PÍSEŇ"', 
          description: 'Čaj "Elfova píseň" je míchán podle starých elfích receptur, které se předávají z generace na generaci. Jeho chuť je prostoupena magií lesů a vodních pramenů.' 
        },
        { 
          img: 'https://static.vecteezy.com/system/resources/previews/029/294/516/non_2x/mystic-lotus-graces-tranquil-pond-ethereal-beauty-amidst-calming-waters-ai-generated-photo.jpg', 
          title: '"ŽIVOTNÝ LOTUS"', 
          description: 'Čaj "Životný lotus" je znám svou schopností oživit každou buňku v těle a propojit s energií přírody. Pije se jako pramen vnitřní síly a vitalizace.' 
        },
        { 
          img: 'https://c4.wallpaperflare.com/wallpaper/768/432/942/dragon-artwork-fantasy-art-trees-green-deer-wallpaper-preview.jpg', 
          title: '"DRAKONOVÝ STROM"', 
          description: 'Tajemný čaj "Drakonový strom" je vařen z listů stromů, které rostou v horách, zahalených mlhou a legendami. Jeho chuť připomíná sílu a odvahu.' 
        },
        { 
          img: 'https://media.mutualart.com/Images/2023_02/23/08/081337513/cbc392f4-83f1-4d1b-80ab-d85896226c6a.Jpeg?w=480', 
          title: '"PEGASOVO NEBE"', 
          description: 'Čaj "Pegasovo nebe" přináší s sebou klid a harmonii oblohy, kde rostou byliny pro tento tajemný nápoj. Jeho popíjení je jako cesta na oblaku.' 
        }
      ];
  
    const createHtmlStructure = ( sliderSelector, images ) => {
  
      const parent = document.querySelector( sliderSelector );

      images.forEach( ( slideImg, index ) => {
        const { img, title, description } = slideImg;
        const slideItem = `
        <div
          class="item"
          style="background-image: url('${ img }')"
          data-attribute="${ index }"
        >
          <div class="content">
            <div class="name">${ title }</div>
            <div class="description">${ description }</div>
        </div>
        `;
        const divFragment = document.createRange().createContextualFragment( slideItem );
        parent.appendChild( divFragment );
      } );
  
    
      const html = `
      <div class="buttons">
        <button class="prev"> Prev</button>
        <button class="next"> Next</button>
      </div>
      `;
      const fragment = document.createRange().createContextualFragment( html );
      parent.parentElement.appendChild( fragment );
      
    };
  
    
    createHtmlStructure( '.slider', slideImages );
    
    
    
    const $slider = document.querySelector( '.slider' );
    const $next = document.querySelector( '.next' );
    const $prev = document.querySelector( '.prev' );
  
    
    $next.addEventListener( 'click', () => {
      const items = document.querySelectorAll( '.item' );
      $slider.appendChild( items[ 0 ] );
    } );
  
    $prev.addEventListener( 'click', () => {
      const items = document.querySelectorAll( '.item' );
      $slider.prepend( items[ items.length - 1 ] );
    } );

  })();